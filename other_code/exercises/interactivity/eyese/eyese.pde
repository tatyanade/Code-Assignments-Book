
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
  fill(0);
  ellipse(50+10, 50, 30, 30); // Black circle
  fill(255);
  ellipse(50+16, 45, 6, 6); // Small, white circle
  popMatrix();
}

void keyPressed() {
  image(img, mouseX, mouseY, 12*2, 19*2);
  saveFrame();
}