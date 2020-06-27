class Character extends Animation {
  constructor(matriz, image,  x, variableY, width, highess, spriteWidth, spriteHeight) {
    super(matriz, image,  x, variableY, width, highess, spriteWidth, spriteHeight);
    this.variableY = variableY
    this.baseY = height - this.highess - this.variableY
    this.y = this.baseY

    this.jumpsVel = 0
    this.gravity = 6
    this.jumpHeight = -50
    this.jumps = 0
    this.invincible = false
  }
  
  jump() {
    if(this.jumps < 2) {
      this.jumpsVel = this.jumpHeight
      this.jumps++
    }
  }
  
  gravityActives() {
    this.y += this.jumpsVel
    this.jumpsVel +=  this.gravity
    
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

    const precision = 0.9

      const collide = collideCircleCircle(
      this.x + this.width/2, 
      this.y + this.highess/2, 
      this.width * precision, 
      enemy.x + enemy.width/1.5, 
      enemy.y + enemy.highess/1.5,
      enemy.width * precision
      )
      console.log(collide)
    return collide;
  }
}