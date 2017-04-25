int diameter = 200;
void setup() {
  size(300, 300);
  shapeMode(CENTER);
  background(200, 255, 200);
  noFill();
  stroke(100);
  strokeWeight(2);
}

void draw() {
  
  arc(width/2, height/2, diameter, diameter, -1*HALF_PI, HALF_PI);
  diameter = diameter -10;
  translate(0,-5);
  arc(width/2, height/2, diameter, diameter, HALF_PI,2*PI-HALF_PI );
  diameter = diameter -10;
}
void mousePressed() {
  saveFrame();
}