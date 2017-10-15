void setup() {
  size(400, 400);
}

void draw() {
  noStroke();
  
  fill( 60, 130, 235);
  rect(0, 0, width, height);
  fill( 70, 140, 249);
  ellipse(width/2, height/2, width*0.6, height*0.6);
}

void keyPressed() {
  saveFrame("../color_and_perception.png");
}