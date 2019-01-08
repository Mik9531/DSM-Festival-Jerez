var stage;
var texto;
var texto1;
var tamanio;



/* Función que se encarga de mostrar el mensaje de bienvenida al cuestionario: */
function inicializar(){
  stage = new createjs.Stage("escenario");
  texto = new createjs.Text("¡Bienvenido al juego!", "34px Century", "black");
  tamanio = texto.getBounds();
  texto.x = stage.canvas.width/2 - tamanio.width/2;
  texto.y = stage.canvas.height/2 - tamanio.height/2;
  texto.cursor="pointer"; 
  stage.enableMouseOver(); 
  texto.textBaseline = "alphabetic";
  texto.addEventListener("click", firstQuestion);
  stage.addChild(texto);
  stage.update();
}

function firstQuestion(event){
	alert('Buena suerte');
	console.log('Aviso consola: Has pulsado');
	stage.enableMouseOver(0);
	texto.removeEventListener("click", firstQuestion);
	pregunta1();
	
}

function secondQuestion(event){
	alert('¡Has acertado! Vamos a por la siguiente pregunta');
	console.log('Aviso consola: Has pulsado');
	stage.enableMouseOver(0);
	bitmap1.removeEventListener("click", error);
	bitmap2.removeEventListener("click", error);
	bitmap3.removeEventListener("click", secondQuestion);
	bitmap4.removeEventListener("click", error);
	pregunta2();	
}

function thirdQuestion(event){
	alert('¡Has acertado! Vamos a por la siguiente pregunta');
	console.log('Aviso consola: Has pulsado');
	stage.enableMouseOver(0);
	bitmap1.removeEventListener("click", thirdQuestion);
	bitmap2.removeEventListener("click", error);
	bitmap3.removeEventListener("click", error);
	bitmap4.removeEventListener("click", error);
	pregunta3();
}

function fourthQuestion(event){
	alert('¡Has acertado! Vamos a por la siguiente pregunta');
	console.log('Aviso consola: Has pulsado');
	stage.enableMouseOver(0);
	bitmap1.removeEventListener("click", error);
	bitmap2.removeEventListener("click", error);
	bitmap3.removeEventListener("click", error);
	bitmap4.removeEventListener("click", fourthQuestion);
	pregunta4();
}


function fifthQuestion(event){
	alert('¡Has acertado!');
	console.log('Aviso consola: Has pulsado');
	stage.enableMouseOver(0);
	bitmap1.removeEventListener("click", error);
	bitmap2.removeEventListener("click", fifthQuestion);
	bitmap3.removeEventListener("click", error);
	bitmap4.removeEventListener("click", error);
	fin();
}


function end(){
  alert("¡Bien hecho!");
  stage.enableMouseOver(0);
  bitmap1.removeEventListener("click", end);
  bitmap2.removeEventListener("click", end);
  bitmap3.removeEventListener("click", end);
  bitmap4.removeEventListener("click", end);
  fin();
}


