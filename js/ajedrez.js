function goGame(url){
  Swal.fire({
    title:'Cargando...',
    icon:'success',
    background:'#121420',
    color:'#ffd166',
    timer:800,
    showConfirmButton:false
  });

  setTimeout(()=>{
    window.location.href = url;
  },800);
}
