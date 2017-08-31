PImage cursorImage; 

void setup() {
  size(400, 400); 
  cursorImage = loadImage("cursor.png"); 
  smooth();
}

void draw() {
  background (255); 

  strokeWeight (2.0);
  stroke(0); 

  int nLines = 10;
  float margin = 50; 
  for (int i=1; i<=nLines; i++) {
    float x0 = map(i, 1,nLines, margin, width-margin); 
    float y0 = margin; 
    line (x0, y0, mouseX, mouseY);
  }
  
  image(cursorImage, mouseX,mouseY,12*2,19*2); 
}

void keyPressed() {
  saveFrame("lines_to_the_cursor.png"); 
  exit();
}