function pregunta1(event){
  stage = new createjs.Stage("escenario");
  grupo = new createjs.Container();
  
  grupo.name = 'fotos';
  texto1 = new createjs.Text("1. ¿Cuál de estas fotografías pertenece al estilo fotográfico de retrato?", "14px Century", "black");
  tamanio = texto1.getBounds();
  texto1.x = stage.canvas.width/2 - tamanio.width/2;
  texto1.y = stage.canvas.height/10 - tamanio.height/2;
  
  imagen1 = new Image();
  imagen1.src = "Imagenes/Juego/Kryptoni.jpg";
  
  imagen1.onload = function()
  {
    bitmap1 = new createjs.Bitmap(imagen1);
    tamimg = bitmap1.getBounds();
    bitmap1.x = stage.canvas.width/4-tamimg.width/2;
    bitmap1.y = stage.canvas.height/3-tamimg.height/2;
    bitmap1.cursor="pointer";
    bitmap1.addEventListener("click", error);
    stage.addChild(bitmap1);
    stage.update();
  }
  
  imagen2 = new Image();
  imagen2.src = "Imagenes/Juego/Pool.jpg";
  
  imagen2.onload = function()
  {
    bitmap2 = new createjs.Bitmap(imagen2);
    tamimg = bitmap2.getBounds();
    bitmap2.x = stage.canvas.width/1.3-tamimg.width/2;
    bitmap2.y = stage.canvas.height/3-tamimg.height/2;
    bitmap2.cursor="pointer";
    bitmap2.addEventListener("click", error);
    stage.addChild(bitmap2);
    stage.update();
  }
  
  imagen3 = new Image();
  imagen3.src = "Imagenes/Juego/MujeresSinEstado.jpg";
  
  imagen3.onload = function()
  {
    bitmap3 = new createjs.Bitmap(imagen3);
    tamimg = bitmap3.getBounds();
    bitmap3.x = stage.canvas.width/4-tamimg.width/2;
    bitmap3.y = stage.canvas.height/1.3-tamimg.height/2;
    bitmap3.cursor="pointer";
    bitmap3.addEventListener("click", secondQuestion);
    stage.addChild(bitmap3);
    stage.update();
  }
  imagen4 = new Image();
  imagen4.src = "Imagenes/Juego/UnderwaterGrace.jpg";
  
  imagen4.onload = function()
  {
    bitmap4 = new createjs.Bitmap(imagen4);
    tamimg = bitmap4.getBounds();
    bitmap4.x = stage.canvas.width/1.3-tamimg.width/2;
    bitmap4.y = stage.canvas.height/1.3-tamimg.height/2;
    bitmap4.cursor="pointer";
    bitmap4.addEventListener("click", error);
    stage.addChild(bitmap4);
    stage.update();
  }
  
  stage.addChild(texto1);
  grupo.addChild(imagen1, imagen2, imagen3, imagen4); 
  stage.addChild(grupo);
  stage.addChildAt(texto1, 0);
  stage.addChildAt(grupo, 1);
  stage.update();
}

function pregunta2(event){
  stage = new createjs.Stage("escenario");
  grupo = new createjs.Container();
  
  grupo.name = 'fotos';
  texto1 = new createjs.Text("2. ¿Cuál de estas fotografías pertenece al estilo fotográfico de paisaje?", "14px Century", "black");
  tamanio = texto1.getBounds();
  texto1.x = stage.canvas.width/2 - tamanio.width/2;
  texto1.y = stage.canvas.height/10 - tamanio.height/2;
  
  imagen1 = new Image();
  imagen1.src = "Imagenes/Juego/Kryptoni.jpg";
  
  imagen1.onload = function()
  {
    bitmap1 = new createjs.Bitmap(imagen1);
    tamimg = bitmap1.getBounds();
    bitmap1.x = stage.canvas.width/4-tamimg.width/2;
    bitmap1.y = stage.canvas.height/3-tamimg.height/2;
    bitmap1.cursor="pointer";
    bitmap1.addEventListener("click", thirdQuestion);
    stage.addChild(bitmap1);
    stage.update();
  }
  
  imagen2 = new Image();
  imagen2.src = "Imagenes/Juego/Pool.jpg";
  
  imagen2.onload = function()
  {
    bitmap2 = new createjs.Bitmap(imagen2);
    tamimg = bitmap2.getBounds();
    bitmap2.x = stage.canvas.width/1.3-tamimg.width/2;
    bitmap2.y = stage.canvas.height/3-tamimg.height/2;
    bitmap2.cursor="pointer";
    bitmap2.addEventListener("click", error);
    stage.addChild(bitmap2);
    stage.update();
  }
  
  imagen3 = new Image();
  imagen3.src = "Imagenes/Juego/MujeresSinEstado.jpg";
  
  imagen3.onload = function()
  {
    bitmap3 = new createjs.Bitmap(imagen3);
    tamimg = bitmap3.getBounds();
    bitmap3.x = stage.canvas.width/4-tamimg.width/2;
    bitmap3.y = stage.canvas.height/1.3-tamimg.height/2;
    bitmap3.cursor="pointer";
    bitmap3.addEventListener("click", error);
    stage.addChild(bitmap3);
    stage.update();
  }
  imagen4 = new Image();
  imagen4.src = "Imagenes/Juego/UnderwaterGrace.jpg";
  
  imagen4.onload = function()
  {
    bitmap4 = new createjs.Bitmap(imagen4);
    tamimg = bitmap4.getBounds();
    bitmap4.x = stage.canvas.width/1.3-tamimg.width/2;
    bitmap4.y = stage.canvas.height/1.3-tamimg.height/2;
    bitmap4.cursor="pointer";
    bitmap4.addEventListener("click", error);
    stage.addChild(bitmap4);
    stage.update();
  }
  
  stage.addChild(texto1);
  grupo.addChild(imagen1, imagen2, imagen3, imagen4); 
  stage.addChild(grupo);
  stage.addChildAt(texto1, 0);
  stage.addChildAt(grupo, 1);
  stage.update();
}


