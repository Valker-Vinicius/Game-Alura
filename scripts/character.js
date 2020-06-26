class Character extends Animation {
  constructor(matriz, image,  x, variableY, width, highess, spriteWidth, spriteHeight) {
    super(matriz, image,  x, variableY, width, highess, spriteWidth, spriteHeight);
    this.variableY = variableY
    this.baseY = height - this.highess - this.variableY
    this.y = this.baseY
    this.invincible = false
    this.jumpsVel = 0
    this.gravity = 6
    this.jumpHeight = -50
    this.jumps = 0
  }
  
  jump() {
    if(this.jumps < 2) {
      this.jumpsVel = this.jumpHeight
      this.jumps++
    }
  }
  
  gravityActives() {
    this.y = this.y + this.jumpsVel
    this.jumpsVel = this.jumpsVel + this.gravity
    if(this.y > this.baseY) {
      this.y = this.baseY
      this.jumps = 0
    }
  }

  beInvincible() {
    this.invincible = true
    setTimeout(() => {
      this.invincible = false
    }, 1000)
  }

  isCollided(enemy) {
    if(this.invincible) {
      return false
    }
    const precision = 0.7
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