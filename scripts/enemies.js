class Enemy extends Animation {
    constructor(matriz, image, x, variableY, width, highess, spriteWidth, spriteHeight, vel) {
        super(matriz, image,  x, variableY, width, highess, spriteWidth, spriteHeight, vel)
        this.vel = vel
        this.x = width + 1200
    }

    move() {
        this.x -= this.vel
    }

    appear() {
        this.x = width
    }
}