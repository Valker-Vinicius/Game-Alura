class ManageButton {
    constructor(text, x, y) {
        this.text = text
        this.x = x
        this.y = y
        this.button = createButton(this.text)
        this.button.mousePressed(() => this._sceneSwitch() )
    }

    draw() {
        this.button.position(this.x, this.y)
    }

    _sceneSwitch() {
        this.button.remove()
        actualScene = 'game'
    }
}