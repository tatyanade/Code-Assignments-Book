function setup() {
  createCanvas(300,300);
  stroke(100);
  smooth();
  noFill();
  strokeWeight(2);
	 saveCanvas('myCanvas', 'png');
}

function draw() {
background(200, 255, 200);
    bezier(45,150,45,32,145,32,145,150);
      bezier(145,150,145, 280,245,280,245,150);
}