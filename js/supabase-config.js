// Configuración e Inicialización de Supabase
const SUPABASE_URL = 'https://yixrxiwiuhtblxetjrtl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_3eFKo9wMaVpky_V3KvTkXA_FzKE35zx';

// Inicializar el cliente de Supabase
// Usamos una variable temporal y reasignamos window.supabase para evitar colisiones
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabase = supabaseClient;

// Obtener la sesión actual de forma asíncrona
async function getSession() {
  const { data: { session }, error } = await supabaseClient.auth.getSession();
  if (error) {
    console.error('Error al obtener la sesión:', error.message);
    return null;
  }
  return session;
}

// Obtener el perfil público del usuario
async function getUserProfile(userId) {
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error al obtener el perfil de usuario:', error.message);
    return null;
  }
  return data;
}

// Función auxiliar para determinar el prefijo de ruta si estamos en una subcarpeta
function getPathPrefix() {
  const path = window.location.pathname;
  if (path.includes('/games/')) {
    return '../../';
  }
  return '';
}

// Cerrar sesión
async function logoutUser(event) {
  if (event) event.preventDefault();
  
  Swal.fire({
    title: '¿Cerrar sesión?',
    text: "Tendrás que volver a iniciar sesión para guardar tus puntajes.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#00ff9f',
    cancelButtonColor: '#ff3c38',
    confirmButtonText: 'Sí, salir',
    cancelButtonText: 'Cancelar',
    background: '#121420',
    color: '#ffffff'
  }).then(async (result) => {
    if (result.isConfirmed) {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        Swal.fire({
          title: 'Error',
          text: 'No se pudo cerrar la sesión: ' + error.message,
          icon: 'error',
          background: '#121420',
          color: '#ff3c38'
        });
      } else {
        Swal.fire({
          title: 'Sesión Cerrada',
          text: '¡Vuelve pronto!',
          icon: 'success',
          background: '#121420',
          color: '#00ff9f'
        }).then(() => {
          // Redireccionar al index u otra página
          window.location.href = getPathPrefix() + 'index.html';
        });
      }
    }
  });
}

// Inyectar estilos personalizados para el dropdown retro
function injectDropdownStyles() {
  if (document.getElementById('supabase-dropdown-styles')) return;

  const style = document.createElement('style');
  style.id = 'supabase-dropdown-styles';
  style.innerHTML = `
    .user-dropdown-menu {
      position: absolute;
      top: 100%;
      right: 0;
      background: #121420;
      border: 3px solid #ffd166;
      box-shadow: 0 4px 0 #000;
      z-index: 1000;
      min-width: 180px;
      padding: 5px 0;
      border-radius: 0;
      margin-top: 5px;
    }
    .user-dropdown-item {
      display: block;
      width: 100%;
      padding: 12px 15px;
      text-decoration: none;
      font-size: 11px;
      font-family: 'Press Start 2P', cursive;
      color: #ff3c38 !important;
      background: transparent;
      border: none;
      text-align: center;
      transition: 0.2s;
    }
    .user-dropdown-item:hover {
      background: #1a1d2e;
      color: #00ff9f !important;
      text-shadow: 0 0 5px #00ff9f;
    }
  `;
  document.head.appendChild(style);
}

// Alternar visualización del dropdown del usuario
function toggleUserDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('userDropdownMenu');
  if (menu) {
    menu.classList.toggle('d-none');
  }
}

// Cerrar el dropdown al hacer clic fuera
document.addEventListener('click', (event) => {
  const menu = document.getElementById('userDropdownMenu');
  const btn = document.getElementById('userMenuBtn');
  
  if (menu && !menu.classList.contains('d-none')) {
    // Si el clic no fue dentro del menú ni en el botón
    if (!menu.contains(event.target) && event.target !== btn) {
      menu.classList.add('d-none');
    }
  }
});

// Actualizar Navbar dinámicamente según el estado de la sesión
async function updateNavbar() {
  const session = await getSession();
  const navbarNav = document.querySelector('.navbar-nav');
  
  if (!navbarNav) return;

  // Inyectar estilos por si acaso
  injectDropdownStyles();

  const prefix = getPathPrefix();

  // Si hay sesión activa
  if (session && session.user) {
    const userId = session.user.id;
    const profile = await getUserProfile(userId);
    const displayName = profile ? (profile.username || profile.full_name) : (session.user.user_metadata.username || 'Jugador');
    const fullName = profile ? profile.full_name : (session.user.user_metadata.full_name || 'Jugador');
    
    // Almacenamos temporalmente en sessionStorage para fácil acceso en otras partes
    sessionStorage.setItem('current_user_name', fullName);
    sessionStorage.setItem('current_user_username', displayName);
    sessionStorage.setItem('current_user_email', session.user.email);

    // Logueado: Inicio + Ranking + dropdown con Perfil arriba y Cerrar Sesión abajo
    navbarNav.innerHTML = `
      <li class="nav-item"><a class="nav-link" href="${prefix}principal.html">Inicio</a></li>
      <li class="nav-item"><a class="nav-link" href="${prefix}ranking.html">Ranking</a></li>
      <li class="nav-item dropdown position-relative" style="cursor: pointer;">
        <span class="nav-link text-info" id="userMenuBtn" onclick="toggleUserDropdown(event)" style="user-select: none;">
          🎮 ${displayName} ▼
        </span>
        <div id="userDropdownMenu" class="user-dropdown-menu d-none">
          <a href="${prefix}perfil.html" class="user-dropdown-item">
            👤 MI PERFIL
          </a>
          <hr style="border-color: rgba(255,255,255,0.1); margin: 2px 10px;">
          <a href="#" onclick="logoutUser(event)" class="user-dropdown-item">
            CERRAR SESION
          </a>
        </div>
      </li>
    `;
  } else {
    // Sin sesión: solo Inicio y Login (Perfil se oculta)
    sessionStorage.clear();
    
    navbarNav.innerHTML = `
      <li class="nav-item"><a class="nav-link" href="${prefix}principal.html">Inicio</a></li>
      <li class="nav-item"><a class="nav-link" href="${prefix}login.html">Login</a></li>
    `;
  }
}

// Ejecutar updateNavbar al cargar cualquier página que incluya este script
document.addEventListener('DOMContentLoaded', updateNavbar);
