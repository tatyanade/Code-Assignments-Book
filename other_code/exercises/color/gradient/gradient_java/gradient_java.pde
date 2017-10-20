//Exercises: Color 
//Color Gradient

void setup() {
  size(400, 400);
  colorMode(HSB);
  
  for (int x=0; x<width; x++) { //draw a line at each x value
    stroke(x*255/400, 255, 255);
    line(x, 0, x, height);
  }
}


void draw() {
}

void mousePressed() {
  saveFrame("../gradient.png");
}