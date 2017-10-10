function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0); 
  for (var x=0; x<width; x++) {
  	//maps color values from full range of value to pixels available, creating a smooth and full transition
    var r = map(x, 0,width, 255,0);
    var g = map(x, 0,width, 0,200);
    var b = map(x, 0,width, 0,255);

    //draws a line that has the specific rgb value
    stroke(r,g,b);
    line(x, 0, x, height);
  }
}