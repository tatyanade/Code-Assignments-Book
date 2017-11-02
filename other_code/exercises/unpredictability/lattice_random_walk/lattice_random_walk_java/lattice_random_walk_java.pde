// Lattice Drunk Walk
// Create a sketch in which a small element travels 
// erratically from one moment to the next, 
// leaving a trail as it moves. It should have a 1-in-4 
// chance of moving up, down, left or right.

int prevx;
int prevy;

void setup() {
  size(400,400);
  clearCanvas(); 
}


void clearCanvas(){
  background(255,255,255);
  prevx = width/2;
  prevy = height/2; 
}


void movePoint(){
  int stepSize = 8; // pixels
  int nextx = prevx; 
  int nexty = prevy; 

  //randomly chooses which direction the line will continue in
  int directionChoice = int(random(0,4));
  if (directionChoice == 0){
    nextx += stepSize;
  }
  else if (directionChoice == 1){
    nextx -= stepSize;
  }
  else if (directionChoice == 2){
    nexty -= stepSize;
  }
  else if (directionChoice == 3){
    nexty += stepSize;
  }

  stroke(0,0,0); 
  strokeWeight(2);
  
  //draws line from previous point to new point
  line (prevx,prevy, nextx,nexty);

  //updates variables
  prevx = nextx;
  prevy = nexty; 
}


void draw() {
  movePoint();
}

void mousePressed(){
  clearCanvas(); 
}