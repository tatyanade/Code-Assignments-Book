float r=0;
float v=0;

int w = 20;

void setup() {
  size(300,300);
  smooth();
  noLoop();
}

void draw() {
  background(255);
  smooth();
  noFill();

  //draws a grid of squares that become progressivley randomly rotated
  for (int y=w; y<height-w; y=y+w) {
    for (int x=w; x<width-w; x=x+w) {
      pushMatrix(); 
      r=random(-v, v);
      translate(x+w/2, y+w/2);
      rotate(r);
      rect(-w/2,-w/2, w, w); 
      popMatrix();
    }
    v=v+0.05;
  }
}