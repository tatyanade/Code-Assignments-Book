var r = 0;
var v = 0;
var w = 20;

function setup() {
  createCanvas(300,300);
  smooth();
  noLoop();
}

function draw() {
  background(255);
  smooth();
  noFill();

  //draws a grid of squares that become progressivley randomly rotated
  for (var y=w; y<height-w; y=y+w) {
    for (var x=w; x<width-w; x=x+w) {
      push(); 
      r=random(-v, v);
      translate(x+w/2, y+w/2);
      rotate(r);
      rect(-w/2,-w/2, w, w); 
      pop();
    }
    v=v+0.05;
  }
}