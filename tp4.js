//Santiago Melia
//Comision 1
//tp4
//https://youtu.be/uTl82AndJnw

let tiempo;
let fuente;
let velocidad = 8;
let estado = 0 ;

//enemigo
let y1;
let x1;
let enemigo =0;
let aniMacionE= 3;

//jugador
let x2;
let y2;
let vel;
let piso;
let jugador =0;
let aniMacionJ = 3;


function setup() {

  createCanvas(800, 400);
  tiempo = 0;
  piso = 300;
  x1 = 800;
  y1 = 275;
  x2 = width*0.10;
  y2 = 200;
  velE = 0;
  fuente = loadFont('data/BebasNeue-Regular.ttf');
  textFont(fuente);
  imagenPersonaje0 = loadImage('data/personaje0.png');
  imagenPersonaje1 = loadImage('data/personaje1.png');
  imagenFuego0 = loadImage('data/fuego.png');
  imagenFuego1 = loadImage('data/fuego0.png');
  imagenFuego2 = loadImage('data/fuego1.png');
}

function draw() {
  background(219, 13, 74);

  if ( estado == 0 ) {
    textSize(30);
    tiempo = 0;
    y2 = piso-20;
    x1 = 800;
    y1 = 275;
    velocidad = 8;
    fill(255);
    textSize(30);
    text( "Toca el fuego para comenzar", 250, 350 );
    text( "Usar SPACE en el teclado para saltar", 210, 390 );
    text( "Un aventurero debera saltar las llamas para poder sobrevivir!!!", 80, 80);

    fill (170);
    ellipse(700, 300, 70);
    fill(0);
    textSize(20);
    text("CREDITOS", 672, 308);

    boton();
  } else if ( estado == 1 ) {
    background(255);
    fill(0);
    textSize(20);
    text( "Saltá", 100, 100 );

    //contador
    textSize (20);
    text(tiempo, width - 100, 90);

    if (frameCount%10 == 0) {
      tiempo++;
    }
    //piso
    strokeWeight(2);
    line(0, piso, width, piso);
    fill(255);
    dibujarEnemigo();
    dibujarJugador();
  }
  // colision
  if ( estado == 1 && dist(x1, y1, x2, y2) < 50 ) {
    estado = 2;
  }

  if ( tiempo >= 110 ) {
    estado = 3;
  }

  if ( estado == 2 ) {
    push();
    textSize(30);
    textAlign(CENTER, CENTER);
    background(219, 13, 74);
    text( "Oh noo..el aventurero salio herido", width/2, 200 );

    fill(255);
    ellipse(300, 300, 100);
    fill(0);
    text("RESET", 300, 300);

    fill (170);
    ellipse(500, 300, 100);
    fill(0);
    text("CREDITOS", 500, 300);

    pop();
  }


  if ( estado == 3 ) {
    push();
    textSize(30);
    background(219, 13, 74);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Ganaste!", width/2, height/3 );

    fill(255);
    ellipse(400, 300, 100);
    fill(0);
    text("RESET", 400, 300);


    pop();
  }

  if ( estado == 4 ) {
    background(219, 13, 74);
    textSize(30);
    fill(255);
    text("TP4 - Melia Santiago", 300, 100);
    text("Produccion: Melia Santiago ", 50, 200);
    text("Programador: Melia Santiago ", 450, 200);
    text("Toca para reiniciar", 300, 300);
    ellipse(width/2, 350, 50);
    fill(0);
  }
}

function mousePressed() {

  if ( dist(width/2, height/2, mouseX, mouseY) < 100 ) {
    estado =1;
  }

  if ( estado == 0 && dist(700, 300, mouseX, mouseY) < 100 ) {
    estado =4;
  }


  if ( estado == 3 && dist(400, 300, mouseX, mouseY) < 100/2) {
    estado = 0;
  }

  if ( estado == 2 && dist(300, 330, mouseX, mouseY) < 100/2) {
    estado = 0;
  }

  if ( estado == 2 && dist(500, 300, mouseX, mouseY) < 100/2) {
    estado = 4;
  }

  if ( estado == 4 && dist( width/2, 350, mouseX, mouseY) < 50/2) {
    estado = 0;
  }
}


function boton() {
  image(imagenFuego0, 300, 100);
  imagenFuego0.resize(200, 200);
}



function dibujarEnemigo() {

  if (x1 < -10) {
    x1 = 820
      velocidad += 0.5;
  } else {
    x1 = x1 - velocidad;
  }

  push();


  if (enemigo < aniMacionE) {
    image(imagenFuego0, x1 - 20, y1 - 20, 20*4, 20*4);
  } else if (enemigo >= aniMacionE && enemigo < aniMacionE*2) {
    image(imagenFuego1, x1 - 20, y1 - 20, 20*4, 20*4);
  } else {
    image(imagenFuego2, x1 - 20, y1 - 20, 20*4, 20*4);
  }

  if (enemigo>aniMacionE*3) {
    enemigo =0;
    image(imagenFuego0, x1 - 20, y1 - 20, 20*4, 20*4);
  }

  enemigo++;


  pop();
}
function dibujarJugador() {


  if (jugador < aniMacionJ) {
    image(imagenPersonaje0, x2 - 20, y2 - 20, 20*8, 20*8);
  } else if (jugador >= aniMacionJ) {
    image(imagenPersonaje1, x2 - 20, y2 - 20, 20*8, 20*8);
  }

  if (jugador>=aniMacionJ*3) {
    jugador =0;
    image(imagenPersonaje0, x2 - 20, y2 - 20, 20*8, 20*8);
  }

  jugador++;

  y2+=vel;

  if (y2+20<piso) {

    vel+=0.27;
  } else {
    vel=+(vel*0.35);
    y2=piso-20;
  }
}


function keyPressed() {
  saltar();
}


function  saltar() {


  if ( y2>piso-20-5) {
    vel = -8;
  }
}
