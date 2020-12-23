class Enemy {
  constructor(x, y, r) {
    this.origin = createVector(x, y);
    this.vel = createVector(2, -2);
    this.pos = createVector(x, y);
    this.angX = 45;
    this.angY = 45;
    this.mag = 36;
    this.radius = r;
  }

  update() {
    this.origin.add(this.vel);
    if (this.origin.y < 200 && this.angX <= 405) {
      this.angX += 4;
      this.angY += 4;
      this.vel.mult(0);
    }

    if (this.angX > 405) {
      this.vel = createVector(2, -2);
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
    stroke(0);
    fill(255, 0, 155);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
    fill(10, 250, 10);
    ellipse(0, 0, this.radius);
    pop();
  }
}