class Cohete2 {
    constructor(coheteFil, coheteCol){
    this.cohetePosX = (coheteCol * 40) + 20; // pixeles
    this.cohetePosY = (coheteFil * 40) + 20; // pixeles
    }


   
    //Cohete de Neptuno
    show () {
        fill(0, 255, 255);
        ellipse(this.cohetePosX, this.cohetePosY, 30, 30);
        imageMode(CENTER);
        image(ImgNave,this.cohetePosX, this.cohetePosY,40, 40);
    }
     
    getX () {
        return this.cohetePosX;
    }
    getY () {
        return this.cohetePosY;
    }
}