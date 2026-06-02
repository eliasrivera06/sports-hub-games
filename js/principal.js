function login(){
  Swal.fire({
    title: 'Login',
    text: 'Próximamente 🚀',
    icon: 'info'
  });
}

function goGames(){
  Swal.fire({
    title: 'Redirigiendo...',
    text: 'Prepárate para jugar',
    icon: 'success'
  }).then(() => {
    window.location.href = "index.html";
  });
}
