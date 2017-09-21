// Geometric Progression

function setup() {
  createCanvas(800, 800);
  smooth(); 
}

function draw() {
  background(255);
  stroke(0); 
  noFill();
  
  var constantFactor = 1.315;
  var circleSize = 20; 
  
  for (var i=1; i<20; i++) {
    strokeWeight(circleSize/25.0); 
    ellipse(width/2,height, circleSize, circleSize);
    circleSize = circleSize * constantFactor; 
  }
}
