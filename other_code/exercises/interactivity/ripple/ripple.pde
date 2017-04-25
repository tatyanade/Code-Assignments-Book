Ring[] rings; // Declare the array
int numRings = 50;
int currentRing = 0;
PImage cursor;

void setup() {
  size(300, 300);
  smooth();
  rings = new Ring[numRings]; // Create the array
  for (int i = 0; i < numRings; i++) {
    rings[i] = new Ring(); // Create each object
    
  }
  cursor= loadImage("cursor1.png");
}
void draw() {
  background(251,128,114);
  for (int i = 0; i < numRings; i++) {
    rings[i].grow();
    rings[i].display();
  }
  image(cursor,mouseX,mouseY,12*2,2*19);
}
// Click to create a new Ring
void mousePressed() {
  rings[currentRing].start(mouseX, mouseY);
  currentRing++;
  if (currentRing >= numRings) {
    currentRing = 0;
  }
}

class Ring {
  float x, y; // X-coordinate, y-coordinate
  float diameter; // Diameter of the ring
  boolean on = false; // Turns the display on and off
  void start(float xpos, float ypos) {
    x = xpos;
    y = ypos;
    on = true;
    diameter = 1;
  }
  void grow() {
    if (on == true) {
      diameter += 0.5;
      if (diameter > 400) {
        on = false;
      }
    }
  }
  void display() {
    if (on == true) {
      noFill();
      strokeWeight(4);
      stroke(255, 153);
      ellipse(x, y, diameter, diameter);
    }
  }
}

void keyPressed(){
 saveFrame(); 
}