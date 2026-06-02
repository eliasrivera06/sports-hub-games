//------------------------------------
// CARGA DE INICIO
//------------------------------------
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // Espera un poco para simular carga
  setTimeout(() => {
    preloader.classList.add("open");

    // Mostrar contenido después de abrir
    setTimeout(() => {
      preloader.style.display = "none";
      if (content) content.classList.add("show");
    }, 1200);

  }, 1000);
});
//------------------------------------
// FIN CARGA DE INICIO
//------------------------------------

function login(){
  Swal.fire({
    title: 'Login',
    text: 'Próximamente 🚀',
    icon: 'info'
  });
}

function go(cat){
  let config = {};

  if(cat === 'futbol'){
    config = {
      title: '⚽ MODO FUTBOL',
      text: 'Penales y precisión',
      confirmButtonText: 'JUGAR',
      customClass: {
        popup: 'swal-futbol animate__animated animate__bounceIn'
      }
    };
  }
  else if(cat === 'f1'){
    config = {
      title: '🏎️ MODO F1',
      text: 'Velocidad extrema',
      confirmButtonText: 'ACELERAR',
      customClass: {
        popup: 'swal-f1 animate__animated animate__zoomIn'
      }
    };
  }
  else if(cat === 'ajedrez'){
    config = {
      title: '♟️ MODO AJEDREZ',
      text: 'Estrategia total',
      confirmButtonText: 'PENSAR',
      customClass: {
        popup: 'swal-ajedrez animate__animated animate__fadeInDown'
      }
    };
  }

  Swal.fire(config).then((result) => {
    if (result.isConfirmed) {
      if (cat === 'futbol') window.location.href = 'games/futbol/futbol.html';
      if (cat === 'f1') window.location.href = 'games/f1/f1.html';
      if (cat === 'ajedrez') window.location.href = 'games/ajedrez/ajedrez.html';
    }
  });
}
