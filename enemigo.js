class Enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.velocidadX = 2;
    this.miColor = color(0, 255, 0);
    this.vida = true;
    this.bala = new Bala();
    this.miImagen = loadImage('data/planeta.png');
  }

  mostrar() {
    if (this.vida) {
      fill(this.miColor);
      ellipse(this.posX, this.posY, 30, 30);
      image(this.miImagen, this.posX - 20, this.posY - 20, this.miImagen.width / 2 - 40, this.miImagen.height / 2 - 100);
    }
  }

  mover() {
    this.posX = constrain(this.posX + this.velocidadX, 0, width - 20);
  }

  matar() {
    this.vida = false;
  }

  haTocadoLaBala(bala) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY) < 15) {
      this.matar();
      return true;
    }
    return false;
  }
}
