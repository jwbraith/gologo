class EnemyLeftTop {
  constructor(x, y, r, endX, endY) {
    this.origin = createVector(x, y);
    this.vel = createVector(0.2, 1.8);
    this.pos = createVector(0, 0);
    // this.endPos = createVector(endX, endY);
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
  // the flight behaviour needs to be based on three parts in sequence: flight to rotation, then rotation, then flight to formation

  update(endPosX, endPosY, offsetX, offsetY) {
    let endPos = createVector(endPosX + offsetX, endPosY + offsetY);
    if (this.flying) {
      if (this.origin.y < 200) {
        this.forward();
      } else {
        if (this.angX > -480) {
          this.loopDeLoop();
        } else if (this.origin.y > 110) {
          this.forward();
        } else {
          if (this.origin.dist(endPos) < 0.5) {
            this.flying = false;
            this.floating = true;
          } else {
            this.fallIn(endPos);
          }
        }
      }
    }
    if (this.floating) {
      this.float(endPos);
    }

  }

  loopDeLoop() {
    this.angX -= 3;
    this.angY -= 3;
  }

  forward() {
    this.origin.add(this.vel);
  }

  fallIn(endPos) {
    this.origin = p5.Vector.lerp(this.origin, endPos, 0.05);
    if (this.mag > 0) {
      this.mag--;
    }
  }

  float(endPos) {
    this.origin = p5.Vector.lerp(this.origin, endPos, 1.0);
  }

  attack() {
    let attackDir = createVector(0, 2);
    this.origin.add(attackDir);
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
    // ellipse(0, 0, this.radius);
    pop();
  }
}