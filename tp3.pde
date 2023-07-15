//Santiago Melía
//tp3
//https://www.youtube.com/watch?v=byZ2FT9CZdk (el video arranca en el segundo 6).

int estado = 0;
int c = 15;
PImage [] imagen = new PImage [c];
boolean botonPj (int x, int y, int r) {
  return dist (mouseX, mouseY, x, y) <= r ;
}
PFont tipografia;

void setup (){
  size (600, 600);
  for (int i = 0; i < c; i++){ 
    imagen[i] = loadImage ("imagen" + i + ".png");
  }
  tipografia = loadFont("SitkaBanner-BoldItalic-20.vlw");
} 
void draw (){ 
  textFont(tipografia);
    fill(255);
  switch (estado){
  
    case 0: 
    image(imagen[0], 0, 0, 600, 600);
    botonP(530, 530, 60);
    break;
    
    case 1: 
    image(imagen[1], 0, 0, 600, 600);
    text("Leonora y Janice fueron a un bar", 150, 75);
    botonP(530, 530, 60);
    break;
    
    case 2:
    image(imagen[2], 0, 0, 600, 600);
    text("Leonora tiene una carta en su cartera,\n y tiene que decidir si se la muestra o no", 60, 45);
    botonP(530, 530, 60);
    botonP(70, 530, 60);
    break;
    
    case 3: 
    image(imagen[3], 0, 0, 600, 600);
    text("Querida Janice. Esta es nuestra casa \n si decides venir a Marte. Will.", 150, 75);
    botonP(530, 530, 60);
    break;
    
    case 4: 
    image(imagen[4], 0, 0, 600, 600);
    text("Janice decide no ir a Marte", 350, 70);
    botonP(530, 530, 60);
    break;
    
    case 5: 
    image(imagen[5], 0, 0, 600, 600);
    text("Janice se entera que tiene un minuto \n para comunicarse con Will", 60, 45);
    botonP(530, 530, 60);
    break;
    
    case 6: 
    image(imagen[6], 0, 0, 600, 600);
    text("Janice tiene que decidir \n si le manda el mensaje de voz o no", 280, 70);
    botonP(530, 530, 60);
    botonP(70, 530, 60);
    break;
    
    case 7: 
    image(imagen[7], 0, 0, 600, 600);
    text("Lo he decidido, iré allá arriba. \n Saldré en el cohete de mañana", 170, 50);
    botonP(530, 530, 60);
    break;
    
    case 8: 
    image(imagen[8], 0, 0, 600, 600);
    text("Janice no le manda el mensaje a Will, \n y el esperaria, pero ella no va a llegar", 150, 60);
    botonP(530, 530, 60);
    break;
    
    case 9: 
    image(imagen[9], 0, 0, 600, 600);
    fill(0);
    text("ahora le toca a Will mandarle el mensaje de voz", 50, 45);
    botonP(530, 530, 60);
    break;
    
    case 10: 
    image(imagen[10], 0, 0, 600, 600);
    fill(0);
    text("¿el mensaje llega correctamente o se interrumpe?", 100, 50);
    botonP(530, 530, 60);
    botonP(70, 530, 60);
    break;
    
    case 11: 
    image(imagen[11], 0, 0, 600, 600);
    fill(0);
    textSize(65);
    text("amor...", 350, 360);
    botonP(530, 530, 60);
    break;
    
    case 12: 
    image(imagen[12], 0, 0, 600, 600);
    text("lo siento Janice, tengo otra persona \n a la cual llamo amor...", 150, 45);
    botonP(530, 530, 60);
    break;
    
    case 13: 
    image(imagen[13], 0, 0, 600, 600);
    fill(0);
    text("Janice no va a Marte y se suicida en la Tierra", 150, 40);
    botonP(530, 530, 60);
    break;
   
    case 14:
    image(imagen[0], 0, 0, 600, 600);
    fill (0);
    textSize(40);
    text("tp3- Santiago Melía \n comisión 1", 150, 250);
    botonCuadrado();
    break;
  } 
}
 
   
void mousePressed() {
  if (estado == 0 && botonPj(530, 530, 100)) {
    estado = 1;
  } else if (estado == 1 && botonPj(530, 530, 100)) {
    estado= 2;
  } else if (estado == 2 && botonPj(530, 530, 100)) {
    estado= 3;
  } else if (estado == 3 && botonPj(530, 530, 100)) {
    estado= 5;
  } else if (estado == 5 && botonPj(530, 530, 100)) {
    estado= 6;
  } else if (estado == 6 && botonPj(530, 530, 100)) {
    estado= 7;
  } else if (estado == 7 && botonPj(530, 530, 100)) {
    estado= 9;
  } else if (estado == 9 && botonPj(530, 530, 100)) {
    estado= 10;
  } else if (estado == 10 && botonPj(530, 530, 100)) {
    estado= 11;
  } else if (estado == 11 && botonPj(530, 530, 100)) {
    estado= 14;
  } else if (estado == 14 && botonPj(210, 530,100)) {
    estado= 0;
  }
  
 if (estado == 2 && botonPj(70, 530, 100)) {
    estado = 4;
 } else if (estado == 4 && botonPj(530, 530, 100)){
   estado= 14;
 }
 if (estado == 6 && botonPj(70, 530, 100)){
   estado= 8;
 } else if (estado == 8 && botonPj(530, 530, 100)){
   estado= 14;
 }
 if (estado == 10 && botonPj(70, 530, 100)){
 estado= 12;
 } else if (estado == 12 && botonPj(530, 530, 100)){
   estado= 13;
 } else if (estado == 13 && botonPj(530, 530, 100)) {
    estado= 14;
 }
} 

 void botonP (int x, int y, int d){
  if (dist(mouseX, mouseY, x, y) <= d){
    fill (0);

  }else{
    fill(100, 255, 100);

  }
  circle (x,y,d);
}

void botonCuadrado() {

  rect(210, 530, 180, 50);
    fill(200);
  textSize(30);
  text("REINICIAR", 232, 560);
}
