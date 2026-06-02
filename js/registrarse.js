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

function register(){
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if(pass !== confirm){
    Swal.fire({
      title:'Error',
      text:'Las contraseñas no coinciden',
      icon:'error',
      background:'#121420',
      color:'#ff3c38'
    });
    return;
  }

  Swal.fire({
    title:'Cuenta creada',
    text:'Bienvenido a Sports Hub Games',
    icon:'success',
    background:'#121420',
    color:'#00ff9f'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'login.html';
    }
  });
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
