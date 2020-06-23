class Character extends Animation {
  constructor(matriz, image,  x, width, highess, spriteWidth, spriteHeight) {
    super(matriz, image,  x, width, highess, spriteWidth, spriteHeight);
    this.baseY = height - this.highess
    this.y = this.baseY
    this.jumpsVel = 0
    this.gravity = 3 
  }
  
  jump() {
    this.jumpsVel = - 30
  }
  
  gravityActives() {
    this.y = this.y + this.jumpsVel
    this.jumpsVel = this.jumpsVel + this.gravity
    if(this.y > this.baseY) {
      this.y = this.baseY
    }
  }

  isCollided(enemy) {
    const precision = 0.73
    const collide = collideRectRect(
      this.x, 
      this.y, 
      this.width * precision, 
      this.highess * precision, 
      enemy.x, 
      enemy.y, 
      enemy.width * precision, 
      enemy.highess * precision
      );
    return collide;
  }
}