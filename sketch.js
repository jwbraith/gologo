let x, y;
let delta = 5;

function setup() {
  pixelDensity(1);
  var cnv = createCanvas(300, 300);
  cnv.parent('sketch');
  background(0);
  rectMode(CENTER);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);
  stroke(255);
  rect(x, y, 1, 1);
  if (y > 0 && keyIsDown(UP_ARROW)) {
    y -= delta;
  }
  if (y < height && keyIsDown(DOWN_ARROW)) {
    y += delta;
  }
  if (x > 0 && keyIsDown(LEFT_ARROW)) {
    x -= delta;
  }
  if (x < width && keyIsDown(RIGHT_ARROW)) {
    x += delta;
  }
}