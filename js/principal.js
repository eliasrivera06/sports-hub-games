// Cargar al inicio de la página
window.addEventListener('load', async () => {
  const session = await getSession();
  
  if (session && session.user) {
    const profile = await getUserProfile(session.user.id);
    const name = profile ? profile.full_name : (session.user.user_metadata.full_name || "Jugador");
    
    // Cambiar saludo en el HERO
    const welcomeEl = document.getElementById("welcomeMessage");
    if (welcomeEl) {
      welcomeEl.innerText = `¡BIENVENIDO, ${name.toUpperCase()}!`;
    }
  }
});

function goGames(){
  Swal.fire({
    title: 'Redirigiendo...',
    text: 'Prepárate para jugar',
    icon: 'success',
    background: '#121420',
    color: '#00ff9f'
  }).then(() => {
    window.location.href = "index.html";
  });
}
