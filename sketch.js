//escenarios
let mapa1;
let pantalla;
//personajes
let jugador;
let enemigo;

function setup() {
  createCanvas(800, 400);
  pantalla = 1;
  //escenarios
  mapa1 = new Terreno2D1();
  mapa1.arregloEscaque();
  //personajes
  jugador = new Player(0,0);
  enemigo = new Enemy(2,17);
  enemigo2 = new Enemy2(2,6);
}

function draw() {
  background(220); 
  
  mapa1.mostrar();

  switch(pantalla){
    case 1:
      mapa1.personalizarParedes(0);
      jugador.mostrarProtagonista(0,0);
      enemigo.show(3,0);
      enemigo.move(mapa1);
      enemigo2.show(2,6);
      enemigo2.move(mapa1);
      /*for(let i = 0; i < enemigo.length; i++){
          enemigo[i].mostrarEnemigo();
          enemigo[i].moveEnemy(mapa1);
      }*/
      break;
  }
}
function keyPressed() {
  switch (key) {
      case 'a': // izquierda
          if (jugador.getPcol() - 1 >= 0) {
              if (mapa1.getLocacion(jugador.getPfil(), jugador.getPcol() - 1) === 0) {
                  jugador.setPcol(jugador.getPcol() - 1);
                  
              }
          }
          break;
      case 'd': // derecha
          if (jugador.getPcol() + 1 < 20) {
              if (mapa1.getLocacion(jugador.getPfil(), jugador.getPcol() + 1) === 0) {
                  jugador.setPcol(jugador.getPcol() + 1);
                  
              }
          }
          break;
      case 'w': // arriba
          if (jugador.getPfil() - 1 >= 0) {
              if (mapa1.getLocacion(jugador.getPfil() - 1, jugador.getPcol()) === 0) {
                  jugador.setPfil(jugador.getPfil() - 1);
                  
              }
          }
          break;
      case 's': // abajo
          if (jugador.getPfil() + 1 < 20) {
              if (mapa1.getLocacion(jugador.getPfil() + 1, jugador.getPcol()) === 0) {
                  jugador.setPfil(jugador.getPfil() + 1);
                  console.log("se mueves POR FIIIIN :'v ");
              }
          }
          break;
  }
  jugador.updateLocation();
  //verifyItem();
  //console.log(jugador.getVida());
}
