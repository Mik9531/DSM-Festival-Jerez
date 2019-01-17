//Controles de video

var miVideo;
var reproducir;
var audio;
var parar;
var barra;
var barraProgreso;
var actualizarBarra;

function iniciar(){
  
  miVideo=document.getElementById("miPelicula");
  reproducir=document.getElementById("botonPlay");
  audio=document.getElementById("botonAudioSi");
  parar=document.getElementById("botonStop");
  barra=document.getElementById("barra");
  barra.largoBarra = 540;
  barraProgreso=document.getElementById("barraProgreso");
  
  reproducir.addEventListener("click",playOPausa,false);
  parar.addEventListener("click",stop, false);
  audio.addEventListener("click",sonar,false);
  barra.addEventListener("click",clickEnBarra,false);
}

function playOPausa(){
  if(!miVideo.paused && !miVideo.ended){
    miVideo.pause();
    reproducir.src="Imagenes/play.png";
    window.clearInterval(actualizarBarra);
  }else{
    miVideo.play();
    reproducir.src="Imagenes/pausa.png";
    actualizarBarra=window.setInterval(actualizar,500);
  }
}

function stop(){
  miVideo.pause();
  reproducir.src="Imagenes/play.png";
  miVideo.currentTime=0;
  barraProgreso.style.width="0px";
  window.clearInterval(actualizarBarra);
}

function sonar(){
  if(miVideo.muted){
    miVideo.muted=false;
    audio.src="Imagenes/audiosi.png";
  }else{
    miVideo.muted=true;
    audio.src="Imagenes/audiono.png";
  }
}

function actualizar(){
  if(!miVideo.ended){
    var largo=parseInt(miVideo.currentTime*barra.largoBarra/miVideo.duration);
    barraProgreso.style.width=largo+"px";
  } else {
    barraProgreso.style.width="0px";
    reproducir.src="Imagenes/play.png";
    window.clearInterval(actualizarBarra);
  }
}

function clickEnBarra(e){
  if(!miVideo.paused && !miVideo.ended){
    var ratonX = e.pageX-barra.offsetLeft;
    miVideo.currentTime = ratonX*miVideo.duration/barra.largoBarra;
    barraProgreso.style.width=ratonX+"px";
  }
}

window.addEventListener("load", iniciar,false);f