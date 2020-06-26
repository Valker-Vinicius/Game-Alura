class Background {
    constructor(image, vel) {
      this.image = image
      this.vel = vel
      this.x1 = 0
      this.x2 = width
    }

    exibs() {
      image(this.image, this.x1, 0, width + 5, height)
      image(this.image, this.x2, 0, width + 5, height)
    }

    move() {
      this.x1 -= this.vel
      this.x2 -= this.vel
      if (this.x1 < -width) {
        this.x1 = width
      }
      if (this.x2 < -width) {
        this.x2 = width
      }
    }
  }