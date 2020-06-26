class Game {
    constructor() {
        this.actualEnemy = 0

    }

    setup() {
        sky = new Background(skyImage, 5)
        BGDecor = new Background(BGDecorImage, 5)
        foreground = new Background(foregroundImage, 4)
        grass = new Background(grassImage, 4)
        life = new Life(3, 3)
        pointer = new Pointer()
        character = new Character(characterMatriz, characterImage, 0, 30, 110, 135, 220, 270)
        const enemy = new Enemy(enemyMatriz, enemyImage, width - 52, 30, 52, 52, 104, 104, 10, 300)
        const wingSlime = new Enemy(wingSlimeMatriz, wingSlimeImage, width - 52, 200, 100, 75, 200, 150, 10, 300)
        const troll = new Enemy(trollMatriz, trollImage, width, 0, 200, 200, 400, 400, 15, 300)

        enemies.push(enemy)
        enemies.push(troll)
        enemies.push(wingSlime)
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
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

        pointer.exibs()
        pointer.pointAdd()

        character.exibs()
        character.gravityActives()
             

        const enemy = enemies[this.actualEnemy]
        const visibleEnemy = enemy.x < -enemy.width

        enemy.exibs()
        enemy.move()
   
        grass.exibs()
        grass.move()

        life.draw()

        if (visibleEnemy) {
            this.actualEnemy++
            if (this.actualEnemy > 2) {
                this.actualEnemy = 0
            }
            enemy.vel = parseInt(random(10, 30))
        }

        if (character.isCollided(enemy)) {
            life.lifeLose()
            character.beInvincible()
            if(life.lifes === 0) {
                
                gameSound.stop()
                image(gameOverImage, width / 2 - 200, height / 2)
                noLoop()
            }
        }
    }
}