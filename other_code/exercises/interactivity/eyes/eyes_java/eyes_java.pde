// Exercises: Interactivity
// Eyese Following Cursor

PImage img;

void setup() {
  size(300, 300);
  noStroke();
  smooth();
  //noLoop();
  img = loadImage("cursor1.png");
}

void draw() {

  pushMatrix();
  scale(3);
  fill(255);
  ellipse(50, 50, 60, 60); // White circle
  float ex = map(mouseX, 0, width, 30, 50);
  float ey = map(mouseY, height, 0, 60, 40);

  pupil(ex, ey);
  popMatrix();
}

void pupil(float x, float y) {
  fill(0);
  ellipse(x+10, y, 30, 30); // Black circle
  fill(255);
  ellipse(x+16, y-5, 6, 6); // Small, white circle
}

void keyPressed() {
  image(img, mouseX, mouseY, 12*2, 19*2);
  saveFrame("../eyese.png");
}