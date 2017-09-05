// Geometric Progression

void setup() {
  size(800, 800);
  smooth(); 
}

void draw() {
  background(255);
  stroke(0); 
  noFill();
  
  float constantFactor = 1.315;
  float circleSize = 20; 
  
  for (int i=1; i<20; i++) {
    strokeWeight(circleSize/25.0); 
    ellipse(width/2,height, circleSize, circleSize);
    circleSize = circleSize * constantFactor; 
  }
}

void keyPressed(){
  if (key == 's'){
    saveFrame("../geometric_progression.png"); 
  }
}