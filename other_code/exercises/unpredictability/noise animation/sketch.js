var xPos = 0.0;
var yPos = 0.0;
var dDif = 0.0;

function setup(){
  createCanvas(300,300);
  noStroke();
}

function draw() {
  background(100);
  xPos = xPos + .01;
  yPos = yPos + .02;
  dDif = dDif + .01;
  var x = noise(xPos) * width;
  var y = noise(yPos) * height;
  var diameter = noise(dDif) * 20 + 5;
  ellipse(x, y, diameter);
}