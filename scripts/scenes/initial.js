class InitialScreen {
    constructor() {

    }

    draw() {
        this._deepImage()
        this._text()
        this._button()
    }

    _deepImage() {
        image(initialScreenImage, 0, 0, width, height)
    }

    _text() {
        textFont(initialScreenFont)
        textAlign(CENTER)
        textSize(70)
        text("HIPSTA'S", width/2, height/3)
        text("QUEST", width/2, height/2)
    }

    _button() {
        manageButton.y = height / 7 * 5
        manageButton.draw()
    }
}