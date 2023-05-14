//Santiago Melía 
//Comisión 1
//tp1

PImage imagen1, imagen2, imagen3;
PFont miletra;
int imgX,imgY,img3;
float posX, posY, ancho, alto;


boolean reanudar;
int segundos;




void setup () {
  size (640, 480);
  textAlign (CENTER, CENTER);
  miletra= loadFont ("miletra.vlw");
  textFont(miletra, 30);
  imagen1 = loadImage ("imagen1.jpg");
  imagen2 = loadImage ("imagen2.jpg");
  imagen3 = loadImage ("imagen3.jpg");

  posX= 450;
  posY=380;
  ancho=170;
  alto=60;
  img3=1;
  imgX=0;
imgY=-10;
  reanudar= false;
  

}



void draw () {

  background (0);
    fill(0, 230, 0);
  text("tocar la pantalla para empezar", width/2, height/2);
  if (reanudar==true) {
    if (frameCount % 60==0) {
      segundos++;
    }
  }


  if (segundos >0) {
    fill (0);
    image (imagen1, 0, 0, width, height);
    textSize (img3);
    text ("Roma, capital de Italia", width/2, height/2);
    if (img3<30) {
      img3++;
    }
  }
    
  if (segundos >5) {
    fill (0);
    textSize(32);
    image (imagen2, 0, 0, width, height);
    text ("El municipio más poblado de Italia", imgX, height/4);
    if (imgX<width/2) {
      imgX++;
    }
  }
  


  if (segundos >= 10) {

    
    image(imagen3, 0, 0, width, height);
    textSize(25);

    fill (255, 0);
    fill (0);
   text("veni a visitar la ciudad del amor", width/2, imgY);
  if(Y<height/2) {
    imgY++;
    }
  
    rect (posX, posY, ancho, alto);
    fill(159);
    textSize(15);
    text("reiniciar", posX, posY, ancho, alto);
  }
  }


void mousePressed () {
  reanudar=true;
  if (mouseX >posX && mouseX <posX+ancho && mouseY>posY && mouseY <posY+alto) {
    segundos=1;
       img3=1;
      imgX= 0;
imgY=-10;
 reanudar=true;
  }
  }
