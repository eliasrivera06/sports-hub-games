function editProfile(){
  Swal.fire({
    title: 'EDITAR PERFIL',
html: `
  <input id="swal-name" class="swal2-input" placeholder="Nombre">
  <input id="swal-user" class="swal2-input" placeholder="Usuario">
  <input id="swal-email" class="swal2-input" placeholder="Correo">

  <div class="swal-pass-container">
    <input id="swal-pass" type="password" class="swal2-input" placeholder="Contraseña">
    <span onclick="toggleSwalPassword()" id="swalEye">👁</span>
  </div>
`,
    showCancelButton: true,
    confirmButtonText: 'GUARDAR',
    cancelButtonText: 'CANCELAR',

    preConfirm: () => {
      const name = document.getElementById('swal-name').value;
      const user = document.getElementById('swal-user').value;
      const email = document.getElementById('swal-email').value;
      const pass = document.getElementById('swal-pass').value;

      if(!name || !user || !email){
        Swal.showValidationMessage('Completa los campos obligatorios');
        return false;
      }

      return { name, user, email, pass };
    }

  }).then((result) => {

    if(result.isConfirmed){
      const data = result.value;

      // 🔥 ACTUALIZAR UI
      document.getElementById("nameText").innerText = "👤 Nombre: " + data.name;
      document.getElementById("userText").innerText = "🎮 Usuario: " + data.user;
      document.getElementById("emailText").innerText = "📧 Correo: " + data.email;

      // 💾 GUARDAR (opcional)
      localStorage.setItem("userName", data.name);
      localStorage.setItem("userUser", data.user);
      localStorage.setItem("userEmail", data.email);

      Swal.fire({
        title:'GUARDADO',
        text:'Perfil actualizado',
        icon:'success',
        background:'#121420',
        color:'#00ff9f'
      });
    }

  });
}

function logout(){
  Swal.fire({
    title:'Sesión cerrada',
    text:'Vuelve pronto',
    icon:'success',
    background:'#121420',
    color:'#00ff9f'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'index.html';
    }
  });
}
window.onload = () => {
  const name = localStorage.getItem("userName");
  const user = localStorage.getItem("userUser");
  const email = localStorage.getItem("userEmail");

  if(name) document.getElementById("nameText").innerText = "👤 Nombre: " + name;
  if(user) document.getElementById("userText").innerText = "🎮 Usuario: " + user;
  if(email) document.getElementById("emailText").innerText = "📧 Correo: " + email;
};


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
