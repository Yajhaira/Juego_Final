class Player {
    constructor(pFil, pCol){

        this.xPos = 20;
        this.yPos = 20;
        this.pCol = 0;
        this.pFil = 0;
        

    }
mostrarProtagonista(){
    fill(255, 0, 0);
    ellipse(this.xPos, this.yPos, 30, 30);
    imageMode(CENTER);
        //image(ImgProta,this.enemyPosX, this.enemyPosY,40, 40);
}
updateLocation(){
    this.xPos = (this.pCol * 40) + 20; // validamos el mapa en la matriz
    this.yPos = (this.pFil * 40) + 20; // validamos el mapa en la matriz
}
reset(){
            
    this.pCol = 0; // pixeles
    this.pFil = 0; // pixeles
    this.xPos = 20;
    this.yPos = 20;
            
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

setXpos(nuevoXpos) {
    this.xPos = nuevoXpos;
}
getXpos() {
    return this.xPos;
}

setYpos(newYpos) {
    this.yPos = nuevoYpos;

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

