function goGame(url){
  Swal.fire({
    title:'Cargando...',
    icon:'success',
    background:'#121420',
    color:'#00ff9f',
    timer:800,
    showConfirmButton:false
  });

  setTimeout(()=>{
    window.location.href = url;
  },800);
}
