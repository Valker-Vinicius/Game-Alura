function preload() {
  backgroundImage = loadImage('images/background/floresta.png')
  gameOverImage = loadImage('images/assets/game-over.png')
  characterImage = loadImage('images/character/correndo.png')
  enemyImage = loadImage('images/enemies/gotinha.png')
  trollImage = loadImage('images/enemies/troll.png')
  wingSlimeImage = loadImage('images/enemies/gotinha-voadora.png')
  gameSound = loadSound('songs/trilha_jogo.mp3')
  jumpSound = loadSound('songs/somPulo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background = new Background(backgroundImage, 3)
  pointer = new Pointer()
  character = new Character(characterMatriz, characterImage, 0, 30, 110, 135, 220, 270)
  const enemy = new Enemy(enemyMatriz, enemyImage, width - 52, 30, 52, 52, 104, 104, 10, 100)
  const wingSlime = new Enemy(wingSlimeMatriz, wingSlimeImage, width - 52, 200, 100, 75, 200, 150, 10, 100)
  const troll = new Enemy(trollMatriz, trollImage, width, 0, 200, 200, 400, 400, 15, 100)
  
  enemies.push(enemy)
  enemies.push(troll)
  enemies.push(wingSlime)
  
  frameRate(40);
  gameSound.loop();
}

function keyPressed() {
  if(key === 'ArrowUp') {
    character.jump()
    jumpSound.play()
  }
}

function draw() {
  background.exibs()
  background.move()
  
  pointer.exibs()
  pointer.pointAdd()

  character.exibs()
  character.gravityActives()
  
  const enemy = enemies[actualEnemy]
  const visibleEnemy = enemy.x < -enemy.width
  
  enemy.exibs()
  enemy.move()
  
  if(visibleEnemy) {
    actualEnemy++
    if (actualEnemy > 2) {
      actualEnemy = 0
    }
    enemy.vel = parseInt(random(10, 30))
  }

  if (character.isCollided(enemy)) {
    image(gameOverImage, width/2 - 200, height/2)

    noLoop()
  }
}