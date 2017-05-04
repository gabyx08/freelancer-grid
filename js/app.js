/*
 * Archivo principal de JS
 */

window.addEventListener("scroll", cambioTamaño);

function cambioTamaño(){
  console.log(event);
  var tituloNav = document.getElementsByClassName("tituloHeader");
  var header = document.getElementsByTagName("header");
  if (document.body.scrollTop > 100){
    tituloNav[0].style.fontSize="20px";
    header[0].style.padding= "8px 15px";
  }
  if (document.body.scrollTop < 100){
    tituloNav[0].style.fontSize="30px";
    header[0].style.padding= "15px 15px";
  }
}
