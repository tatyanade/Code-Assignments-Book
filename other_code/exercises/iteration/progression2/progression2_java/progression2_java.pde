color c;
color d;
color p;
void setup() {
  size(430, 430);
  noFill();
  ellipseMode(CORNER);
  smooth();
  c = color(198, 2, 61);
  d = color(22, 0, 15);
  stroke(c);
  noLoop();
}

void draw() {
  background(255);
  float j=0.3;
  for (int k=10; k<130; k=k+15)  {
    float g= k/130.0;
    p=lerpColor(c, d, g);
    println(g);
    stroke(p);

    for (int i =0; i<15; i=i+3) { 
      j=j*2.2;
      arch(j, 0+i*31, 10+k*3.5);
    }
    j=1;
  }
  save("progression2.jpg");
}

void arch(float curvature, float x, float y) {
  strokeWeight(4);
  noFill();
  beginShape();
  smooth();
  vertex(x, y);
  bezierVertex(x-curvature, y-curvature, x+15.0, y-35.0, x+55.0, y-35.0);
  endShape();
}