class Player {
    constructor(pFil, pCol){

        this.xPos = (pCol * 40) + 20;
        this.yPos = (pFil * 40) + 20;
        this.pCol = pCol;
        this.pFil = pFil;
        

    }
mostrarProtagonista(){
    fill(255, 0, 0);
    ellipse(this.xPos, this.yPos, 30, 30);
}
updateLocation(){
    this.xPos = (this.pCol * 40) + 20; // validamos el mapa en la matriz
    this.yPos = (this.pFil * 40) + 20; // validamos el mapa en la matriz
}
reset(){
            pjCol = 0; // pixeles
            pjFil = 0; // pixeles
            xPos = (pjCol * 40) + 20; // validamos el mapa en la matriz
            yPos = (pjFil * 40) + 20; // validamos el mapa en la matriz
            vidas = 3;
}
getX () {
    return this.xPos;
}
getY () {
    return this.yPos;
}
getPcol() {
    return this.pCol;
}

getPfil() {
    return this.pFil;
}

getXpos() {
    return this.xPos;
}

getYpos() {
    return this.yPos;
}

setPcol(nuevoPcol) {
    this.pCol = nuevoPcol;
}

setPfil(nuevoPfil) {
    this.pFil = nuevoPfil;
}

setXpos(nuevoXpos) {
    this.xPos = nuevoXpos;
}

setYpos(newYpos) {
    this.yPos = nuevoYpos;

}
setCol(newCol) {
    pjCol = newCol;
}
setFil(newFil){
    pjFil = newFil;
}
/*getVida() {
    return vidas;
}*/
setVida(newVidas) {
    vidas = newVidas;
}
pvida() {
    console.log("funciona")
    //this.setVida(this.getVida() - 1);
}
}
