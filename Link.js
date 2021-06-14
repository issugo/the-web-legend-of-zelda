class Link {
    constructor() {
        this.div                = null;
        this.img                = null;
        this.baseImage          = "images/link/";
        this.linkFaceGauche     = this.baseImage + "link-face-gauche.png";
        this.linkFaceDroite     = this.baseImage + "link-face-droite.png";
        this.linkGauche1        = this.baseImage + "link-gauche-1.png";
        this.linkGauche2        = this.baseImage + "link-gauche-2.png";
        this.linkDroite1        = this.baseImage + "link-droite-1.png";
        this.linkDroite2        = this.baseImage + "link-droite-2.png";
        this.linkDosGauche      = this.baseImage + "link-dos-gauche.png";
        this.linkDosDroite      = this.baseImage + "link-dos-droite.png";
        this.currentImage       = null;
        this.y                  = 1;
        this.x                  = 0;
    }

    decorate(id) {
        let div = document.getElementById(id);
        let img = document.createElement("img");
        img.setAttribute("src", this.linkFaceGauche);
        img.setAttribute("id", "imageLink");
        div.appendChild(img);
        div.style.position = "absolute";
        div.style.left = "calc(50% + " + this.x*16 + "px)";
        div.style.top = "calc(50% + " + this.y*16 + "px)";
        //div.style.left = screen.width/2 - 128 + (16*8) + "px";
        //div.style.top = screen.height/2 - 127 + (16*5) + "px";
        //div.style.top = screen.height/2 - 64 + (16*5) + "px";
        this.img = img
        this.div = div;
        this.currentImage = this.linkFaceGauche;
    }

    moveLeft() {
        if(this.currentImage === this.linkGauche1) {
            this.img.setAttribute("src", this.linkGauche2);
            this.currentImage = this.linkGauche2;
        } else {
            this.img.setAttribute("src", this.linkGauche1);
            this.currentImage = this.linkGauche1;
        }
        this.x -= 1;
        this.div.style.left = "calc(50% + " + this.x*16 + "px)";
        console.log("x = ", this.x);
    }
    moveRight() {
        if(this.currentImage === this.linkDroite1) {
            this.img.setAttribute("src", this.linkDroite2);
            this.currentImage = this.linkDroite2;
        } else {
            this.img.setAttribute("src", this.linkDroite1);
            this.currentImage = this.linkDroite1;
        }
        this.x += 1;
        this.div.style.left = "calc(50% + " + this.x*16 + "px)";
        console.log("x = ", this.x);
    }
    moveUp() {
        if(this.currentImage === this.linkDosGauche) {
            this.img.setAttribute("src", this.linkDosDroite);
            this.currentImage = this.linkDosDroite;
        } else {
            this.img.setAttribute("src", this.linkDosGauche);
            this.currentImage = this.linkDosGauche;
        }
        this.y -= 1;
        this.div.style.top = "calc(50% + " + this.y*16 + "px)";
        console.log("y = ", this.y);
    }
    moveDown() {
        if(this.currentImage === this.linkFaceGauche) {
            this.img.setAttribute("src", this.linkFaceDroite);
            this.currentImage = this.linkFaceDroite;
        } else {
            this.img.setAttribute("src", this.linkFaceGauche);
            this.currentImage = this.linkFaceGauche;
        }
        this.y += 1;
        this.div.style.top = "calc(50% + " + this.y*16 + "px)";
        console.log("y = ", this.y);
    }
}