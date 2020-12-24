class Enemy {
  constructor(x, y, r) {
    this.origin = createVector(x, y);
    this.vel = createVector(2, -3);
    this.pos = createVector(x, y);
    this.angX = 45;
    this.angY = 45;
    this.mag = 36;
    this.radius = r;
  }

  update() {

    console.log(this.origin.y);
    if (this.origin.y < 200 && this.angX <= 405) {
      this.angX += 4;
      this.angY += 4;
      this.vel.mult(0);
      this.pos = createVector(this.mag * sin(this.angX), this.mag * cos(this.angY));
    } else if (this.origin.y < 200 && this.angX >= 405) {
      this.vel = createVector(2, -3);
    } else if (this.origin.y < 150) {
      this.origin.lerp(20, 20, 0.5);
      this.mag--;
    } else {
      this.origin.add(this.vel);
      this.pos = createVector(this.mag * sin(45), this.mag * cos(45));

    }

    // if (this.angX > 405) {
    //   this.vel = createVector(2, -3);
    // }
  }

  setPos(vec) {
    this.origin = vec;
  }

  show() {
    push();
    translate(this.origin.x, this.origin.y);
    noStroke();
    stroke(0);
    fill(255, 0, 155);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
    fill(10, 250, 10);
    ellipse(0, 0, this.radius);
    pop();
  }
}