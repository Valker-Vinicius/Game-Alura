class Game {
    constructor() {
        this.actualEnemy = 0

    }
    setup() {
        background = new Background(backgroundImage, 3)
        pointer = new Pointer()
        character = new Character(characterMatriz, characterImage, 0, 30, 110, 135, 220, 270)
        const enemy = new Enemy(enemyMatriz, enemyImage, width - 52, 30, 52, 52, 104, 104, 10, 100)
        const wingSlime = new Enemy(wingSlimeMatriz, wingSlimeImage, width - 52, 200, 100, 75, 200, 150, 10, 100)
        const troll = new Enemy(trollMatriz, trollImage, width, 0, 200, 200, 400, 400, 15, 100)

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
        background.exibs()
        background.move()

        pointer.exibs()
        pointer.pointAdd()

        character.exibs()
        character.gravityActives()

        const enemy = enemies[this.actualEnemy]
        const visibleEnemy = enemy.x < -enemy.width

        enemy.exibs()
        enemy.move()

        if (visibleEnemy) {
            this.actualEnemy++
            if (this.actualEnemy > 2) {
                this.actualEnemy = 0
            }
            enemy.vel = parseInt(random(10, 30))
        }

        if (character.isCollided(enemy)) {
            image(gameOverImage, width / 2 - 200, height / 2)
            gameSound.stop()
            noLoop()
        }
    }
}