let x, y;
let delta = 5;
let enemy;

function setup() {
  pixelDensity(1);
  var cnv = createCanvas(300, 300);
  cnv.parent('sketch');
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  enemy = new Enemy(0, 280, 6);
  x = width / 2;
  y = height / 2;
}

function draw() {
  // background(0);
  stroke(255);
  enemy.update();
  enemy.show();
  for (let a = 0; a < TWO_PI; a++) {
    x = 10 * sin(a);
    y = 10 * cos(a);
  }
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