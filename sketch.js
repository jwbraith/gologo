let x, y;
let delta = 5;
let toon1 = [];
let bullets = [];
let stars = [];
let formation;

// make a squadron array to hold all the toons. this can be selected from to start the bombing runs, the conditional written around the squadron being of length 'full'
let squadron = [];

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
    toon1.push(new Enemy(20 - (i * 12), 280 + (i * 18), 6));
  }
  squadron.push(toon1);
  console.log(squadron);
  //create the stars
  for (let i = 5; i < width; i += 20) {
    for (let j = 5; j < height; j += 20) {
      stroke(random(155));
      if (random() < 0.25) {
        stars.push(new Star(i + random(15), j + random(15)));
      }
    }
  }
  formation = new Formation();
  x = width / 2;
  y = 280;
}

function draw() {
  background(0);
  stroke(255);
  // console.log(`The frame count is ${frameCount}`);
  // animating the stars
  stars.forEach(star => {
    star.update();
    star.show();
  });

  // animating the enemies
  for (let i = 0; i < toon1.length; i++) {
    if (frameCount > 420) {
      toon1[i].attack();
    } else {
      toon1[i].update(formation.toonC[i].x, formation.toonC[i].y, formation.posX, formation.posY);
    }
    toon1[i].show();
  }

  // animating the hidden formation
  formation.update();
  // formation.show();

  //animating what is currently just a player rect
  rect(x, y, 6, 6);

  // animating bullets
  bullets.forEach(bullet => {
    bullet.update();
    bullet.show();
  });

  // movement keys
  if (y > 260 && keyIsDown(87)) {
    y -= delta;
  }
  if (y < height && keyIsDown(83)) {
    y += delta;
  }
  if (x > 0 && keyIsDown(65)) {
    x -= delta;
  }
  if (x < width && keyIsDown(68)) {
    x += delta;
  }

  // tracking whether bullets have gone offscreen and deleting them
  if (bullets.length > 0) {
    for (let i = bullets.length - 1; i > 0; i--) {
      if (bullets[i].pos.y < 0 || bullets[i].pos.y > 300) {
        bullets.splice(bullets[i], 1);
      }
    }
  }
  console.log(bullets.length);

  //continuous shooting
  if (keyIsDown(32) && frameCount % 6 == 0) {
    let bullet = new Bullet(x, y);
    bullets.push(bullet);
  }
}


// deliberate shooting
function keyPressed() {
  if (key === " ") {
    let bullet = new Bullet(x, y);
    bullets.push(bullet);
  }
}

