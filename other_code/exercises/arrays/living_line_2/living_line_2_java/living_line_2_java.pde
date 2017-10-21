//Exercises: Arrays
//Living Line 2

int xPos[]= new int[100];
int yPos[]= new int[100];

int p=0;

void setup() {
  size(400, 400);
  background(255);
}

void draw() {
  background(255);
  fill(255, 0, 0);
  
   for (int i=0; i<99; i++) { 
    line(xPos[i], yPos[i], xPos[i+1], yPos[i+1]); //draw line for all the points on the array
   }
   
  ellipse(xPos[p], yPos[p], 20, 20); //draw ellipse

  if (p<xPos.length-1) { //change variable that detirmines ellipse position
    p++;
  } else {
    p=0;
  }
}

void mouseMoved() {

  for (int i=0; i<99; i++) { //only change arrays if mouse moved
    line(xPos[i], yPos[i], xPos[i+1], yPos[i+1]); 
    xPos[i]=xPos[i+1]; //move each value along the array
    yPos[i]=yPos[i+1]; //move each value along the array
  }
  xPos[99]=mouseX; //add new value to the end of the array
  yPos[99]=mouseY; //add new value to the end of the array
}