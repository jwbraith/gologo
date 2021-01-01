let x, y;
let delta = 5;
let toon1 = [];
let bullets = [];
let formation;

let numInToon = 4;

function setup() {
  // pixelDensity(1);
  var cnv = createCanvas(300, 300);
  cnv.parent('sketch');
  background(0);
  rectMode(CENTER);
  angleMode(DEGREES);
  enemy = new Enemy(0, 280, 6);
  for (let i = 0; i < numInToon; i++) {
    toon1.push(new Enemy(20 - (i * 20), 280 + (i * 30), 6, i * 20, 65));
  }
  formation = new Formation();
  x = width / 2;
  y = 280;
}

function draw() {
  background(0);
  stroke(255);

  for (let i = 0; i < toon1.length; i++) {
    toon1[i].update(formation.toonA[i].x, formation.toonA[i].y, formation.posX, formation.posY);
    toon1[i].show();

  }
  formation.update();
  formation.show();
  rect(x, y, 6, 6);

  bullets.forEach(bullet => {
    bullet.update();
    bullet.show();
  });
  if (y > 260 && keyIsDown(UP_ARROW)) {
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

function keyPressed() {
  if (key === " ") {
    let bullet = new Bullet(x, y);
    bullets.push(bullet);
  }
}