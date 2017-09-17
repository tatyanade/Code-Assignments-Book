function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0); 
  for (var x=0; x<width; x++) {
    var r = map(x, 0,width, 255,0);
    var g = map(x, 0,width, 0,200);
    var b = map(x, 0,width, 0,255);

    stroke(r,g,b);
    line(x, 0, x, height);
  }
}