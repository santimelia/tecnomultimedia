class Bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false; 
    this.miImagen = loadImage ('data/bala.jpg');
  }

  dibujar() {
    if (this.disparada) {
      fill(0);
      ellipse(this.posX, this.posY, 5, 5);
      this.mover();
       image(this.miImagen, this.posX-50, this.posY, this.miImagen.width / 2, this.miImagen.height / 2);
      
    }
  }

  mover() {
    this.posY -= 7;
  }

  disparar() {
    this.disparada = true;
  }
}
