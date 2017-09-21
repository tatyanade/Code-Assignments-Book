PImage img;

void setup() {
  size(300, 300);
  background(255);
  stroke(0, 200);
  img = loadImage("cursor1.png");
}

void draw() {
  strokeWeight(abs((pmouseX-mouseX)/2));
  if (mousePressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

void mouseReleased() {
  image(img, mouseX, mouseY, 2*12, 2*19);
  saveFrame("output.png");
}