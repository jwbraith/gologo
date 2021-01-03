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
        x: 45,
        y: 50
      },
      {
        x: 70,
        y: 50
      },
      {
        x: 45,
        y: 70
      },
      {
        x: 70,
        y: 70
      },

      {
        x: 45,
        y: 90
      },
      {
        x: 70,
        y: 90,
      },
      {
        x: 45,
        y: 110
      },
      {
        x: 70,
        y: 110
      }
    ]
    this.toonB = [
      {
        x: 95,
        y: 30
      },
      {
        x: 120,
        y: 30
      },
      {
        x: 95,
        y: 50,
      },
      {
        x: 120,
        y: 50,
      },
      {
        x: 145,
        y: 30
      },
      {
        x: 170,
        y: 30
      },
      {
        x: 145,
        y: 50
      },
      {
        x: 170,
        y: 50
      }
    ]
    this.toonC = [
      {
        x: 95,
        y: 70
      },
      {
        x: 120,
        y: 70
      },
      {
        x: 95,
        y: 90
      },
      {
        x: 120,
        y: 90
      },
      {
        x: 145,
        y: 70
      },
      {
        x: 170,
        y: 70
      },
      {
        x: 145,
        y: 90
      },
      {
        x: 170,
        y: 90
      }
    ]
    this.toonD = [
      {
        x: 195,
        y: 50
      },
      {
        x: 220,
        y: 50
      },
      {
        x: 195,
        y: 70
      },
      {
        x: 220,
        y: 70
      },

      {
        x: 195,
        y: 90
      },
      {
        x: 220,
        y: 90,
      },
      {
        x: 195,
        y: 110
      },
      {
        x: 220,
        y: 110
      }
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
      ellipse(this.toonA[i].x, this.toonA[i].y, 6);
    }
    for (let i = 0; i < this.toonB.length; i++) {
      ellipse(this.toonB[i].x, this.toonB[i].y, 6);
    }
    for (let i = 0; i < this.toonC.length; i++) {
      ellipse(this.toonC[i].x, this.toonC[i].y, 6);
    }
    for (let i = 0; i < this.toonD.length; i++) {
      ellipse(this.toonD[i].x, this.toonD[i].y, 6);
    }
    pop();
  }

}