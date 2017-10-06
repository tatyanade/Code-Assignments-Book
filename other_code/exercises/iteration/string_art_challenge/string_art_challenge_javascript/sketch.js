function setup() {
  createCanvas(400,400);
  smooth();
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(1.5);
  
  //sets amount of lines being drawn
  var nLines = 7;
  //sets margin
  var margin = 50;
  
  for(var i =0; i<=7; i++){
  	//line always starts with the same x value
    var x0 = margin;
    //line always ends with the same y value
    var y0 = map(i, 0, nLines, margin, height-margin);
    //makes the lines starting y values equidistant
    var y1 = height - margin;
    var x1 = y0;
    line(x0, y0, x1, y1);
  }
}