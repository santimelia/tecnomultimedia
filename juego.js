class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje();
    this.crearEnemigos();
    this.todosEnemigosEliminados = false; 
  }

  dibujar() {
    this.personaje.dibujar();

    for (let i = 0; i < this.cantidadEnemigos; i++) {
      if (this.enemigos[i].vida) {
        this.enemigos[i].dibujar();
      }
    }

    this.controlarDisparosAEnemigos();
  }

  

  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo(i * 40, 100);
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width / 2, 300);
  }

 
  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }

  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        if (this.enemigos[i].vida) {
          this.enemigos[i].haTocadoLaBala(this.personaje.bala);
        }
      }
    }

    
    this.todosEnemigosEliminados = this.enemigos.every((enemigo) => !enemigo.vida);
  }
}
