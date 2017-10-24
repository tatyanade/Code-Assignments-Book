// Exercises: Arrays
// Living Line 1

PImage cursorImg;
int nPoints = 100;
int xPos[]; 
int yPos[]; 

void setup() {
  size(400, 400);
  background(255);
  cursorImg = loadImage("cursor1.png");

  xPos = new int[nPoints];
  yPos = new int[nPoints];
}

void draw() {
  background(255);
  stroke(0, 0, 0); 
  strokeWeight(2); 
  
  xPos[nPoints-1]=mouseX; // add new value to the end of the array
  yPos[nPoints-1]=mouseY; // add new value to the end of the array
  for (int i=0; i<(nPoints-1); i++) {
    line(xPos[i], yPos[i], xPos[i+1], yPos[i+1]); 
    xPos[i]=xPos[i+1]; // move each value along the array
    yPos[i]=yPos[i+1]; // move each value along the array
  }

  // draw the cursor (for screenshots only)
  image(cursorImg, mouseX, mouseY, 12*2, 19*2);
}


void keyPressed() {
  saveFrame("../livingline.png");
}