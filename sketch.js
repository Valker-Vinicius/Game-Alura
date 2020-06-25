let backgroundImage;
let characterImage;
let enemyImage;

let background;
let gameSound;
let jumpSound;
let character;
let enemy;

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

function preload() {
  backgroundImage = loadImage('images/background/floresta.png');
  characterImage = loadImage('images/character/correndo.png');
  enemyImage = loadImage('images/enemies/gotinha.png');
  gameSound = loadSound('songs/trilha_jogo.mp3');
  jumpSound = loadSound('songs/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background = new Background(backgroundImage, 3);
  character = new Character(characterMatriz, characterImage, 0, 30, 100, 190, 200, 270);
  enemy = new Enemy(enemyMatriz, enemyImage, width - 52, 27, 52, 52, 104, 104);
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

  enemy.exibs();
  enemy.move();

  if (character.isCollided(enemy)) {
    noLoop();
  }
}