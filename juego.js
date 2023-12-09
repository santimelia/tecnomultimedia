class Juego {
  constructor(cantidadEnemigos, p) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearEnemigos();
    this.todosEnemigosEliminados = false;
    this.personaje = new Personaje(width / 2, 300);
    this.startTime = 0;
    this.gameDuration = 15;
    this.p = p;
  }

  mostrar(aventura) {
    if (this.p && Array.isArray(this.p) && this.p.length > 12) {
      image(this.p[13], 0, 0, width, height);
    }

    let currentTime = (millis() - this.startTime) / 1000;
    let timeLeft = this.gameDuration - currentTime;
    this.personaje.mostrar();


    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (this.enemigos[i].vida) {
        this.enemigos[i].mostrar();
      }
    }

    this.mostrarBalas();
    this.personaje.haDisparadoBala();
    this.controlarColisiones();


    fill(255);
    textSize(16);
    textAlign(RIGHT, TOP);
    text("Time: " + int(timeLeft), width - 10, 10);
    this.personaje.mostrar();

    if (timeLeft <= 0) {
      aventura.estado = 14;
    }


    this.todosEnemigosEliminados = this.enemigos.every((enemigo) => !enemigo.vida);
    if (this.todosEnemigosEliminados) {
      aventura.estado = 15;
    }
  }




  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo(i * 40 + 20, 100);
    }
  }



  teclaPresionada() {
    if (keyCode === 32) {
      this.personaje.dispararBala();
    } else if (keyCode === LEFT_ARROW) {
      this.personaje.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.personaje.moverDerecha();
    }
  }



  mostrarBalas() {
    for (let i = this.personaje.balas.length - 1; i >= 0; i--) {
      this.personaje.balas[i].mostrar();
      this.personaje.balas[i].mover();

      if (this.personaje.balas[i].posY < 0) {
        this.personaje.balas.splice(i, 1);
      }
    }
  }

  controlarColisiones() {
    for (let i = this.personaje.balas.length - 1; i >= 0; i--) {
      for (let j = 0; j < this.cantidadEnemigos; j++) {
        if (this.enemigos[j].vida && this.enemigos[j].haTocadoLaBala(this.personaje.balas[i])) {
          this.enemigos[j].matar();
          this.personaje.balas.splice(i, 1);
          break;
        }
      }
    }
  }

  reiniciar() {
    this.crearEnemigos();
    this.todosEnemigosEliminados = false;
    this.tiempoRestante = 15;
    this.startTime = millis();
  }
}
