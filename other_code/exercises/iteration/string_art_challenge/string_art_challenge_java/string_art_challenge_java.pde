void setup() {
  size(400, 400); 
  smooth();
}

void draw() {
  background (255); 
  strokeWeight (1.5); 

  //sets amount of lines being drawn
  int nLines = 7;
  //sets margin
  float margin = 50; 
  
  for (int i=0; i<=nLines; i++) {
    //line always starts with the same x value
    float x0 = margin; 
    //line always ends with the same y value
    float y1 = height - margin; 
    //makes the lines starting y values equidistant
    float y0 = map(i, 0, nLines, margin, height-margin);
    float x1 = y0; 
    line (x0, y0, x1, y1);
  }
}

void mousePressed() {
  saveFrame("string_art_simple.png"); 
  exit();
}