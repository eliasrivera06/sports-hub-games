/**
 * ajedrez.js — Hub de Ajedrez | Sports Hub Games
 * Maneja la navegación entre minijuegos de ajedrez
 */

function goGame(url) {
  const loadHtml = '<div style="font-family:\'Press Start 2P\',cursive;font-size:12px;color:#ffd166;">♟ Cargando juego...</div>';

  Swal.fire({
    html: loadHtml,
    background: '#1a1c2e',
    timer: 700,
    showConfirmButton: false,
    customClass: { popup: 'swal-chess-hub-load' }
  });

  setTimeout(function () {
    window.location.href = url;
  }, 700);
}
