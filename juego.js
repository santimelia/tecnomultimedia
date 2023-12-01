class Juego {
  constructor(cantidadEnemigos, p) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearEnemigos();
    this.todosEnemigosEliminados = false;
   // this.estadoJuego = "pantallaInicio";
    this.personaje = new Personaje(width / 2, 300);
    //this.miImagen = loadImage('data/espacio.jpg');
    this.tiempoRestante = 15;
    this.p = p;
   
  }

  dibujar(estado) {
  if (this.p && Array.isArray(this.p) && this.p.length > 12) {
  image(this.p[13], 0, 0, width, height);
}

    //if (this.estadoJuego === "pantallaInicio") {
    //image(this.miImagen, 0, 0, 400, 400);
    //fill(255);
    //textSize(24);
    //textAlign(CENTER, CENTER);
    //text("Presiona 'space' para comenzar", width / 2, height / 2);
    //textSize(16);
    //text("Elimina a todos los planetas con enter,", width / 2, height / 2 + 50);
    //text("deberás mover la nave con las flechas", width / 2, height / 2 + 65);
    //text("CUIDADO! que no se acabe el tiempo", width / 2, height / 2 + 90);
    //} else if (this.estadoJuego === "JuegoEnProgreso") {
    //  image(this.miImagen, 0, 0, 400, 400);
    this.personaje.dibujar();
    this.enemigo.dibujar();

    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (this.enemigos[i].vida) {
        this.enemigos[i].dibujar();
      }
    }

    this.dibujarBalas();
    this.personaje.haDisparadoBala();
    this.controlarColisiones();
    //} else if (this.estadoJuego === "Ganaste") {
    //  background(0, 255, 0);
    //  fill(0);
    //  textSize(24);
    //  textAlign(CENTER, CENTER);
    //  text("¡Ganaste! Presiona 'r' para reiniciar", width / 2, height / 2);
    //} else if (this.estadoJuego === "Perdiste") {
    //  background(255, 0, 0);
    //  fill(0);
    //  textSize(24);
    //  textAlign(CENTER, CENTER);
    //  text("¡Perdiste! Presiona 'r' para reiniciar", width / 2, height / 2);
    //}

    fill(255);
    textSize(16);
    textAlign(RIGHT, TOP);
    text("Tiempo: " + int(this.tiempoRestante), width - 10, 10);
    this.personaje.dibujar();
    this.personaje.actualizar();
    //if (this.estadoJuego === "JuegoEnProgreso") {
    //  this.tiempoRestante -= 1 / frameRate();
    //  if (this.tiempoRestante <= 0) {
    //    this.mostrarPerdiste();
    //  }
    //}
    if (tiempoRestante<=0) {
      this.estado = 14;
    } else if ( this.todosEnemigosEliminados ) {
      this.estado = 16;
    }
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo(i * 40 + 20, 100);
    }
  }

  //press() {
  //  //if (key === ' ' && this.estadoJuego === "pantallaInicio") {
  //  //  this.estadoJuego = "JuegoEnProgreso";
  //  //} else if (key === ' ' && this.todosEnemigosEliminados) {
  //  //  this.reiniciarJuego();
  //  //} else if (key === 'r' && this.estadoJuego === "Ganaste") {
  //  //  this.reiniciarJuego();
  //  //} else if (key === 'r' && this.estadoJuego === "Perdiste") {
  //  //  this.reiniciarJuego();
  // if (this.estadoJuego === "JuegoEnProgreso") {
  //    this.personaje.teclaPresionada(keyCode);
  //    if (keyCode === ENTER) {
  //      this.personaje.dispararBala();
  //    }
  //  }
  //}

  dibujarBalas() {
    for (let i = this.personaje.balas.length - 1; i >= 0; i--) {
      this.personaje.balas[i].dibujar();
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

    this.todosEnemigosEliminados = this.enemigos.every((enemigo) => !enemigo.vida);
    if (this.todosEnemigosEliminados) {
      this.mostrarGanaste();
    }
  }

  //mostrarGanaste() {
  //  this.estadoJuego = "Ganaste";
  //}

  //mostrarPerdiste() {
  //  this.estadoJuego = "Perdiste";
  //}

  reiniciarJuego() {
    this.crearEnemigos();
    this.todosEnemigosEliminados = false;
    this.estadoJuego = "pantallaInicio";
    this.tiempoRestante = 15;
  }
}
