class Cohete {
    constructor(coheteFil, coheteCol){
    this.cohetePosX = (coheteCol * 40) + 20; // pixeles
    this.cohetePosY = (coheteFil * 40) + 20; // pixeles
    }


   
    
    show () {
        fill(0, 255, 255);
        ellipse(this.cohetePosX, this.cohetePosY, 30, 30);
    }
    
    getX () {
        return this.cohetePosX;
    }
    getY () {
        return this.cohetePosY;
    }
}