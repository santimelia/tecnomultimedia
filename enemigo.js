class Enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0, 255, 0);
    this.vida = true;
    this.bala = new Bala();
    this.miImagen = loadImage ('data/planeta.jpg');
  }

  dibujar() {
    if (this.vida) {
      fill(this.miColor);
      ellipse(this.posX, this.posY, 30, 30);
      image(this.miImagen, this.posX-69, this.posY-30, this.miImagen.width / 2-40, this.miImagen.height / 2-100);
    }
  }

  matar() {
    this.vida = false;
  }

  haTocadoLaBala(bala) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY) < 15) { 
      this.matar(); 
    }
  }
}
