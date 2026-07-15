function togglePassword(){
  const input = document.getElementById("password");
  const btn = document.getElementById("eyeBtn");

  input.type = input.type === "password" ? "text" : "password";
  btn.classList.toggle("active");
}

function togglePassword2(){
  const input = document.getElementById("confirmPassword");
  const btn = document.getElementById("eyeBtn2");

  input.type = input.type === "password" ? "text" : "password";
  btn.classList.toggle("active");
}

async function register() {
  const fullName = document.getElementById("fullName").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (!fullName || !username || !email || !pass || !confirm) {
    Swal.fire({
      title: 'Campos incompletos',
      text: 'Por favor, rellena todos los campos.',
      icon: 'warning',
      background: '#121420',
      color: '#ff3c38'
    });
    return;
  }

  if (username.length < 3) {
    Swal.fire({
      title: 'Usuario muy corto',
      text: 'El nombre de usuario debe tener al menos 3 caracteres.',
      icon: 'warning',
      background: '#121420',
      color: '#ff3c38'
    });
    return;
  }

  if (pass !== confirm) {
    Swal.fire({
      title: 'Error',
      text: 'Las contraseñas no coinciden.',
      icon: 'error',
      background: '#121420',
      color: '#ff3c38'
    });
    return;
  }

  // Mostrar indicador de carga
  Swal.fire({
    title: 'Creando cuenta...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    background: '#121420',
    color: '#ffffff'
  });

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: pass,
    options: {
      data: {
        full_name: fullName,
        username: username
      }
    }
  });

  if (error) {
    Swal.fire({
      title: 'Error de registro',
      text: error.message,
      icon: 'error',
      background: '#121420',
      color: '#ff3c38'
    });
  } else {
    // Si la confirmación de correo está activada, indicárselo al usuario
    const isEmailConfirmRequired = data.user && data.user.identities && data.user.identities.length > 0 && !data.session;

    Swal.fire({
      title: '¡Registro Exitoso!',
      text: isEmailConfirmRequired 
        ? 'Te hemos enviado un correo de confirmación. Por favor, verifica tu bandeja de entrada.' 
        : 'Tu cuenta ha sido creada con éxito. Ya puedes iniciar sesión.',
      icon: 'success',
      background: '#121420',
      color: '#00ff9f'
    }).then((result) => {
      window.location.href = 'login.html';
    });
  }
}

function googleLogin(){
  Swal.fire({
    title:'Google',
    text:'Próximamente',
    icon:'info',
    background:'#121420',
    color:'#ff3c38'
  });
}
