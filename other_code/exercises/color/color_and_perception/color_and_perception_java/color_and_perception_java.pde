void setup() {
  size(400, 400);
}

void draw() {
  noStroke();
  
  fill(255, 0, 0);
  rect(0, 0, width/2, height);
  fill(235, 0, 0);
  rect(width/2, 0, width, height);
}

void keyPressed() {
  saveFrame("../color_and_perception.png");
}