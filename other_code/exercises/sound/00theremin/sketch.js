// theremin
// <3 rld

var osc; // an oscillator
var img;

function preload(){

  img = loadImage("cursor1.png");
}
function setup()
{
  createCanvas(300, 300);
  background(0);
  noStroke();

  // setup the oscillator:
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start(); // this is important

}

function draw()
{
  background(0);

  var f = map(mouseX, 0, width, 100, 3000); // x => frequency
  var a = map(mouseY, 0, height, 0.1, 0.); // y => amplitude

  fill(255);
  ellipse(mouseX, mouseY, 50, 50);

  osc.amp(sqrt(a)); // use equal-power volume
  osc.freq(f);
  image(img, mouseX,mouseY, 2*12, 2*19);
}

// constrained integer map function:
function imap(v, a, b, c, d)
{
  return(constrain(floor(map(v, a, b, c, d)), min(c,d), max(c, d)-1));
}

function keyPressed(){

  saveCanvas('theremin', 'png');
}
