class Bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
    this.velocidadY = 2;
    this.miImagen = loadImage('data/bala.png');
  }

  mostrar() {
    if (this.disparada) {
      fill(0);
      ellipse(this.posX, this.posY, 5, 5);
      this.mover();
      image(this.miImagen, this.posX - 10, this.posY, this.miImagen.width / 2, this.miImagen.height / 2);
    }
  }

  mover() {
    this.posY -= this.velocidadY;
  }

  disparar() {
    this.disparada = true;
  }
}
