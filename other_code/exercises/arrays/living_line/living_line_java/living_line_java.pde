//Exercises: Arrays
//Living Line 1

int xPos[]= new int[100];
int yPos[]= new int[100];

PImage img;

void setup() {
  size(400, 400);
  background(255);
  img = loadImage("cursor1.png");
}

void draw() {
  background(255);
  image(img, mouseX, mouseY, 30, 50);
  for (int i=0; i<99; i++) {
    line(xPos[i], yPos[i], xPos[i+1], yPos[i+1]); 
    xPos[i]=xPos[i+1]; //move each value along the array
    yPos[i]=yPos[i+1]; //move each value along the array
  }

  xPos[99]=mouseX; //add new value to the end of the array
  yPos[99]=mouseY; //add new value to the end of the array
}


void keyPressed(){
 saveFrame("../livingline.png"); 
}
