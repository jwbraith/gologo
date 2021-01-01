class Formation {
  constructor() {
    // these coordinates are used with translate() to slide the formation as a whole back and forth
    this.posX = 0;
    this.posY = 0;
    // the speed at which the formation moves backk and forth
    this.vel = 12;
    // this keeps track of the positions that make up the formation
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
    if (frameCount % 40 == 0) {
      if (this.posX >= 30 || this.posX < 0) {
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
      // ellipse(this.toonA[i].x, this.toonA[i].y, 6);
    }
    pop();
  }

}