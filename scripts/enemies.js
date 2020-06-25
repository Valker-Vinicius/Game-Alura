class Enemy extends Animation {
    constructor(matriz, image, x, variableY, width, highess, spriteWidth, spriteHeight) {
        super(matriz, image,  x, variableY, width, highess, spriteWidth, spriteHeight)
        this.vel = 5
    }

    move() {
        this.x = this.x - this.vel
        if (this.x < -this.width) {
            this.x = width
        }
    }
}