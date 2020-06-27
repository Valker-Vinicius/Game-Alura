class Animation {
  constructor(matriz, image, x, variableY, width, highess, spriteWidth, spriteHeight){
  this.matriz = matriz
  this.image = image
  this.width = width
  this.highess = highess
  this.x = x
  this.variableY = variableY
  this.y = height - this.highess - this.variableY
  this.spriteWidth = spriteWidth
  this.spriteHeight = spriteHeight
  this.actualMatriz = 0
  }

  exibs() {
    const usedImage = this.image;
    const axisX = this.x;
    const axisY = this.y;
    const width = this.width;
    const height = this.highess;
    const insideAxisX = this.matriz[this.actualMatriz][0];
    const insideAxisY = this.matriz[this.actualMatriz][1];
    const spriteWidth = this.spriteWidth;
    const spriteHeight = this.spriteHeight;
    image(usedImage, axisX, axisY, width, height, insideAxisX, insideAxisY, spriteWidth, spriteHeight);
    this.animate();
  }
  
  animate() {
    this.actualMatriz++
      
    if(this.actualMatriz >= this.matriz.length - 1) {
      this.actualMatriz = 0
    }
  }
}