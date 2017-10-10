PImage img;

void setup() {
  size(300, 300);
  background(255);
  stroke(0, 200);
  img = loadImage("cursor1.png");
}

void draw() {
  //makes strokeWeight dependent on horizontal velocity
  strokeWeight(abs((pmouseX-mouseX)/2));
  if (mousePressed) {
    //draws line from previouse point to current mousex,mousey
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

void mouseReleased() {
  image(img, mouseX, mouseY, 2*12, 2*19);
  saveFrame("output.png");
}