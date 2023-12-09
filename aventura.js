class Aventura {
  constructor() {
    this.estado = 0;
    this.boton1 = new Boton ();
    this.boton2 = new Boton ();
    this.pantalla = new Pantalla (pantallas);
    this.juego = new Juego (15, pantallas);
    this.timer = 0;
  }

                                   //CREAMOS BOTONES Y MOSTRAMOS PANTALLAS//
  mostrar() {
    console.log(this.estado);
    switch (this.estado) {
    case 0:
      this.pantalla.mostrar(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      this.boton1.mostrar(380, 515, 200, 50, "Comenzar", 0);
      break;
    case 1:
      this.pantalla.mostrar(1, 300, 15, 290, 75, 350, 90, 200, 70);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 2:
      this.pantalla.mostrar(2, 50, 5, 200, 150, 320, 80, 200, 71);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 3:
      this.pantalla.mostrar(3, 0, 300, 200, 150, 700, 700, 300, 50);
      this.boton1.mostrar(25, 450, 200, 100, "Tomar una decision");
      this.boton2.mostrar(360, 450, 200, 100, "Seguir con su vida");
      break;
    case 4:
      this.pantalla.mostrar(4, 0, 10, 300, 55, 0, 65, 300, 50);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 5:
      this.pantalla.mostrar(5, 150, 250, 300, 125, 190, 100, 200, 105);
      this.boton1.mostrar(200, 500, 200, 50, "Reiniciar");
      break;
    case 6:
      this.pantalla.mostrar(6, 330, 250, 250, 80, 330, 330, 250, 50);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 7:
      this.pantalla.mostrar(7, 10, 10, 400, 100, 10, 110, 280, 80);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 8:
      this.pantalla.mostrar(8, 10, 10, 200, 80, 10, 80, 200, 100);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 9:
      this.pantalla.mostrar(9, 25, 15, 200, 100, 360, 40, 200, 50);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 10:
      this.pantalla.mostrar(10, 10, 25, 200, 100, 700, 700, 200, 150);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 11:
      this.pantalla.mostrar(11, 10, 50, 200, 80, 10, 130, 200, 80);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
                                              //TIMER PARA PASAR DE PANTALLA// 
    case 12:
      this.pantalla.mostrar(12, 250, 250, 150, 100, 200, 350, 200, 100);
      this.timer++;
      if (this.timer >= 300) {
        this.estado = 13;
        this.juego.reiniciar();
        this.timer = 0;
      }
      break;
                                             //MOSTRAMOS JUEGO//
    case 13:
      this.juego.mostrar(this);
      break;
    case 14:
      this.pantalla.mostrar(14, 25, 5, 200, 100, 700, 700, 200, 100);
      this.boton1.mostrar(200, 500, 200, 50, "CREDITOS");
      break;
    case 15:
      this.pantalla.mostrar(15, 25, 15, 200, 100, 700, 700, 200, 100);
      this.boton1.mostrar(25, 450, 200, 100, "Ir a Marte");
      this.boton2.mostrar(360, 450, 200, 100, "Ir a la Luna");
      break;
    case 16:
      this.pantalla.mostrar(16, 25, 10, 200, 100, 360, 10, 200, 100);
      this.boton1.mostrar(380, 530, 200, 50, "Continuar");
      break;
    case 17:
      this.pantalla.mostrar(17, 25, 10, 200, 100, 200, 500, 50, 50);
      this.boton1.mostrar(380, 515, 200, 50, "CREDITOS");
      break;
    }
  }
                                            //PASAR DE ESTADO A ESTADO//
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
    if (this.estado === 14 && this.boton1.estaSobre()) {
      this.estado = 5;
      return;
    }
    if (this.estado === 5 && this.boton1.estaSobre()) {
      this.estado = 0;
      return;
    }
    if (this.estado === 17 && this.boton1.estaSobre()) {
      this.estado = 5;
      return;
    }
  }
                          //HACEMOS QUE SE PUEDA MOVER EL PERSONAJE//
  teclaPresionada() {
    this.juego.teclaPresionada();
  }
}
