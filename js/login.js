async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    Swal.fire({
      title: 'Campos incompletos',
      text: 'Por favor, ingresa tu correo y contraseña.',
      icon: 'warning',
      background: '#121420',
      color: '#ff3c38'
    });
    return;
  }

  // Mostrar indicador de carga
  Swal.fire({
    title: 'Iniciando sesión...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    background: '#121420',
    color: '#ffffff'
  });

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    Swal.fire({
      title: 'Error de inicio de sesión',
      text: error.message === 'Invalid login credentials' ? 'Correo o contraseña incorrectos.' : error.message,
      icon: 'error',
      background: '#121420',
      color: '#ff3c38'
    });
  } else {
    // Almacenamos temporalmente si acaba de loguearse para saludarlo
    sessionStorage.setItem('just_logged_in', 'true');
    
    Swal.fire({
      title: '🎮 ¡Bienvenido de nuevo!',
      text: 'Inicio de sesión exitoso.',
      icon: 'success',
      background: '#121420',
      color: '#00ff9f',
      width: '420px',
      customClass: {
        title: 'swal-title-fit'
      }
    }).then((result) => {
      window.location.href = 'principal.html';
    });

  }
}

function googleLogin(){
  Swal.fire({
    title: 'Google Login',
    text: 'Funcionalidad futura',
    icon: 'info',
    background:'#121420',
    color:'#ff3c38'
  });
}

function togglePassword(){
  const input = document.getElementById("password");
  const btn = document.getElementById("eyeBtn");

  if(input.type === "password"){
    input.type = "text";
    btn.classList.add("active");
    btn.innerHTML = "👁‍🗨"; // ojo abierto más marcado
  } else {
    input.type = "password";
    btn.classList.remove("active");
    btn.innerHTML = "👁";
  }
}
