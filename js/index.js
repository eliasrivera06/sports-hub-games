//------------------------------------
// CARGA DE INICIO
//------------------------------------
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const pageContent = document.getElementById("page-content");

  // Pequeña pausa para que se vea la pantalla de carga completa
  setTimeout(() => {
    // Disparar animación de apertura de puertas
    preloader.classList.add("open");

    // Cuando termina la transición de puertas (1.2s), mostrar el contenido
    setTimeout(() => {
      // Ocultar el preloader
      preloader.style.display = "none";

      // Mostrar el contenido con fade-in
      pageContent.style.display = "flex";
      // Forzar reflow para que la transición CSS funcione
      pageContent.offsetHeight;
      pageContent.style.opacity = "1";
    }, 1200); // Coincide con la duración de la transición CSS de .door

  }, 800); // Tiempo mínimo que se ve la pantalla de carga
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
