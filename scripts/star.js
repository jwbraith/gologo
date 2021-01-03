class Star {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, random(0.5, 1.5));
    this.albedo = random(195);
  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.y > 300) {
      this.pos.y = 0;
    }
  }

  show() {
    stroke(this.albedo);
    point(this.pos.x, this.pos.y);
  }
}