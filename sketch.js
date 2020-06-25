let backgroundImage
let characterImage
let enemyImage
let trollImage

let background
let gameSound
let jumpSound
let character
let enemy
let troll

const characterMatriz = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 810]
]

const enemyMatriz = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

const trollMatriz = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

function preload() {
  backgroundImage = loadImage('images/background/floresta.png');
  characterImage = loadImage('images/character/correndo.png');
  enemyImage = loadImage('images/enemies/gotinha.png');
  trollImage = loadImage('images/enemies/troll.png')
  gameSound = loadSound('songs/trilha_jogo.mp3');
  jumpSound = loadSound('songs/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background = new Background(backgroundImage, 3)
  character = new Character(characterMatriz, characterImage, 0, 30, 100, 190, 200, 270)
  enemy = new Enemy(enemyMatriz, enemyImage, width - 52, 27, 52, 52, 104, 104, 10, 100)
  troll = new Enemy(trollMatriz, trollImage, width, 0, 200, 200, 400, 400, 10, 500)
  frameRate(40);
  gameSound.loop();
}

function keyPressed() {
  if(key === 'ArrowUp') {
    character.jump();
    jumpSound.play();
  }
}

function draw() {
  background.exibs();
  background.move();
  
  character.exibs();
  character.gravityActives();
  
  troll.exibs()
  troll.move()
   
  enemy.exibs();
  enemy.move();

  if (character.isCollided(enemy)) {
    noLoop()
  }
}