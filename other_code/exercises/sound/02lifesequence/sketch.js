//life sequencer

// sequencer stuff:
var ncols = 21; // how many 'steps' in the sequence
var nrows = 21; // how many 'rows' (pitches) in the sequence
var cstep, rstep; // pixel size for drawing
var thestuff; // array to store on/off data for sequence
var curstep; // what 'step' are we on?
var laststep; // what was the last step?
var autoconway=false; // do game of life automatically?

var t = new Tone.Frequency(); // tone.js object to access conversion functions
var keys; // polyphonic synthesizer

var notes; // array of notes = nrows

// pitch of lowest note:
//var basenote = 30; // MIDI pitch of lowest note
var basenote = 50; // MIDI pitch of lowest note

// scales to build 'notes' array:
//var scalepat = [2, 2, 1, 2, 2, 2, 1]; // major scale
// var scalepat = [2, 1, 2, 2, 1, 2, 2]; // minor scale
//var scalepat = [7, 5]; // rave
var scalepat = [3, 2, 2, 3, 2]; // pentatonic scale

var showhelp = true; // help?

// p5.js + tone.js setup:
function setup() {

  // graphics:
  createCanvas(300, 300);
  noLoop();
  cstep = width/ncols;
  rstep = height/nrows;

  fillerup(); // set up 'thestuff' with a sequence of random values

  // fill up 'notes' with a scale:
  notes = new Array(nrows);
  var sptr = 0;
  notes[0] = basenote;
  for(var j = 1;j<notes.length;j++)
  {
    notes[j] = notes[j-1]+scalepat[sptr];
    sptr = (sptr+1) % scalepat.length;
  }

  // Tone.js setup:

  // reverb:
  var freeverb = new Tone.Freeverb(0.8, 10000).toMaster();
  freeverb.wet.value = 0.25;

  // synthesizer:
  keys = new Tone.PolySynth(nrows, Tone.SimpleSynth).connect(freeverb);

  // timecode 'clock' array for sequencer:
  var tc = new Array(ncols);
  for(var k = 0;k<tc.length;k++)
  {
    tc[k] = k;
  }

  // sequencer:
  Tone.Transport.bpm.value = 120; // tempo
  Tone.Transport.start(); // start master transport
  var theloop = new Tone.Sequence(sequenceStep, tc, "16n"); // callback, clock array, note value
  theloop.start(); // start sequence

}

// calls every step in the sequence (tone.js):
function sequenceStep(time, step)
{
  if(step==0&&laststep==ncols-1&&autoconway==true) conway();
  curstep = step;
  var n = [];
  for(var i = 0;i<nrows;i++)
  {
    if(thestuff[step][i])
    {
      n.push(t.midiToFrequency(notes[nrows-1-i]));
    }
  }
  keys.triggerAttackRelease(n, "4n", time, random(0.1, 0.2));
  redraw();
  laststep = step;
}

// draws every frame (p5.js):
function draw() {
  background(0);
  // cursor:
  fill(128, 128, 255, 50);
  rect(curstep*cstep, 0, cstep, height-1);
  // blocks:
  stroke(0);
  for(i = 0;i<ncols;i++)
  {
    if(i==curstep) {
      if(autoconway) fill(255, 0, 0); else fill(0, 255, 0);
    }
    else fill(255);
    for(j = 0;j<nrows;j++)
    {
      if(thestuff[i][j]) rect(i*cstep, j*rstep, cstep, rstep);
    }
  }
  // titles:
  if(showhelp) {
    stroke(0);
    fill(0, 255, 255);
    text('(R)andomize (C)lear (L)ife (A)utolife (H)elp.  Mouse draws.', 20, 20);
  }
}

// keys to randomize or clear:
function keyPressed()
{
  if(key=='R') fillerup();
  else if(key=='C') clearit();
  else if(key=='A') autoconway=!autoconway;
  else if(key=='L') conway();
  else if(key=='H') showhelp = !showhelp;
  else if(key=='P') saveCanvas('sequencer2','png');

}

// drag to fill in array:
function mouseDragged()
{
  var x = imap(mouseX, 0, width, 0, ncols);
  var y = imap(mouseY, 0, height, 0, nrows);
  thestuff[x][y] = true;
}

// click to invert a single cell's value:
function mousePressed()
{
  var x = imap(mouseX, 0, width, 0, ncols);
  var y = imap(mouseY, 0, height, 0, nrows);
  thestuff[x][y] = !thestuff[x][y];

}

// fill up 'thestuff' with random values for use as the sequence:
function fillerup()
{
  // clear it:
  thestuff = new Array(ncols);
  for(var i = 0;i<thestuff.length;i++)
  {
    thestuff[i] = new Array(nrows);
  }

  // fill it:
  for(var i = 0;i<thestuff.length;i++)
  {
    for(var j = 0;j<thestuff[i].length;j++)
    {
      thestuff[i][j] = random()>0.9;
    }
  }
}

// run one generation of Conway's Game of Life on the sequence:
function conway()
{
  // initialize swap array
  var theswap = new Array(ncols);
  for(var i = 0;i<thestuff.length;i++)
  {
    theswap[i] = new Array(nrows);
  }

  // kernel:
  for(var i = 0;i<thestuff.length;i++)
  {
    for(var j = 0;j<thestuff[i].length;j++)
    {
      var neighbors = 0; // how many neighbors are alive?
      // upper row:
      neighbors+=thestuff[(i-1+thestuff.length)%thestuff.length][(j-1+thestuff[i].length)%thestuff[i].length];
      neighbors+=thestuff[i][(j-1+thestuff[i].length)%thestuff[i].length];
      neighbors+=thestuff[(i+1)%thestuff.length][(j-1+thestuff[i].length)%thestuff[i].length];
      // center row:
      neighbors+=thestuff[(i-1+thestuff.length)%thestuff.length][j];
      var cell = thestuff[i][j]; // MIDDLE CELL
      neighbors+=thestuff[(i+1)%thestuff.length][j];
      // lower row:
      neighbors+=thestuff[(i-1+thestuff.length)%thestuff.length][(j+1)%thestuff[i].length];
      neighbors+=thestuff[i][(j+1)%thestuff[i].length];
      neighbors+=thestuff[(i+1)%thestuff.length][(j+1)%thestuff[i].length];
      // Conway's rules:
      if(cell==true) { // if a cell is alive...
        if(neighbors==2||neighbors==3) theswap[i][j] = true; // ...and has 2 or 3 live neighbors, it lives...
        else theswap[i][j] = false; // ...otherwise it dies.
      }
      else if(cell==false) { // if a cell is dead...
        if(neighbors==3) theswap[i][j] = true; // ...and has exactly 3 live neighbors, it becomes alive...
        else theswap[i][j] = false; // ...othewise it stays dead.
      }

    }
  }
  thestuff = theswap; // SWAP!
}

// clear 'thestuff':
function clearit()
{
  thestuff = new Array(ncols);
  for(var i = 0;i<thestuff.length;i++)
  {
    thestuff[i] = new Array(nrows);
    for(var j = 0;j<thestuff[i].length;j++)
    {
      thestuff[i][j] = false;
    }
  }
}

// constrained integer map function:
function imap(v, a, b, c, d)
{
  return(constrain(floor(map(v, a, b, c, d)), min(c,d), max(c, d)-1));
}
