void setup() {
  size(300, 300);
}

void draw() {
  background(255, 200, 200);
  fill(255, 255, 255, 64);
  int nPoints = 20;
  float radius = 100;
  float separation = 125;

  // draw the circle normally
  pushMatrix();
  translate(width/2, height / 2);
  beginShape();
  for (int i = 0; i < nPoints; i++) {
    float theta = map(i, 0, nPoints, 0, TWO_PI);
    float px = radius * cos(theta);
    float py = radius * sin(theta);
    vertex(px, py); 
    ellipse(px, py, 3, 3);
  }
  endShape(CLOSE);
  popMatrix();
}
void mousePressed() {
  saveFrame();
}