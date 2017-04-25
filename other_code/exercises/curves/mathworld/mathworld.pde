int nPoints = 100;
int EPITROCHOID = 0; // Cartesian Parametric Form  [x=f(t), y=g(t)]
int CRANIOID = 1; // Polar explicit form   [r =f(t)]

String[] titles = {"1. Epitrochoid", "2. Cranioid"};
int curveMode = 0;
PImage img;

//--------------------------------------------------
void setup() {
  size(300, 300);
  smooth();
  img = loadImage("cursor1.png");
}

//--------------------------------------------------
void draw() {
  background(255);

  // draw the frame
  fill(0); 
  noStroke();
  text(titles[curveMode], 20, 40);
  stroke(0);
  noFill(); 
  rect(0,0, width-1, height-1); 

  // draw the curve
  pushMatrix();
  translate(width / 2, height / 2);
  switch (curveMode) {
    case 0:
      drawEpitrochoidCurve();
      break;
    case 1:
      drawCranioidCurve();
      break;
  }
  popMatrix();
  image(img,mouseX,mouseY+55,12*2,19*2);
}

//--------------------------------------------------
void drawEpitrochoidCurve() {
  // Epicycloid:
  // http://mathworld.wolfram.com/Epicycloid.html

  float x;
  float y;

  float a = 60.0;
  float b = a / 2.0;
  float h = constrain(mouseY / 8.0, 0, b);
  float ph = mouseX / 50.0;

  fill(255, 200, 200);
  beginShape();
  for (int i = 0; i < nPoints; i++) {
    float t = map(i, 0, nPoints, 0, TWO_PI);

    x = (a + b) * cos(t) - h * cos(ph + t * (a + b) / b);
    y = (a + b) * sin(t) - h * sin(ph + t * (a + b) / b);
    vertex(x, y);
  }
  endShape(CLOSE);

}

//--------------------------------------------------
void drawCranioidCurve() {
  // http://mathworld.wolfram.com/Cranioid.html

  // NOTE: given a curve in the polar form  r = f(theta),
  // 1. sweep theta from 0...TWO_PI,
  // 2. then compute r as a function of theta,
  // 3. then compute x and y using the circular identity:
  //    x = r * cos(theta);
  //    y = r * sin(theta);

  float x;
  float y;
  float r;
  float a = 30.0;
  float b = 8.0;
  float c = 75.0;

  float p = constrain((mouseX / width), 0.0, 1.0);
  float q = constrain((mouseY / height), 0.0, 1.0);

  fill(200, 200, 255);
  beginShape();
  for (int i = 0; i < nPoints; i++) {
    float t = map(i, 0, nPoints, 0, TWO_PI);

    // cranioid:
    r =
      a * sin(t) +
      b * sqrt(1.0 - p * sq(cos(t))) +
      c * sqrt(1.0 - q * sq(cos(t)));

    x = r * cos(t);
    y = r * sin(t);
    vertex(x, y);
  }
  endShape(CLOSE);
}

//--------------------------------------------------
void mousePressed() {
  curveMode = 1 - curveMode;
    saveFrame();
}