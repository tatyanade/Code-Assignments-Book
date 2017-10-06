function setup() {
  createCanvas(400, 400);
  smooth();
}

function draw() {
  background(30);
  for (var x=0; x<7; x=x+1) {
    for (var y=0; y<8; y=y+1) {
      //calls the arrow function that we have defined below
      arrow(x*57+6, y*50+25);
    }
  }
}

//this defines the arrow function
function arrow(x, y) {
  //this draws an arrow, relative to any given x and y value
  strokeWeight(4);
  stroke(255, 0, 255);
  line(x+20, y+20, x, y); 
  line(x+20, y-20, x, y); 
  line(x, y, x+45, y);
}