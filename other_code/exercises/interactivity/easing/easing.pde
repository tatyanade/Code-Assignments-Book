float mx, my; 
PImage img;

void setup() {
  size(400,400);
  noStroke();
  img=loadImage("cursor1.png");
}

void draw() {
  background(200); 
  ellipse(mx, my, 30, 30);
  mx = 0.95*mx + 0.05*mouseX; 
  my = 0.95*my + 0.05*mouseY; 
  image(img,mouseX,mouseY,12*2,19*2);
}

void keyPressed(){
 saveFrame(); 
}