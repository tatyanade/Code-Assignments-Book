// modal theremin
// <3 rld
var img;
var colors = []; // new Array
colors[0] = [255, 192, 0, 20];
colors[1] = [192, 64, 200, 20];
colors[2] = [0, 255, 192, 20];
colors[3] = [192, 64, 64, 20];
colors[4] = [0, 0, 255, 20];

var osc, echo; // oscillator and echo
var notes = [60, 63, 65, 67, 70]; // MIDI
var octave = [-24, -12, 0, 12, 24]; // MIDI

function preload(){

  img= loadImage("cursor1.png");
}
function setup()
{
  createCanvas(300, 300);
  background(0);
  noStroke();
  rectMode(CENTER);

  // set up oscillator:
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();

  // set up echo:
  echo = new p5.Delay();
  // input, time (s), feedback (0-1), damping (freq)
  echo.process(osc, 0.25, 0.5, 15000);

}

function draw()
{
  var w = imap(mouseX, 0, width, 0, 5); // x => index of pitches
  var o = imap(mouseY, 0, height, 5, 0); // y => octaves

  fill(colors[w]);
  rect(mouseX, mouseY, 50, 50);

  // add the note to the octave and convert:
  var freq = midiToFreq(notes[w] + octave[o]);
  osc.amp(0.8); // loud, but not too loud
  osc.freq(freq);

}

// clear the screen:
function keyPressed(){
  //background(0);
  image(img, mouseX,mouseY, 2*12, 2*19);
  saveCanvas('theremin2', 'png');
}

// constrained integer map function:
function imap(v, a, b, c, d)
{
  return(constrain(floor(map(v, a, b, c, d)), min(c,d), max(c, d)-1));
}
