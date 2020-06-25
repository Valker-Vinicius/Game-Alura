class Pointer {
    constructor() {
        this.points = 0
    }

    exibs() {
        textAlign(RIGHT)
        fill('#fff')
        textSize(50)
        text(parseInt(this.points), width - 30, 50)
    }

    pointAdd() {
        this.points += 0.2
    }
}