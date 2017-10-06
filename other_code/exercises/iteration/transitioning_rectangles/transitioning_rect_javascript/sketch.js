function setup() {
  createCanvas(400,400);
  noSmooth();
}

function draw() {
  background(255);
  strokeWeight(2);

  //sets the number of rectangles being drawn
  var nRectangles = 14;
  for (var i = 0; i < nRectangles; i++){
    //finds the x and y value of current rectangle
    var x0 = 25 + i*25;
    var y0 = height-25;

    //rectangle height increases by 25
    var rectH = (i+1)*25;
    //creates a color gradient by making color dependent on i
    fill(i*(255.0/nRectangles));
    //draws the rectangle
    rect(x0,y0,25,-rectH);
  }
}