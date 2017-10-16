// Program which flips a coin whenever the user clicks the mouse. 

float myRandomValue;

void setup() {
  size(240, 240);
  textAlign(CENTER, CENTER);
  textSize(80);
  
  myRandomValue = random(1.0);
}


void draw() {
  background(255);
  
  noStroke();
  fill(100); 
  ellipse(width/2+6, height/2+1, 120,120);
  fill(170);
  ellipse(width/2, height/2, 120,120);
  
  String theDisplayString = "";
  if (myRandomValue < 0.5) {
    theDisplayString = "T";
  } else {
    theDisplayString = "H";
  }
 
  fill(110);
  text(theDisplayString, width/2-2, height/2-9);
  fill(255,200);
  text(theDisplayString, width/2, height/2-7);
}



void mousePressed() {
  myRandomValue = random(1.0);
}

void keyPressed() {
  saveFrame("../coin_toss.png");
}