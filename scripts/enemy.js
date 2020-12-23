class Enemy {
  constructor(x, y, r) {
    this.origin = createVector(x, y);
    this.vel = createVector(1, -1);
    this.pos = createVector(x, y);
    this.angX = 0;
    this.angY = 0;
    this.mag = 30;
    this.radius = r;
  }

  update() {
    // this.mag = 112 - this.pos.y;
    this.origin.add(this.vel);
    if (this.origin.y < 150) {
      this.angX += 0.11;
      this.angY += 0.1;
    }
    this.pos = createVector(this.mag * sin(this.angX), this.mag * cos(this.angY));
  }

  setPos(vec) {
    this.origin = vec;
  }

  show() {
    push();
    translate(this.origin.x, this.origin.y);
    noStroke();
    fill(10, 250, 10);
    ellipse(0, 0, this.radius);
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
    pop();
  }
}