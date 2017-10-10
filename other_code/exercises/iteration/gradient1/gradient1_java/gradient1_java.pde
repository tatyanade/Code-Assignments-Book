void setup() {
  size(400, 400);
}

void draw() {
  background(0); 
  for (int x=0; x<width; x++) {
    //maps color values from full range of value to pixels available, creating a smooth and full transition
    float r = map(x, 0,width, 255,0);
    float g = map(x, 0,width, 0,200);
    float b = map(x, 0,width, 0,255);

    //draws a line that has the specific rgb value
    stroke(r,g,b);
    line(x, 0, x, height);
  }
}

void keyPressed() {
  save("gradient.jpg");
}