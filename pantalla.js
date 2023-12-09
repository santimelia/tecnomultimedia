class Pantalla {
  constructor(p) {
    this.p = p;
    this.c = 20;
    this.indexP = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.ancho1 =0;
    this.alto1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.ancho2 = 0;
    this.alto2 = 0;
    this.width = width;
    this.height = height;
    this.textos = new Array(2);
    this.textos[0] = new Array(this.c);
    this.textos[1] = new Array(this.c);
    for (let i = 0; i < 18; i++) {
      this.p[i] = loadImage( "data/pantalla" + i + ".jpg");
      this.textos[0][i] = "";
      this.textos[1][i] = "";
    }

    this.textos[0][0] = "El cohete- Ray Bradbury";
    this.textos[0][1] = "Bodoni era un niño como todos, pero tenía un sueño…";
    this.textos[1][1] = "conocer el espacio.";
    this.textos[0][2] = "De adulto se convirtió en un hombre apasionado y trabajador.";
    this.textos[1][2] = "Pero sus sueños seguían siendo los del pequeño Bodoni.";
    this.textos[0][3] = "Aunque sus días eran iguales y aburridos. Esa noche debia elegir un camino.";
    this.textos[0][4] = "Bodoni continuo con su vida pero sin cumplir sus sueños.";
    this.textos[1][4] = "FIN";
    this.textos[0][5] = "Alejo Soiza y Santiago Melia";
    this.textos[1][5] = "Comision 1, Jose Bugiolachi";
    this.textos[0][6] = "Una noche particularmente estrellada,";
    this.textos[1][6] = "Bodoni tomó una decisión que cambiaría su vida.";
    this.textos[0][7] = "La mañana siguiente, Bodoni, con las cosas que tenía a su alrededor,";
    this.textos[1][7] = "comenzó a construir su propio cohete.";
    this.textos[0][8] = "La noticia llegó a oídos de los vecinos";
    this.textos[1][8] = "y rápidamente los niños de la zona ayudaron a Bodoni en su proyecto.";
    this.textos[0][9] = "Gracias a la ayuda y dedicacion";
    this.textos[1][9] = "pudieron terminar el cohete.";
    this.textos[0][10] = "3, 2, 1, DESPEGUE...";
    this.textos[0][11] = "Bodoni estaba cumpliendo su sueño...";
    this.textos[1][11] = "pero iba a tener que cuidarse en el espacio.";
    this.textos[0][12] = "Instrucciones";
    this.textos[1][12] = "Muevete con las flechas y aprieta ESPACIO para disparar.";
    this.textos[0][13] = "";
    this.textos[1][13] = "";
    this.textos[0][14] = "LAMENTABLEMENTE BODONI HA MUERTO.";
    this.textos[0][15] = "Bodoni debia elegir un camino.";
    this.textos[0][16] = "Bodoni enfrenta momentos de soledad y reflexión.";
    this.textos[1][16] = "Se cuestiona sobre el significado de su viaje y decide volver.";
    this.textos[0][17] = "Bodoni vuelve a la Tierra con su sueño cumplido";
    this.textos[1][17] = "FIN.";
  }

             //---MODIFICAR UBICACION DE LOS BOTONES---//
  mostrar(indexP, x1, y1, ancho1, alto1, x2, y2, ancho2, alto2) {

    this.indexP = indexP;
    this.x1 = x1;           //CREAR BOTON 1//
    this.y1 = y1;
    this.ancho1 = ancho1;
    this.alto1 = alto1;
    this.x2 = x2;          //CREAR BOTON 2//
    this.y2 = y2;
    this.ancho2 = ancho2;
    this.alto2 = alto2;
    noStroke();
    image (this.p[indexP], 0, 0, this.width, this.height);
    fill(255, 30);                                           //TRANSPARENCIA DE LOS BOTONES//
    rect(this.x1, this.y1 - 5, this.ancho1, this.alto1);
    rect(this.x2, this.y2 - 5, this.ancho2, this.alto2);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(20);
    text(this.textos[0][this.indexP], this.x1, this.y1 - 5, this.ancho1, this.alto1);
    text(this.textos[1][this.indexP], this.x2, this.y2 - 5, this.ancho2, this.alto2);
  }
}
