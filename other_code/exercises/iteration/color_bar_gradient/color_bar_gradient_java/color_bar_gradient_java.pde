// Color Bar Gradient

/*
Using iteration, generate a gradient that interpolates 
from one fill color to another across exactly 17 rectangles. 
You may find it helpful to learn about your environment’s lerp() 
function. Implement some code that randomizes the two end-colors 
whenever the user clicks the mouse.
*/

int nRectangles = 17; 
color colorA = color(255, 255, 0);
color colorB = color(255, 0, 255);

void setup() {
  size(400, 400);
}


void draw() {
  background(255);
  rectMode(CENTER); 
  noStroke(); 
  
  for (int i=0; i<nRectangles; i=i+1) {
    //finds the different color values for each rectangle in order to create an even gradient
    float fraction = float(i)/(nRectangles-1);
    color aBarColor = lerpColor(colorA, colorB, fraction);
    float barX = map(i, 0,nRectangles-1, 25,width-25); 
    
    //changes fill to the proper color and draws rectangle
    fill(aBarColor);
    rect(barX, height/2, height*.05, height*.9);
  }
}

void mousePressed() {
  //changes colors when mouse is pressed
  colorA = color(random(0, 255), random(0, 255), random(0, 255));
  colorB = color(random(0, 255), random(0, 255), random(0, 255));
}

void keyPressed(){
  if (key == 's'){
    save("../color_bar_gradient.png");
  }
}