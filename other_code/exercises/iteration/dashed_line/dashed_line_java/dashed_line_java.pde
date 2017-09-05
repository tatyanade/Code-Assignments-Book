// Dashed line
PImage cursorImage; 

void setup() {
  size(400, 400);
  cursorImage = loadImage("cursor.png"); 
  smooth(); 
}

void draw() {
  background(255); 

  float x0 = width * 0.75;
  float y0 = height * 0.25;
  float x1 = mouseX;
  float y1 = mouseY; 

  float dashLength = 50.0; 
  float lineLength = dist(x0, y0, x1, y1); 
  float nDashesf = (lineLength / dashLength);

  stroke(0); 
  strokeWeight(3.0);
  ellipse(x0, y0, 5, 5); 

  for (int i=0; i<nDashesf; i++) {
    float percentA = map(i+0.0, 0, nDashesf, 0, 1);
    float percentB = map(min(i+0.6, nDashesf), 0, nDashesf, 0, 1);

    float dashXa = map(percentA, 0, 1, x0, x1); 
    float dashYa = map(percentA, 0, 1, y0, y1);
    float dashXb = map(percentB, 0, 1, x0, x1); 
    float dashYb = map(percentB, 0, 1, y0, y1);

    line (dashXa, dashYa, dashXb, dashYb);
  }
  
  image(cursorImage, mouseX,mouseY,12*2,19*2); 
}

void keyPressed() {
  if (key == 's') {
    save("../dashed_line.png");
  }
}