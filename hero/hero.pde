PImage hero;
PImage healthpack;
PImage enemy;
int x = 2;
int dx = 5;
int y = 2;
int dy = 5;
float hx = 400;
float hy = 100;
int ex = -10;
int ey = -10;
int dex = 1;
int dey = 1;
int c = 0;
int raz = 100;
int lose = 0;
int health;
int dhealth = 0;
int dmg;
int boost = 0;
void setup() { 
  size(800, 800); 
  hero = loadImage("hero.png");
  healthpack = loadImage("healthpack.png");
  enemy = loadImage("enemy.png");
}

void draw() {
  background(#FFFFFF);
  hero.resize(0, raz);
  image(hero, x, y);
  healthpack.resize(0,30);
  image(healthpack, hx, hy);
  if (x > hx - 50 && x < hx + 100) {if (y > hy - 100 && y < hy + 50) {hx = random( 100, 700); hy = random( 100, 700); c = c + 1; raz = raz + 10; dhealth = dhealth + 1;}} //Food
  textSize(20); text("ОЗ", 50, 695);
  if (health <= 25) {fill(#FF0303);}
  rect(50, 700, health, 20); //healthbar
  health = 100 - millis() / 1000 - dmg + dhealth; // healthbar engine
  if (health > 100) {health = 100;}
  if (health <= 0) {health = 0;}
  if (health == 0) {x = 4000; y = 4000; lose = 1; health = 0;} //lose
  fill(0); textSize(30); text("Счет: ", 650, 50); text(c, 740, 50);
  if (c > 1) {image(enemy, ex, ey);} else {ex = -1000; ey = -1000; if (c > 9) {boost = 2;}}//enemy engine
  if (c >= 15) {c = 15; ex = 4000; ey = 4000; health = 100; textSize(100); text("WIN!", 300, 400);}
  if (ex < 0 || ex > width) {ex = - ex;}
  if (ey < 0 || ey > height - 10) {ey = - ey;}
  if (ex < x) {ex = ex + dex + boost;}
  if (ey < y) {ey = ey + dey + boost;}
  if (ex > x) {ex = ex - dex - boost;}
  if (ey > y) {ey = ey - dey - boost;}
  if (ey - 30 <= y + 10 && ey + 30 >= y - 10) {if (ex + 30 >= x - 10 && ex - 30 <= x + 10) {dmg = dmg + 1;}} else {dmg = 0;} //x = 4000; y = 4000; lose = 1;}} lose #2
  if (lose == 1) {textSize(30); text("Игра окончена", 250, 55);}
}

void keyPressed(){
if (keyCode == RIGHT) {x = x + dx;}
if (keyCode == LEFT) {x = x - dx;}
if (keyCode == UP) {y = y - dy;}
if (keyCode == DOWN) {y = y + dy;}}