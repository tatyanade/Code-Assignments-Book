// Rectangle Sequence 

void setup() {
  size(400, 400); 
  noSmooth();
}

void draw() {
  background (255); 
  strokeWeight (2);

  //sets the number of rectangles being drawn
  int nRectangles = 14;
  for (int i=0; i<nRectangles; i++) {
    //finds the x and y value of current rectangle
    float x0 = 25 + i * 25;
    float y0 = height-25; 
    
    //rectangle height increases by 25
    float rectH = (i+1) * 25;
    //creates a color gradient by making color dependent on i
    fill (i* (255.0/nRectangles));
    //draws the rectangles 
    rect (x0, y0, 25, -rectH);
  }
}

void keyPressed() {
  saveFrame("../rectangle_sequence.png"); 
  exit();
}