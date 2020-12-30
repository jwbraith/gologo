class Enemy {
  constructor(x, y, r, endX, endY, offset) {
    this.origin = createVector(x, y);
    this.vel = createVector(2, -3);
    this.pos = createVector(x - offset, y - offset);
    this.offset = offset;
    this.endPos = createVector(endX, endY);
    this.angX = 45;
    this.angY = 45;
    this.mag = 36;
    this.radius = r;
    this.colour = color(random(255), random(255), random(255));
  }

  // TODO 
  // - organize the update parts into separate movements functions?
  // - make more than one enemy? how do they enter in, how do they have separate flight paths
  // - make a toon object

  update() {
    if (this.origin.y > 200) {
      this.forward();
    } else {
      if (this.angX < 405) {
        this.loopDeLoop();
      } else {
        this.forward();
      }
    }
  }

  loopDeLoop() {
    this.angX += 4;
    this.angY += 4;
  }

  forward() {
    this.origin.add(this.vel);
  }

  fallIn() {
    this.origin = p5.Vector.lerp(this.origin, this.endPos, 0.05);
    if (this.mag > 0) {
      this.mag--;
    }
  }

  setPos(vec) {
    this.origin = vec;
  }

  show() {
    this.pos = createVector(this.mag * sin(this.angX), this.mag * cos(this.angY));
    push();
    translate(this.origin.x, this.origin.y);
    noStroke();
    stroke(0);

    // displaying the angular point
    fill(this.colour);
    let displayAng = Math.floor(this.angX);
    // text(displayAng, this.pos.x + 7, this.pos.y + 7);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);

    // displaying the origin point 
    fill(10, 250, 10);
    let displayY = Math.floor(this.origin.y);
    // text(displayY, this.pos.x + 5, this.pos.y - 5);
    // ellipse(0, 0, this.radius);
    pop();
  }
}