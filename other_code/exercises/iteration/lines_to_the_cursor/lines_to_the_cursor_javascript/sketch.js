function setup() {
  createCanvas(400, 400); 
  smooth();
}

function draw() {
  background (255); 

  strokeWeight (2.0);
  stroke(0); 

  var nLines = 10;
  var margin = 50;
  //draws n lines from equidistant starting points to the cursor location 
  for (var i=1; i<=nLines; i++) {
    var x0 = map(i, 1,nLines, margin, width-margin); 
    var y0 = margin; 
    line(x0, y0, mouseX, mouseY);
  }
}