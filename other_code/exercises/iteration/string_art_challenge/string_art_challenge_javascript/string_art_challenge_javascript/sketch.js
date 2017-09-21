function setup() {
  createCanvas(400,400);
  smooth();
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(1.5);
  
  var nLines = 7;
  var margin = 50;
  
  for(var i =0; i<=7; i++){
    var x0 = margin;
    var y0 = map(i, 0, nLines, margin, height-margin);
    var y1 = height - margin;
    var x1 = y0;
    line(x0, y0, x1, y1);
  }
}