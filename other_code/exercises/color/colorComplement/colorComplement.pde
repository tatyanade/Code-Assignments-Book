float r;
void setup() {
size(400,400);
  colorMode(HSB);
  noStroke();
}

void draw() {

  r = map(mouseX, 0, width, 0, 255);
  fill(r, 255, 255);

  rect(0, 0, width/2, height);

  fill(255/2-r, 255, 255);

  rect(width/2, 0, width, height);
}

void mousePressed(){
 saveFrame(
 );
 
}