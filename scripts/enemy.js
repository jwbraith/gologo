class Enemy {
  constructor(x, y, r, endX, endY) {
    this.origin = createVector(x, y);
    this.vel = createVector(2, -3);
    this.pos = createVector(0, 0);
    this.endPos = createVector(endX, endY);
    this.angX = 45;
    this.angY = 45;
    this.mag = 48;
    this.radius = r;
    this.colour = color(random(255), random(255), random(255));
    this.flying = true;
    this.floating = false;
    this.attacking = false;
  }

  // TODO 
  // - organize the update parts into separate movements functions?
  // - make more than one enemy? how do they enter in, how do they have separate flight paths
  // - make a toon object

  update() {
    if (this.flying) {

      if (this.origin.y > 200) {
        this.forward();
      } else {
        if (this.angX < 405) {
          this.loopDeLoop();
        } else if (this.origin.y > 100) {
          this.forward();
        } else {
          if (this.origin.dist(this.endPos) < 0.5) {
            this.flying = false;
            this.floating = true;
          } else {
            this.fallIn();
          }
        }
      }
    }
    if (this.floating) {
      this.float();
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

  float() {
    let moveLeft = createVector(6, 0);
    let moveRight = createVector(-6, 0);
    this.origin.add(moveLeft);
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
    let displayX = Math.floor(this.origin.x);
    let displayY = Math.floor(this.origin.y);
    // text("x: " + displayX + " y: " + displayY, this.pos.x + 5, this.pos.y - 5);
    ellipse(0, 0, this.radius);
    pop();
  }
}