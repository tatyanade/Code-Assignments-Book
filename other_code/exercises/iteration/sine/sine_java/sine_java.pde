
void setup() {
  size(300, 300);
  background(255);
  noStroke();
  fill(0);
  float angle = 0.0;
  for (int x = 0; x <= width; x += 1) {
    float y = height/2 + (sin(angle) * 35.0);
    rect(x, y, 2, 4);
    angle += PI/40.0;
  }
}

void keyPressed(){
 saveFrame();
 exit();
}