function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(40)
  gameSound.loop()
  game = new Game()
  initialScreen = new InitialScreen()
  game.setup()
  scenes = {
    game,
    initialScreen
  }
}

function keyPressed() {
  game.keyPressed(key)
}

function draw() {
  scenes[actualScene].draw()
}