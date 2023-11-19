//Santiago Melía
//Comisión 1
//https://youtu.be/kBgGPs0rxQk

let objJuego;

function setup() {
  createCanvas(400, 400);
  objJuego = new Juego(10);
}

function draw() {
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.press(keyCode);
}
