var num = 100;
var xs = [];
var ys = [];

function setup() {
  createCanvas(300,300);
  fill(0);  
}

function draw() {
  background(255);
  //move along array
  for (var i=num-1; i>0; i--) {
    xs[i]=xs[i-1];
    ys[i]=ys[i-1];
  }
  
  //store current location onto array
  xs[0]= mouseX;
  ys[0]= mouseY;
  
  for (var i=num-1; i>0; i--) {
    //slightly alters the x,y values to create a jitter
    xs[i]=xs[i]+random(-1,1);
    ys[i]=ys[i]+random(-1,1);
    line(xs[i], ys[i], xs[i-1], ys[i-1]);
    }
  }
