class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = 1;
    this.bala = new Bala();
    this.miImagen = loadImage ('data/cohete.png');
  }

  dibujar() {
    this.bala.dibujar();

   
     noFill(); 
  noStroke(); 
    rect(this.posX, this.posY, 50, 50);
    image(this.miImagen, this.posX-44, this.posY-50, this.miImagen.width / 2-170, this.miImagen.height / 2-380);
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === ENTER) {
      this.dispararBala();
    }
  }

  moverDerecha() {
    this.posX += 25;
  }

  moverIzquierda() {
    this.posX -= 25;
  }

  dispararBala() {
    this.bala = new Bala(this.posX + 20, this.posY);
    this.bala.disparar();
  }

  haDisparadoBala() {
    return this.bala.disparada;
  }
}
