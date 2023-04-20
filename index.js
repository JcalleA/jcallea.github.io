function themeChange (){
  const theme = document.getElementById("thema").classList.toggle("ligth-theme")
}
function obtenerHora(){
  const reloj= document.getElementById('reloj');
  const relojHr= document.getElementById('hr');
  const relojMn= document.getElementById('mn');
  const relojSg= document.getElementById('sg');
  const relojAm= document.getElementById('am');



  const fecha= new Date();
  const hora = (fecha.getHours()>12)?fecha.getHours()-12:fecha.getHours();
  const minutos=fecha.getMinutes();
  const hr = (hora.toString().length==1)?"0"+hora:hora;
  const mn= (minutos.toString().length==1)?"0"+minutos:minutos;
  const segundos= fecha.getSeconds();
  const sg= (segundos.toString().length==1)?"0"+segundos:segundos;
  const am =( fecha.getHours()>12) ? 'PM':'AM';
  relojHr.textContent=hr;
  relojMn.textContent=mn;
  relojSg.textContent=sg;
  relojAm.textContent=am;
  reloj.style.animationPlayState= "running";
}
setInterval(obtenerHora, 1000);