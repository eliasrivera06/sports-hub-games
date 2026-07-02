-- =========================================================================
-- SCRIPT DE BASE DE DATOS PARA SUPABASE (SPORTS HUB GAMES)
-- =========================================================================
-- Instrucciones:
-- 1. Ve a tu panel de Supabase (https://supabase.com).
-- 2. Entra en tu proyecto: "BaseDeDatosSportHubGames".
-- 3. En el menú lateral izquierdo, haz clic en "SQL Editor".
-- 4. Haz clic en "New Query".
-- 5. Pega todo este código y haz clic en el botón "Run" (ejecutar).
-- =========================================================================

-- 1. CREAR LA TABLA DE PERFILES
-- Esta tabla guardará información pública adicional de los usuarios.
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  username text unique,
  full_name text,
  avatar_url text,
  
  constraint username_length check (char_length(username) >= 3)
);

-- 2. HABILITAR SEGURIDAD A NIVEL DE FILA (Row Level Security - RLS)
-- Esto protege las filas de ser modificadas o leídas de forma indebida.
alter table public.profiles enable row level security;

-- 3. CREAR POLÍTICAS DE ACCESO
-- Permitir que cualquiera pueda ver los perfiles (necesario para el ranking, por ejemplo).
create policy "Perfiles públicos visibles para cualquiera" on public.profiles
  for select using (true);

-- Permitir que cada usuario autenticado pueda insertar su propio perfil.
create policy "Usuarios pueden insertar su propio perfil" on public.profiles
  for insert with check (auth.uid() = id);

-- Permitir que cada usuario autenticado pueda actualizar únicamente su propio perfil.
create policy "Usuarios pueden actualizar su propio perfil" on public.profiles
  for update using (auth.uid() = id);

-- 4. FUNCIÓN Y TRIGGER PARA CREAR PERFIL AUTOMÁTICAMENTE AL REGISTRARSE
-- Cuando un usuario se registra en Supabase Auth, se dispara esta función.
-- Toma los metadatos de usuario (full_name y username) y los inserta en public.profiles.
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, username)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', 'Nuevo Jugador'),
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1))
  );
  return new;
end;
$$ language plpgsql security definer;

-- Crear el trigger que invoca la función anterior después de un registro en auth.users
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 5. FUNCIÓN PARA ELIMINAR REGISTRO NO CONFIRMADO (CANCELAR REGISTRO)
-- Permite que un usuario que recibió el correo elimine su registro si no fue él quien lo creó.
-- Por seguridad, solo se puede eliminar si la cuenta aún no ha sido confirmada (email_confirmed_at es null).
create or replace function public.delete_unconfirmed_user_by_email(user_email text)
returns boolean as $$
declare
  is_confirmed boolean;
  target_user_id uuid;
begin
  -- Obtener el ID y estado de confirmación del usuario por su correo
  select id, (email_confirmed_at is not null) into target_user_id, is_confirmed
  from auth.users
  where email = user_email;
  
  -- Si el usuario no existe, retornar false
  if target_user_id is null then
    return false;
  end if;
  
  -- Si no está confirmado, procedemos a borrarlo
  if not is_confirmed then
    delete from auth.users where id = target_user_id;
    return true;
  else
    return false;
  end if;
end;
$$ language plpgsql security definer;

-- 6. TABLA DE CLASIFICACIÓN (LEADERBOARD) PARA TIEMPO DE REACCIÓN
-- Guarda el mejor tiempo de cada jugador (el menor tiempo en milisegundos).
create table if not exists public.leaderboard_reaction_time (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  best_time integer not null, -- tiempo en milisegundos (ms)
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS
alter table public.leaderboard_reaction_time enable row level security;

-- Políticas de acceso para la tabla de clasificación
create policy "Leaderboard visible para cualquiera" on public.leaderboard_reaction_time
  for select using (true);

create policy "Usuarios pueden insertar su propia puntuación" on public.leaderboard_reaction_time
  for insert with check (auth.uid() = user_id);

create policy "Usuarios pueden actualizar su propia puntuación" on public.leaderboard_reaction_time
  for update using (auth.uid() = user_id);

-- 7. TABLA DE CLASIFICACIÓN PARA DUELO F1
-- Guarda la mejor racha de respuestas correctas de cada jugador.
create table if not exists public.leaderboard_f1_duels (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  best_streak integer not null, -- racha máxima de aciertos
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS
alter table public.leaderboard_f1_duels enable row level security;

-- Políticas de acceso
create policy "Leaderboard f1 duels visible para cualquiera" on public.leaderboard_f1_duels
  for select using (true);

create policy "Usuarios pueden insertar su racha de duelos" on public.leaderboard_f1_duels
  for insert with check (auth.uid() = user_id);

create policy "Usuarios pueden actualizar su racha de duelos" on public.leaderboard_f1_duels
  for update using (auth.uid() = user_id);

-- 8. TABLA DE CLASIFICACIÓN PARA PRUEBA DE CIRCUITO F1
-- Guarda la cantidad de veces que el jugador ha completado con éxito la prueba de 5 rondas.
create table if not exists public.leaderboard_f1_circuits (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  completions integer not null default 0, -- número de victorias completadas
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS
alter table public.leaderboard_f1_circuits enable row level security;

-- Políticas de acceso
create policy "Leaderboard f1 circuits visible para cualquiera" on public.leaderboard_f1_circuits
  for select using (true);

create policy "Usuarios pueden insertar sus victorias de circuitos" on public.leaderboard_f1_circuits
  for insert with check (auth.uid() = user_id);

create policy "Usuarios pueden actualizar sus victorias de circuitos" on public.leaderboard_f1_circuits
  for update using (auth.uid() = user_id);



