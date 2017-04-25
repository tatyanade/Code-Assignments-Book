
void setup() {
  size(300, 300);
  smooth();
  background(255);
  fill(252, 186, 273);
  noStroke();

  bezier(70, 128, 50, 226, 150, 233, 170, 186 );

  bezier(170, 186, 190, 233, 290, 226, 270, 128);

  beginShape();
  vertex(70, 129);
  vertex(170, 187);
  vertex(270, 129);
  vertex(260, 0);
  vertex(80, 0);

  endShape();
}

//--------------------------------------------------
void draw() {
}

//--------------------------------------------------
void mousePressed() {
  //curveMode = 1 - curveMode;
  saveFrame();
}