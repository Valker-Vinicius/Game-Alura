class Game {
    constructor() {
        this.index = 0
        this.map = cassette.map
        this.isDead = false
    }

    setup() {
        sky = new Background(skyImage, 5)
        BGDecor = new Background(BGDecorImage, 5)
        foreground = new Background(foregroundImage, 4)
        grass = new Background(grassImage, 4)
        
        pointer = new Pointer()
        life = new Life(cassette.configs.maxLife, cassette.configs.initialLife)
    
        character = new Character(characterMatriz, characterImage, 1, 30, 110, 135, 220, 270)
        const enemy = new Enemy(enemyMatriz, enemyImage, width, 30, 52, 52, 104, 104, 10)
        const wingSlime = new Enemy(wingSlimeMatriz, wingSlimeImage, width, 200, 100, 75, 200, 150, 10)
        const troll = new Enemy(trollMatriz, trollImage, width, 0, 200, 200, 400, 400, 15)
        
        enemies.push(enemy)
        enemies.push(troll)
        enemies.push(wingSlime)
    }

    keyPressed(key) {
        if ( this.isDead === false && key === 'ArrowUp' || key === "w") {
            character.jump()
            jumpSound.play()
        }
    }

    draw() {
        sky.exibs()
        sky.move()
        BGDecor.exibs()
        BGDecor.move()
        foreground.exibs()
        foreground.move()

        life.draw()
        
        pointer.exibs()
        pointer.pointAdd()

        character.exibs()
        character.gravityActives()
             
        const actualLine = this.map[this.index]
        const enemy = enemies[actualLine.enemy]
        const visibleEnemy = enemy.x < -enemy.width
        
        enemy.vel = actualLine.vel
        
        enemy.exibs()
        enemy.move()
   
        grass.exibs()
        grass.move()

        if (visibleEnemy) {
            this.index++
            enemy.appear()
            if (this.index > this.map.length - 1) {
                this.index = 0
            }    
        }
        
        if(life.lifes < 0) {
                image(gameOverImage, width / 2 - 200, height / 2)
                gameSound.stop()
                this.isDead = true
                noLoop()
        }

        if (character.isCollided(enemy)) {
            character.beInvincible()
            life.lifeLose()
            if(life.lifes === 0) {
                life.lifeLose()
                console.log(life.lifes)
            }   
        }
    }
}