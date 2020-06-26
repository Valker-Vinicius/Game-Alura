class Enemy extends Animation {
    constructor(matriz, image, x, variableY, width, highess, spriteWidth, spriteHeight, vel, delay) {
        super(matriz, image,  x, variableY, width, highess, spriteWidth, spriteHeight, vel, delay)
        this.vel = vel
        this.delay = delay
        this.x = width + delay
    }

    move() {
        this.x -= this.vel
        if (this.x < -this.width - this.delay) {
            this.x = width
        }
    }
}