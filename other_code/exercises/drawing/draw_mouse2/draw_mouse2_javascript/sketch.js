var num = 100;
//array of 100 x,y values for previous drawn circles
var xs = [100];
var ys = [100];

function setup() {
  createCanvas(300, 300);
  fill(0, 100);
}

function draw() {
  background(255);
  noStroke();
  //moves circle centers down the array so that the most recent is at position 0
  for (var i=num-1; i>0; i--) {
    xs[i]=xs[i-1];
    ys[i]=ys[i-1];
  }

  //stores the current mouse coordinates
  xs[0]= mouseX;
  ys[0]= mouseY;

  //draws all cicles with progressivly smaller diameters
  for (var i=num-1; i>0; i--) {
    ellipse(xs[i], ys[i], 50-i/2, 50-i/2);
  }
}
