class Formation {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.vel = 6;
    this.toonA = [
      {
        x: 30,
        y: 30
      },
      {
        x: 50,
        y: 30
      },
      {
        x: 30,
        y: 50
      },
      {
        x: 50,
        y: 50
      },

    ]
  }

  update() {
    if (frameCount % 30 == 0) {
      if (this.posX >= 24 || this.posX < 0) {
        this.vel *= -1;
      }
      this.posX += this.vel;
    }
  }

  show() {
    push();
    translate(this.posX, this.posY);
    noStroke();
    fill(255, 0, 255);
    for (let i = 0; i < this.toonA.length; i++) {
      ellipse(this.toonA[i].x, this.toonA[i].y, 6);
    }
    pop();
  }

}