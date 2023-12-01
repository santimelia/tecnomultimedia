let aventura;
let pantallas= [];



function setup() {
  createCanvas(600, 600);
  aventura = new Aventura();
  
  for ( let i = 0; i < 18; i++ ) {
    pantallas[i] = loadImage("data/pantalla"+ i +".jpg");
  }
}

  function draw() {
    aventura.mostrar();
  }

  function mousePressed() {
    aventura.interactuar();
  }

  function keyPressed() {
    objJuego.press(keyCode);
  }