function pregunta3(event){
  stage = new createjs.Stage("escenario");
  grupo = new createjs.Container();
  
  grupo.name = 'fotos';
  texto1 = new createjs.Text("3. ¿Cuál de estas fotografías pertenece al estilo fotográfico de reportaje?", "14px Century", "black");
  tamanio = texto1.getBounds();
  texto1.x = stage.canvas.width/2 - tamanio.width/2;
  texto1.y = stage.canvas.height/10 - tamanio.height/2;
  
  imagen1 = new Image();
  imagen1.src = "Imagenes/Juego/Kryptoni.jpg";
  
  imagen1.onload = function()
  {
    bitmap1 = new createjs.Bitmap(imagen1);
    tamimg = bitmap1.getBounds();
    bitmap1.x = stage.canvas.width/4-tamimg.width/2;
    bitmap1.y = stage.canvas.height/3-tamimg.height/2;
    bitmap1.cursor="pointer";
    bitmap1.addEventListener("click", error);
    stage.addChild(bitmap1);
    stage.update();
  }
  
  imagen2 = new Image();
  imagen2.src = "Imagenes/Juego/Pool.jpg";
  
  imagen2.onload = function()
  {
    bitmap2 = new createjs.Bitmap(imagen2);
    tamimg = bitmap2.getBounds();
    bitmap2.x = stage.canvas.width/1.3-tamimg.width/2;
    bitmap2.y = stage.canvas.height/3-tamimg.height/2;
    bitmap2.cursor="pointer";
    bitmap2.addEventListener("click", error);
    stage.addChild(bitmap2);
    stage.update();
  }
  
  imagen3 = new Image();
  imagen3.src = "Imagenes/Juego/MujeresSinEstado.jpg";
  
  imagen3.onload = function()
  {
    bitmap3 = new createjs.Bitmap(imagen3);
    tamimg = bitmap3.getBounds();
    bitmap3.x = stage.canvas.width/4-tamimg.width/2;
    bitmap3.y = stage.canvas.height/1.3-tamimg.height/2;
    bitmap3.cursor="pointer";
    bitmap3.addEventListener("click", error);
    stage.addChild(bitmap3);
    stage.update();
  }
  imagen4 = new Image();
  imagen4.src = "Imagenes/Juego/UnderwaterGrace.jpg";
  
  imagen4.onload = function()
  {
    bitmap4 = new createjs.Bitmap(imagen4);
    tamimg = bitmap4.getBounds();
    bitmap4.x = stage.canvas.width/1.3-tamimg.width/2;
    bitmap4.y = stage.canvas.height/1.3-tamimg.height/2;
    bitmap4.cursor="pointer";
    bitmap4.addEventListener("click", fourthQuestion);
    stage.addChild(bitmap4);
    stage.update();
  }
  
  stage.addChild(texto1);
  grupo.addChild(imagen1, imagen2, imagen3, imagen4); 
  stage.addChild(grupo);
  stage.addChildAt(texto1, 0);
  stage.addChildAt(grupo, 1);
  stage.update();
}


