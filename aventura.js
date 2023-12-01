class Aventura {
  constructor() {
    this.estado = 0;
    this.boton1 = new Boton ();
    this.boton2 = new Boton ();
    this.pantalla = new Pantalla (pantallas);
    this.juego = new Juego (pantallas);
  }

  mostrar() {
    console.log(this.estado);
    switch (this.estado) {
    case 0:
      this.pantalla.mostrar(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      this.boton1.mostrar(380, 515, 200, 50, "Comenzar", 0);
      break;
    case 1:
      this.pantalla.mostrar(1, 10, 15, 290, 75, 365, 420, 225, 100);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 2:
      this.pantalla.mostrar(2, 25, 5, 200, 75, 25, 80, 200, 71);
      this.boton1.mostrar(380, 530, 320, 50, "Continuar");
      break;
    case 3:
      this.pantalla.mostrar(3, 0, 10, 300, 55, 0, 65, 300, 50);
      this.boton1.mostrar(25, 15, 200, 100, "Tomar decision");
      this.boton2.mostrar(360, 15, 200, 100, "Seguir con su vida");
      break;
    case 4:
      this.pantalla.mostrar(4, 0, 10, 300, 55, 0, 65, 300, 50);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 5:
      this.pantalla.mostrar(5, 25, 5, 300, 125, 360, 5, 200, 105);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 6:
      this.pantalla.mostrar(6, 20, 10, 250, 80, 330, 25, 250, 50);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 7:
      this.pantalla.mostrar(7, 10, 10, 400, 100, 320, 90, 280, 80);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 8:
      this.pantalla.mostrar(8, 25, 5, 200, 80, 360, 5, 200, 80);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 9:
      this.pantalla.mostrar(9, 25, 15, 200, 100, 360, 40, 200, 50);
      this.boton1.mostrar(380, 530, 200, 100, "Continuar");
      break;
    case 10:
      this.pantalla.mostrar(10, 25, 480, 200, 100, 360, 450, 200, 150);
      this.boton1.mostrar(380, 530, 200, 100, "Continuar");
      break;
    case 11:
      this.pantalla.mostrar(11, 100, 50, 200, 100, 400, 20, 200, 100);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 12:
      this.pantalla.mostrar(12, 25, 5, 200, 100, 360, 5, 200, 100);
      //CONTADOR PARA PASAR DE PANTALLA
        this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 13:
      this.juego.dibujar(this.estado);
      this.boton1.mostrar(100, 100, 100, 100, "gano");
      this.boton2.mostrar(300, 100, 100, 100, "pierdo");
      break;
    case 14:
      this.pantalla.mostrar(14, 25, 5, 200, 100, 360, 5, 200, 100);
      this.boton1.mostrar(380, 530, 200, 50, "CREDITOS");
      break;
    case 15:
      this.pantalla.mostrar(15, 25, 5, 200, 100, 360, 5, 200, 100);
      this.boton1.mostrar(25, 15, 200, 100, "Ir a Marte");
      this.boton2.mostrar(360, 15, 200, 100, "Ir a la Luna");
      break;
    case 16:
      this.pantalla.mostrar(16, 25, 5, 200, 100, 360, 5, 200, 100);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 17:
      this.pantalla.mostrar(17, 25, 5, 200, 100, 360, 5, 200, 100);
      this.boton1.mostrar(380, 515, 200, 50, "CREDITOS");
      break;
    }
  }
  interactuar() {
    if (this.estado === 0 && this.boton1.estaSobre()) {
      this.estado = 1;
      return;
    }
    if (this.estado === 1 && this.boton1.estaSobre()) {
      this.estado = 2;
      return;
    }
    if (this.estado === 2 && this.boton1.estaSobre()) {
      this.estado = 3;
      return;
    }
    if (this.estado === 3 && this.boton1.estaSobre()) {
      this.estado = 6;
      return;
    }
    if (this.estado === 3 && this.boton2.estaSobre()) {
      this.estado = 4;
      return;
    }
    if (this.estado === 4 && this.boton1.estaSobre()) {
      this.estado = 5;
      return;
    }
    if (this.estado === 6 && this.boton1.estaSobre()) {
      this.estado = 7;
      return;
    }
    if (this.estado === 7 && this.boton1.estaSobre()) {
      this.estado = 8;
      return;
    }
    if (this.estado === 8 && this.boton1.estaSobre()) {
      this.estado = 9;
      return;
    }
    if (this.estado === 9 && this.boton1.estaSobre()) {
      this.estado = 10;
      return;
    }
    if (this.estado === 10 && this.boton1.estaSobre()) {
      this.estado = 11;
      return;
    }
    if (this.estado === 11 && this.boton1.estaSobre()) {
      this.estado = 12;
      return;
    }
    if (this.estado === 12 && this.boton1.estaSobre()) {
      this.estado = 13;
      return;
    }
    if (this.estado === 13 && this.boton1.estaSobre()) {
      this.estado = 14;
      return;
    }
    if (this.estado === 13 && this.boton1.estaSobre()) {
      this.estado = 15;
      return;
    }
    if (this.estado === 15 && this.boton1.estaSobre()) {
      this.estado = 14;
      return;
    }
    if (this.estado === 15 && this.boton2.estaSobre()) {
      this.estado = 16;
      return;
    }
    if (this.estado === 16 && this.boton1.estaSobre()) {
      this.estado = 17;
      return;
    }
  }
}
