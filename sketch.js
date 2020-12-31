let x, y;
let delta = 5;
let toon1 = [];

let numInToon = 8;

function setup() {
  pixelDensity(1);
  var cnv = createCanvas(300, 300);
  cnv.parent('sketch');
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  enemy = new Enemy(0, 280, 6);
  for (let i = 0; i < numInToon; i++) {
    toon1.push(new Enemy(20 - (i * 10), 280 + (i * 30), 6, i * 20, 65));
  }
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);
  stroke(255);
  toon1.forEach(nme => {
    nme.update();
    nme.show();
  });
  rect(x, y, 20, 20);
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