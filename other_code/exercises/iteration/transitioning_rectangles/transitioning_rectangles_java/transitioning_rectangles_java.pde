// Rectangle Sequence 

void setup() {
  size(400, 400); 
  noSmooth();
}

void draw() {
  background (255); 
  strokeWeight (2);
  stroke(0); 

  int nRectangles = 14;
  for (int i=0; i<nRectangles; i++) {
    float x0 = 25 + i * 25;
    float y0 = height-25; 
    float rectH = (i+1) * 25;
    fill (i* (255.0/nRectangles));
    rect (x0, y0, 25, -rectH);
  }
}

void keyPressed() {
  saveFrame("../rectangle_sequence.png"); 
  exit();
}