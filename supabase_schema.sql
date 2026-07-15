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

-- 9. TABLA DE CLASIFICACIÓN PARA CRUCE FUTBOLERO (3 EN RAYA)
-- Guarda el mejor tiempo (el menor tiempo en segundos) para cada dificultad.
create table if not exists public.leaderboard_futbol_3raya (
  user_id uuid references public.profiles(id) on delete cascade,
  difficulty text not null check (difficulty in ('easy', 'medium', 'hard')),
  best_time integer not null, -- tiempo transcurrido en segundos
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (user_id, difficulty)
);

-- Habilitar RLS
alter table public.leaderboard_futbol_3raya enable row level security;

-- Políticas de acceso
create policy "Leaderboard futbol 3raya visible para cualquiera" on public.leaderboard_futbol_3raya
  for select using (true);

create policy "Usuarios pueden insertar su tiempo de 3raya" on public.leaderboard_futbol_3raya
  for insert with check (auth.uid() = user_id);

create policy "Usuarios pueden actualizar su tiempo de 3raya" on public.leaderboard_futbol_3raya
  for update using (auth.uid() = user_id);

-- 10. TABLA DE CLASIFICACIÓN PARA EL JUGADOR DEL DÍA
-- Acumula un punto por cada día en que el usuario adivina el jugador correctamente.
-- La columna last_win_date evita contar dos victorias en el mismo día.
create table if not exists public.leaderboard_futbol_jugadordia (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  daily_wins integer not null default 0, -- contador total de días adivinados
  last_win_date date, -- última fecha en que ganó (para evitar doble conteo en el mismo día)
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS
alter table public.leaderboard_futbol_jugadordia enable row level security;

-- Políticas de acceso
create policy "Leaderboard jugador dia visible para cualquiera" on public.leaderboard_futbol_jugadordia
  for select using (true);

create policy "Usuarios pueden insertar su record de jugador dia" on public.leaderboard_futbol_jugadordia
  for insert with check (auth.uid() = user_id);

create policy "Usuarios pueden actualizar su record de jugador dia" on public.leaderboard_futbol_jugadordia
  for update using (auth.uid() = user_id);


-- 11. TABLA DE CLASIFICACIÓN PARA EL CRUCIGRAMA FUTBOLERO
-- Acumula la cantidad de niveles de crucigrama completados por el usuario.
create table if not exists public.leaderboard_futbol_crucigrama (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  levels_completed integer not null default 0, -- total de niveles completados
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS
alter table public.leaderboard_futbol_crucigrama enable row level security;

-- Políticas de acceso
create policy "Leaderboard crucigrama visible para cualquiera" on public.leaderboard_futbol_crucigrama
  for select using (true);

create policy "Usuarios pueden insertar su record de crucigrama" on public.leaderboard_futbol_crucigrama
  for insert with check (auth.uid() = user_id);

create policy "Usuarios pueden actualizar su record de crucigrama" on public.leaderboard_futbol_crucigrama
  for update using (auth.uid() = user_id);


-- 12. TABLA DE CLASIFICACIÓN PARA QUIZ DE AJEDREZ
-- Guarda el mejor puntaje del usuario. El score no puede bajar: solo se actualiza
-- si el nuevo resultado supera al anterior. El puntaje máximo es 12/12 correctas.
create table if not exists public.leaderboard_ajedrez_quiz (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  best_score integer not null default 0,        -- puntaje más alto obtenido
  best_correct integer not null default 0,       -- mayor cantidad de respuestas correctas
  total_questions integer not null default 12,   -- total de preguntas del quiz
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Habilitar RLS
alter table public.leaderboard_ajedrez_quiz enable row level security;

-- Políticas de acceso
create policy "Leaderboard quiz ajedrez visible para cualquiera" on public.leaderboard_ajedrez_quiz
  for select using (true);

create policy "Usuarios pueden insertar su record de quiz ajedrez" on public.leaderboard_ajedrez_quiz
  for insert with check (auth.uid() = user_id);

create policy "Usuarios pueden actualizar su record de quiz ajedrez" on public.leaderboard_ajedrez_quiz
  for update using (auth.uid() = user_id);


-- 13. TABLA DE CLASIFICACIÓN PARA MOVIMIENTOS VÁLIDOS (AJEDREZ)
-- Guarda el mejor puntaje del usuario. Solo sube: nunca puede bajar.
-- 6 rondas totales (una por pieza). Puntaje máximo alcanzable: ~700+ pts.
create table if not exists public.leaderboard_ajedrez_movimientos (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  best_score integer not null default 0,        -- puntaje más alto obtenido
  best_rounds_won integer not null default 0,    -- mayor cantidad de rondas completadas
  total_rounds integer not null default 6,       -- total de rondas (piezas)
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.leaderboard_ajedrez_movimientos enable row level security;

create policy "Leaderboard movimientos visible para cualquiera" on public.leaderboard_ajedrez_movimientos
  for select using (true);

create policy "Usuarios pueden insertar su record de movimientos" on public.leaderboard_ajedrez_movimientos
  for insert with check (auth.uid() = user_id);

create policy "Usuarios pueden actualizar su record de movimientos" on public.leaderboard_ajedrez_movimientos
  for update using (auth.uid() = user_id);


-- 14. TABLA DE CLASIFICACIÓN PARA MATE EN 1 (AJEDREZ)
-- Guarda el mejor puntaje del usuario. Solo sube: nunca puede bajar.
-- 8 puzzles totales. Puntaje máximo alcanzable: ~1000+ pts.
create table if not exists public.leaderboard_ajedrez_mate (
  user_id uuid references public.profiles(id) on delete cascade primary key,
  best_score integer not null default 0,         -- puntaje más alto obtenido
  best_puzzles_solved integer not null default 0, -- mayor cantidad de puzzles resueltos
  total_puzzles integer not null default 8,       -- total de puzzles
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.leaderboard_ajedrez_mate enable row level security;

create policy "Leaderboard mate visible para cualquiera" on public.leaderboard_ajedrez_mate
  for select using (true);

create policy "Usuarios pueden insertar su record de mate" on public.leaderboard_ajedrez_mate
  for insert with check (auth.uid() = user_id);

create policy "Usuarios pueden actualizar su record de mate" on public.leaderboard_ajedrez_mate
  for update using (auth.uid() = user_id);


