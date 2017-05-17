// play some samples
// <3 rld

var samp = {}; // new Object

// do this first:
function preload()
{
  // load the samples.  the object keys are the same as the keys you type:
  samp['A'] = loadSound('./data/edge.mp3'); // vermont
  samp['S'] = loadSound('./data/full.mp3'); // djembe
  samp['D'] = loadSound('./data/med.mp3'); // vermont
  samp['F'] = loadSound('./data/slap.mp3'); // djembe
}

// do this second:
function setup()
{
  createCanvas(300, 300);
  background(0, 10);
  text('type A S D F and move the mouse', 20, 20);

  // when you trigger it, restart it:
  for(var i in samp) samp[i].playMode('restart');
}

function draw()
{
  // nothing to see here, folks.  move along.
}

function keyPressed()
{
  var p = map(mouseX, 0, width, -1., 1.); // x => panning
  var r = map(mouseY, 0, height, 2., 0.5); // y => playback speed
  // use key to find object keys:
  if(samp[key]) {
    samp[key].pan(p);
    samp[key].rate(r);
    samp[key].play();
    ellipse(mouseX, mouseY, random(5, 20), random(5,20));
  }
    saveCanvas('samples', 'png');
}
