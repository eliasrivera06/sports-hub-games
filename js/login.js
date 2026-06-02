function login(){
  Swal.fire({
    title: '🎮 Bienvenido',
    text: 'Login exitoso',
    icon: 'success',
    background:'#121420',
    color:'#00ff9f'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'principal.html';
    }
  });
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
