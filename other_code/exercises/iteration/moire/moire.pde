float rot; 

void setup() {
  size(400, 400, FX2D);
  smooth();
  rot = 0;
}

void keyPressed(){
  saveFrame(); 
}

void draw() {
  rot = 0.95*rot + 0.05*(mouseX/100.0); 
  background(255); 
  strokeWeight(2); 
  stroke(0); 

  int nLines = 200; 
  for (int i=0; i<nLines; i++) {
    float x = map(i, 0, nLines, -500, 500); 
    line(x, 0, x, height);
  }

  pushMatrix();
  translate(width/2, height/2); 
  rotate(rot); 
  for (int i=0; i<nLines; i++) {
    float x = map(i, 0, nLines, -500, 500); 
    line(x, -150, x, 150);
  }
  popMatrix();
}