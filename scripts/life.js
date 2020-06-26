class Life {
    constructor(total, initial) {
        this.total = total
        this.initial = initial
        this.lifes = this.initial
        this.width = 25
        this.highess = 25
        this.initialX = 20
        this.y = 20
    }

    draw() {
        for(let i = 0; i < this.lifes; i++) {
            const margin = i * 10
            const position = this.initialX * (i + 1)
            image(lifeImage, position + margin, this.y, this.width, this.highess)
        }        
    }
}