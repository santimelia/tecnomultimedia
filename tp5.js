//Santiago Melía
//Comisión 1
//https://youtu.be/JRC4QSE06l8

let objJuego;
let estadoJuego = "pantallaInicio";

function setup() {
  createCanvas(400, 400);
  objJuego = new Juego(10);
 }

function draw() {
  background(63,106,1);

  if (estadoJuego === "pantallaInicio") {
   
    mostrarPantallaInicio();
  } else if (estadoJuego === "juegoEnProgreso") {
   
    objJuego.dibujar();

    if (objJuego.todosEnemigosEliminados) {
      mostrarMensajeGanaste();
    }
  }
}

function keyPressed() {
  if (estadoJuego === "pantallaInicio" && key === " ") {
    
    estadoJuego = "juegoEnProgreso";
  } else if (estadoJuego === "juegoEnProgreso") {
    objJuego.teclaPresionada(keyCode);
  }
}

function mostrarPantallaInicio() {
  background(0); 
  fill(255); 
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Presiona 'space' para comenzar", width / 2, height / 2); 
  textSize(16);
  text("elimina a todos los planetas con enter",width/2 , height /2 +50);
}

function mostrarMensajeGanaste() {
  background(0,255,0); 
  fill(0); 
  textSize(24);
  textAlign(CENTER, CENTER);
  text("¡Ganaste!", width / 2, height / 2);
}
