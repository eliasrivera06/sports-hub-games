let currentSession = null;
let currentProfile = null;

// Ejecutar al cargar la página
window.addEventListener('load', async () => {
  // Mostrar indicador de carga
  Swal.fire({
    title: 'Cargando perfil...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    background: '#121420',
    color: '#ffffff'
  });

  currentSession = await getSession();

  if (!currentSession || !currentSession.user) {
    Swal.fire({
      title: 'Acceso denegado',
      text: 'Debes iniciar sesión para ver tu perfil.',
      icon: 'error',
      background: '#121420',
      color: '#ff3c38'
    }).then(() => {
      window.location.href = 'login.html';
    });
    return;
  }

  await loadProfileData();
  Swal.close();
});

// Cargar y mostrar datos del perfil
async function loadProfileData() {
  if (!currentSession) return;
  
  const userId = currentSession.user.id;
  currentProfile = await getUserProfile(userId);
  
  const email = currentSession.user.email;
  const name = currentProfile ? currentProfile.full_name : 'Nuevo Jugador';
  const username = currentProfile ? currentProfile.username : 'sin_usuario';

  document.getElementById("nameText").innerText = "👤 Nombre: " + name;
  document.getElementById("userText").innerText = "🎮 Usuario: " + username;
  document.getElementById("emailText").innerText = "📧 Correo: " + email;
}

// Editar Perfil en Supabase
async function editProfile() {
  if (!currentSession || !currentProfile) return;

  const currentName = currentProfile.full_name || '';
  const currentUsername = currentProfile.username || '';

  Swal.fire({
    title: 'EDITAR PERFIL',
    background: '#121420',
    color: '#ffffff',
    html: `
      <div style="text-align: left; margin-bottom: 8px; font-family: 'Press Start 2P', cursive; font-size: 10px;">Nombre:</div>
      <input id="swal-name" class="swal2-input" placeholder="Nombre" value="${currentName}" style="margin: 0 0 16px 0; width: 80%; background: #1a1d2e; color: #ffffff; border: 2px solid #00ff9f;">
      
      <div style="text-align: left; margin-bottom: 8px; font-family: 'Press Start 2P', cursive; font-size: 10px;">Usuario (mín. 3 carac.):</div>
      <input id="swal-user" class="swal2-input" placeholder="Usuario" value="${currentUsername}" style="margin: 0 0 16px 0; width: 80%; background: #1a1d2e; color: #ffffff; border: 2px solid #00ff9f;">
      
      <div style="text-align: left; margin-bottom: 8px; font-family: 'Press Start 2P', cursive; font-size: 10px;">Nueva contraseña (opcional):</div>
      <div class="swal-pass-container" style="position: relative; width: 80%; margin: 0 auto 16px auto;">
        <input id="swal-pass" type="password" class="swal2-input" placeholder="Contraseña" style="width: 100%; margin: 0; background: #1a1d2e; color: #ffffff; border: 2px solid #00ff9f;">
        <span onclick="toggleSwalPassword()" id="swalEye" style="position: absolute; right: 10px; top: 15px; cursor: pointer; color: #00ff9f; font-size: 18px;">👁</span>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: 'GUARDAR',
    cancelButtonText: 'CANCELAR',
    confirmButtonColor: '#00ff9f',
    cancelButtonColor: '#ff3c38',
    preConfirm: () => {
      const name = document.getElementById('swal-name').value.trim();
      const user = document.getElementById('swal-user').value.trim();
      const pass = document.getElementById('swal-pass').value;

      if (!name || !user) {
        Swal.showValidationMessage('Completa los campos obligatorios (Nombre y Usuario)');
        return false;
      }
      if (user.length < 3) {
        Swal.showValidationMessage('El nombre de usuario debe tener al menos 3 caracteres');
        return false;
      }

      return { name, user, pass };
    }
  }).then(async (result) => {
    if (result.isConfirmed) {
      const data = result.value;

      // Mostrar cargando
      Swal.fire({
        title: 'Actualizando perfil...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
        background: '#121420',
        color: '#ffffff'
      });

      try {
        const userId = currentSession.user.id;

        // 1. Actualizar contraseña si se ingresó
        if (data.pass) {
          const { error: passError } = await supabase.auth.updateUser({ password: data.pass });
          if (passError) throw new Error('Error al actualizar contraseña: ' + passError.message);
        }

        // 2. Actualizar tabla public.profiles
        const { error: profileError } = await supabase
          .from('profiles')
          .update({
            full_name: data.name,
            username: data.user,
            updated_at: new Date().toISOString()
          })
          .eq('id', userId);

        if (profileError) {
          if (profileError.code === '23505') { // Violación UNIQUE
            throw new Error('El nombre de usuario ya está en uso. Elige otro.');
          }
          throw new Error('Error al actualizar datos: ' + profileError.message);
        }

        // Refrescar datos locales y UI
        await loadProfileData();
        // Forzar actualización de la navbar por si cambió el usuario
        await updateNavbar();

        Swal.fire({
          title: 'GUARDADO',
          text: 'Perfil actualizado con éxito',
          icon: 'success',
          background: '#121420',
          color: '#00ff9f'
        });
      } catch (err) {
        Swal.fire({
          title: 'Error al guardar',
          text: err.message,
          icon: 'error',
          background: '#121420',
          color: '#ff3c38'
        });
      }
    }
  });
}

// Cerrar sesión
function logout() {
  logoutUser();
}

function toggleSwalPassword(){
  const input = document.getElementById("swal-pass");
  const eye = document.getElementById("swalEye");

  if(input.type === "password"){
    input.type = "text";
    eye.innerText = "👁‍🗨";
  } else {
    input.type = "password";
    eye.innerText = "👁";
  }
}
