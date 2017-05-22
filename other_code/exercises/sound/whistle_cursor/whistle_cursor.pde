void setup() {
  size(400, 400);
}


void draw() {

  background(40, 45, 55); 

  noStroke(); 
  int nStars = 200; 
  randomSeed(0); 
  for (int i=0; i<nStars; i++) {
    float sy = random(0, height);
    float sx = map(i, 0, nStars, 0, width);
    fill(255, random(220, 255), random(220, 255)); 
    float radius = random(1, 4); 
    ellipse(sx, sy, radius, radius);
  }

  int nBuildings = 9;
  for (int i=0; i<nBuildings; i++) {
    float sy = map(noise(i/15.0+(millis()/5000.0)), 0.1, 0.9, 0.0, height); 
    float sx = map(i, 0, nBuildings, 0, width);
    fill(200); 
    rect(sx, height, (float)width/nBuildings+1, 0-sy); 
    rect(sx, height-sy-120, (float)width/nBuildings+1, -400);
  }

  stroke(0); 
  strokeWeight(4); 
  strokeJoin(MITER); 
  fill(210); 
  triangle(width/2-45, mouseY-20, width/2-35, mouseY+20, width/2+35, mouseY+10);
}

void keyPressed() {
  if (key==' ') {
    saveFrame("whistleCursor.jpg");
  }
}