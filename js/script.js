let hero;
let healthpack;
let enemy;
let x = 2;
let dx = 5;
let y = 2;
let dy = 5;
let hx = 400;
let hy = 100;
let ex = -10;
let ey = -10;
let dex = 1;
let dey = 1;
let c = 0;
let raz = 100;
let lose = 0;
let health = 0;
let dhealth = 0;
let dmg = 0;
let boost = 0;

function setup() {
  createCanvas(800, 800);
}

function preload() {
  // preload() runs once
  hero = loadImage("hero.png");
  healthpack = loadImage("healthpack.png");
  enemy = loadImage("enemy.png");
}

function draw() {
  background("#FFFFFF");
  hero.resize(0, raz);
  image(hero, x, y);
  healthpack.resize(0, 30);
  image(healthpack, hx, hy);
  if (x > hx - 50 && x < hx + 100) {
    if (y > hy - 100 && y < hy + 50) {
      hx = random(100, 700);
      hy = random(100, 700);
      c = c + 1;
      raz = raz + 10;
      dhealth = dhealth + 1;
    }
  } //Food
  textSize(20);
  text("ОЗ", 50, 695);
  if (health <= 25) {
    fill("#FF0303");
  }
  rect(50, 700, health, 20); //healthbar
  health = 100 - millis() / 1000 - dmg + dhealth; // healthbar engine
  if (health > 100) {
    health = 100;
  }
  if (health <= 0) {
    health = 0;
  }
  if (health == 0) {
    x = 4000;
    y = 4000;
    lose = 1;
    health = 0;
  } //lose
  fill(0);
  textSize(30);
  text("Счет: ", 650, 50);
  text(c, 740, 50);
  if (c > 1) {
    image(enemy, ex, ey);
  } else {
    ex = -1000;
    ey = -1000;
    if (c > 9) {
      boost = 2;
    }
  } //enemy engine
  if (c >= 15) {
    c = 15;
    ex = 4000;
    ey = 4000;
    health = 100;
    textSize(100);
    text("WIN!", 300, 400);
  }
  if (ex < 0 || ex > width) {
    ex = -ex;
  }
  if (ey < 0 || ey > height - 10) {
    ey = -ey;
  }
  if (ex < x) {
    ex = ex + dex + boost;
  }
  if (ey < y) {
    ey = ey + dey + boost;
  }
  if (ex > x) {
    ex = ex - dex - boost;
  }
  if (ey > y) {
    ey = ey - dey - boost;
  }
  if (ey - 30 <= y + 10 && ey + 30 >= y - 10) {
    if (ex + 30 >= x - 10 && ex - 30 <= x + 10) {
      dmg = dmg + 1;
    }
  } else {
    dmg = 0;
  } //x = 4000; y = 4000; lose = 1;}} lose #2
  if (lose == 1) {
    textSize(30);
    text("Игра окончена", 250, 55);
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  }
  if (keyCode == LEFT_ARROW) {
    x = x - dx;
  }
  if (keyCode == UP_ARROW) {
    y = y - dy;
  }
  if (keyCode == DOWN_ARROW) {
    y = y + dy;
  }
}
