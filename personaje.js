class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = 1;
    this.miImagen = loadImage('data/cohete.png');
    this.balas = [];
  }

  mostrar() {
    noFill();
    noStroke();
    rect(this.posX, this.posY, 50, 50);
    image(this.miImagen, this.posX - 44, this.posY - 50, this.miImagen.width / 2 - 170, this.miImagen.height / 2 - 380);

    for (let i = this.balas.length - 1; i >= 0; i--) {
      this.balas[i].mostrar();
      this.balas[i].mover();


      if (this.balas[i].posY < 0) {
        this.balas.splice(i, 1);
      }
    }
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === 32) {
      this.dispararBala();
    }
  }

  moverDerecha() {
    this.posX = constrain(this.posX + 25, 0, width - 50);
  }

  moverIzquierda() {
    this.posX = constrain(this.posX - 25, 0, width - 50);
  }

  dispararBala() {
    let nuevaBala = new Bala(this.posX + 20, this.posY);
    nuevaBala.disparar();
    this.balas.push(nuevaBala);
  }

  haDisparadoBala() {
    return this.balas.length > 0 && this.balas.some(bala => bala.disparada);
  }
}
