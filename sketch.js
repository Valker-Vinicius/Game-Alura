function setup() {
  createCanvas(windowWidth, windowHeight)
  gameSound.loop()
  manageButton = new ManageButton('Iniciar', width/2, height/2)
  game = new Game()
  initialScreen = new InitialScreen()
  game.setup()
  scenes = {
    game,
    initialScreen
  }
  frameRate(40)
}

function keyPressed() {
  game.keyPressed(key)
}

function draw() {
  scenes[actualScene].draw()
}