function pregunta4(event){
  stage = new createjs.Stage("escenario");
  grupo = new createjs.Container();
  
  grupo.name = 'fotos';
  texto1 = new createjs.Text("4. ¿Cuál de estas fotografías pertenece al estilo fotográfico de arquitectura?", "14px Century", "black");
  tamanio = texto1.getBounds();
  texto1.x = stage.canvas.width/2 - tamanio.width/2;
  texto1.y = stage.canvas.height/10 - tamanio.height/2;
  
  imagen1 = new Image();
  imagen1.src = "Imagenes/Juego/Kryptoni.jpg";
  
  imagen1.onload = function()
  {
    bitmap1 = new createjs.Bitmap(imagen1);
    tamimg = bitmap1.getBounds();
    bitmap1.x = stage.canvas.width/4-tamimg.width/2;
    bitmap1.y = stage.canvas.height/3-tamimg.height/2;
    bitmap1.cursor="pointer";
    bitmap1.addEventListener("click", error);
    stage.addChild(bitmap1);
    stage.update();
  }
  
  imagen2 = new Image();
  imagen2.src = "Imagenes/Juego/Pool.jpg";
  
  imagen2.onload = function()
  {
    bitmap2 = new createjs.Bitmap(imagen2);
    tamimg = bitmap2.getBounds();
    bitmap2.x = stage.canvas.width/1.3-tamimg.width/2;
    bitmap2.y = stage.canvas.height/3-tamimg.height/2;
    bitmap2.cursor="pointer";
    bitmap2.addEventListener("click", fifthQuestion);
    stage.addChild(bitmap2);
    stage.update();
  }
  
  imagen3 = new Image();
  imagen3.src = "Imagenes/Juego/MujeresSinEstado.jpg";
  
  imagen3.onload = function()
  {
    bitmap3 = new createjs.Bitmap(imagen3);
    tamimg = bitmap3.getBounds();
    bitmap3.x = stage.canvas.width/4-tamimg.width/2;
    bitmap3.y = stage.canvas.height/1.3-tamimg.height/2;
    bitmap3.cursor="pointer";
    bitmap3.addEventListener("click", error);
    stage.addChild(bitmap3);
    stage.update();
  }
  imagen4 = new Image();
  imagen4.src = "Imagenes/Juego/UnderwaterGrace.jpg";
  
  imagen4.onload = function()
  {
    bitmap4 = new createjs.Bitmap(imagen4);
    tamimg = bitmap4.getBounds();
    bitmap4.x = stage.canvas.width/1.3-tamimg.width/2;
    bitmap4.y = stage.canvas.height/1.3-tamimg.height/2;
    bitmap4.cursor="pointer";
    bitmap4.addEventListener("click", error);
    stage.addChild(bitmap4);
    stage.update();
  }
  
  stage.addChild(texto1);
  grupo.addChild(imagen1, imagen2, imagen3, imagen4); 
  stage.addChild(grupo);
  stage.addChildAt(texto1, 0);
  stage.addChildAt(grupo, 1);
  stage.update();
}

function fin(){
  stage = new createjs.Stage("escenario");
  texto = new createjs.Text("¡Enhorabuena!", "50px Century", "black");
  tamanio = texto.getBounds();
  texto.x = stage.canvas.width/2 - tamanio.width/2;
  texto.y = stage.canvas.height/3 - tamanio.height/2;
  texto2 = new createjs.Text("¡Refresque la página si desea volverlo a realizar!", "28px Century", "black");
  tamanio = texto2.getBounds();
  texto2.x = stage.canvas.width/2 - tamanio.width/2;
  texto2.y = stage.canvas.height/1.5 - tamanio.height/2;
  stage.addChild(texto, texto2);
  stage.update();
}

function error(event){
  alert("¡Te has equivocado! Vuelve a intentarlo");
  console.log('Aviso consola: Has pulsado');
}