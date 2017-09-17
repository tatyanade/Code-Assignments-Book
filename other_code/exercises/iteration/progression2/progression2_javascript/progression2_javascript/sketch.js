var c;
var d;
var p;

function setup() {
  createCanvas(430, 430);
  noFill();
  ellipseMode(CORNER);
  smooth();
  c = color(198, 2, 61);
  d = color(22, 0, 15);
  stroke(c);
  noLoop();
}



function draw() {
  background(255);
  var j=0.3;
  for (var k=10; k<130; k=k+15)  {
    var g= k/130.0;
    p=lerpColor(c, d, g);
    //prvarln(g);
    stroke(p);
    for (var i =0; i<15; i=i+3) { 
      j=j*2.2;
      arch(j, 0+i*31, 10+k*3.5);
    }
    j=1;
  }
}

function arch(curvature, x, y) {
  strokeWeight(4);
  noFill();
  beginShape();
  smooth();
  vertex(x, y);
  bezierVertex(x-curvature, y-curvature, x+15.0, y-35.0, x+55.0, y-35.0);
  endShape();
}