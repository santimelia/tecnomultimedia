//Melia Santiago
//tp0 comision 1

PImage paisaje;
size(800,400);
background (80,110,150);
paisaje = loadImage("luna3.jpg");
paisaje.resize (400,400);
image (paisaje,0,0,400,400);
fill(239,240,223);
noStroke();
ellipse(560,150,35,60);
stroke (20);
fill(50,75,110);
noStroke();
rect(650,200,200,200);
fill(10,30,50);
triangle(650,200,660,600,450,400);
fill(15,60,100);
ellipse(750,125,320,115);
ellipse(750,45,200,100);
