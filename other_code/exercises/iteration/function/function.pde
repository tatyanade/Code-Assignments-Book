void setup() {
  size(400, 400);
  smooth();
}

void draw() {
  background(30);
  for (int x=0; x<7; x=x+1) {
    for (int y=0; y<8; y=y+1) {
      arrow(x*57+6, y*50+25);
    }
  }
}

void arrow(int x, int y) {
  strokeWeight(4);
  stroke(255, 0, 255);
  line(x+20, y+20, x, y); 
  line(x+20, y-20, x, y); 
  line(x, y, x+45, y);
}

void keyPressed() {
  save("function.jpg");
  stop();
}