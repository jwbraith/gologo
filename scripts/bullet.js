class Bullet {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, -6);
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    stroke(0, 255, 0);
    strokeWeight(3);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + 2);
  }
}