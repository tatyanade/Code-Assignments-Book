// Overlapping color
// Exercises: Overlapping

void setup() {
  size(400, 400);
  background(255);
  noStroke();
  blendMode(DIFFERENCE);
  
  //colored circles
  fill(0, 0, 255, 100);
  ellipse(200, 250, 200, 200);

  fill(0, 255, 0, 100);
  ellipse(250, 150, 200, 200);

  fill(255, 0, 0, 100);
  ellipse(150, 150, 200, 200);
}

void draw() {
  saveFrame("../overlapping.png");
  stop();
}