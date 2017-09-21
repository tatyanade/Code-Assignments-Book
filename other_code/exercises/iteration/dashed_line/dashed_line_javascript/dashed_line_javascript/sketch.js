// var Bar Gradient

/*
Using iteration, generate a gradient that varerpolates 
from one fill var to another across exactly 17 rectangles. 
You may find it helpful to learn about your environment’s lerp() 
function. Implement some code that randomizes the two end-vars 
whenever the user clicks the mouse.
*/

var nRectangles = 17; 
var varA;
var varB;

function setup() {
  createCanvas(400, 400);
  varA = color(255,255,0)
  varB = color(255, 0, 255);
}


function draw() {
  background(255);
  rectMode(CENTER); 
  noStroke(); 
  
  for (var i=0; i<nRectangles; i=i+1) {
    var fraction = i/(nRectangles-1);
    var aBarvar = lerpColor(varA, varB, fraction);
    var barX = map(i, 0,nRectangles-1, 25,width-25); 
    
    fill(aBarvar);
    rect(barX, height/2, 20,360);
  }
}

function mousePressed() {
  varA = color(random(0, 255), random(0, 255), random(0, 255));
  varB = color(random(0, 255), random(0, 255), random(0, 255));
}

