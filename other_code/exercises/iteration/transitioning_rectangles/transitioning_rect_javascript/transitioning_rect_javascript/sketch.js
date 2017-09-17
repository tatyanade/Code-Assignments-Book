function setup() {
  createCanvas(400,400);
  noSmooth();
}

function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);

  var nRectangles = 14;
  for (var i = 0; i < nRectangles; i++){
    var x0 = 25 + i*25;
    var y0 = height-25;
    var rectH = (i+1)*25;
    fill(i*(255.0/nRectangles));
    rect(x0,y0,25,-rectH);
  }
}