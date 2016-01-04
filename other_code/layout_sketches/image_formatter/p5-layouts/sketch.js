/*
default_fullpage_666x522.jpg
default_onethird_282x136.jpg
default_quarter_282x210.jpg
default_shorthalf_576x210.jpg
default_tallhalf_282x432.jpg
default_twothirds_282x284.jpg
*/

var wfull = 666;
var hfull = 522;
var wquar = 282;
var hquar = 210;
var wtall = wquar;
var htall = 432;
var wshor = 576;
var hshor = hquar;
var wthr1 = wquar;
var hthr1 = 136;
var wthr2 = wquar;
var hthr2 = 284;

var Ax = 684;
var Cx = Ax;
var Ex = Ax;
var Gx = Ax;
var Bx = 978;
var Dx = Bx;
var Fx = Bx;
var Hx = Bx;
var xfull = 639;

var Ay = 36;
var By = Ay;
var Cy = 184;
var Dy = Cy;
var Ey = 258;
var Fy = Ey;
var Gy = 332;
var Hy = Gy;
var yfull = -9;

var imageLayouts = [
  [
    [xfull, yfull, wfull, hfull]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Bx, By, wquar, hquar],
    [Ex, Ey, wshor, hshor]
  ],
  [
    [Ax, Ay, wshor, hshor],
    [Ex, Ey, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wshor, hshor],
    [Ex, Ey, wshor, hshor]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr1, hthr1],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr1, hthr1],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr2, hthr2],
    [Bx, By, wthr2, hthr2],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr2, hthr2],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr2, hthr2]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr1, hthr1],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr1, hthr1],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr2, hthr2]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wthr2, hthr2],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr2, hthr2],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wthr2, hthr2],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wthr2, hthr2],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr1, hthr1],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr1, hthr1],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wthr2, hthr2],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr1, hthr1],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr1, hthr1],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr2, hthr2],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr2, hthr2]
  ],
  [
    [Ax, Ay, wthr2, hthr2],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wthr2, hthr2],
    [Hx, Hy, wthr1, hthr1]
  ],
];


var selected = 1;
var defaultImg;
var imageArray;

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    selected--;
  } else if (keyCode == RIGHT_ARROW) {
    selected++;
  }
  selected = constrain(selected, 0, imageLayouts.length-1);
  return false; // prevent default
}


function preload(){
  defaultImg = loadImage("default.jpg");
  imageArray = new Array(defaultImg, defaultImg, defaultImg, defaultImg, defaultImg, defaultImg);
}

function setup() {
  createCanvas(648, 504);
}

function draw() {
  background(220);


  push();
  translate(0-width, 0); 
  drawImageLayout (selected, imageArray);
  pop();

  drawImageLayoutFrames (selected, !mouseIsPressed);


  fill (0,0,0);
  textSize(14);
  noStroke();
  text("Use left/right arrow keys to select layout. LAYOUT ID = " + selected, 100,20);
}

//==========================================================
function drawImageLayoutFrames (whichImageLayout, bSmall) {

  var shrink = 1.0/8.0;
  var delta = Ay;

  var lineWeight = 1.0;
  var numeralSize = 24;
  if (bSmall){
    lineWeight = 0.25;
    numeralSize = 6;
  }

  var nImageLayouts = imageLayouts.length;
  if ((whichImageLayout >= 0) && (whichImageLayout < nImageLayouts)) {
    var anImageLayout = imageLayouts[whichImageLayout];
    var nRectsInLayout = anImageLayout.length;
    for (var i = 0; i < nRectsInLayout; i++) {
      var aRect = anImageLayout[i];
      var rx = aRect[0];
      var ry = aRect[1];
      var rw = aRect[2];
      var rh = aRect[3];
      var numeralDx = 12;
      var numeralDy = 36;

      if (bSmall){
        // drawing the miniature version of the frames
        rx = (rx - width - delta)*shrink;
        ry = (ry - delta)*shrink;
        rw = rw * shrink;
        rh = rh * shrink;
        numeralDx = 4;
        numeralDy = 9;
      } else {
        // drawing for the p5 preview only
        rx -= width;
      }

      drawRect (rx, ry, rw, rh, lineWeight);
      drawNumeral (rx+numeralDx, ry+numeralDy, i+1, numeralSize);
    }
  }
}

function drawRect(rx, ry, rw, rh, lineWeight){
  // p5.js version:
  noFill();
  stroke(0, 0, 0);
  strokeWeight (lineWeight);
  rect(rx, ry, rw, rh);
}

function drawNumeral (nx, ny, num, numeralSize){
  // p5.js version:
  fill(0,0,0);
  noStroke();
  textSize (numeralSize);
  text(num, nx,ny);
}


//==========================================================
function drawImageLayout (whichImageLayout, images) {
  var nImageLayouts = imageLayouts.length;
  if ((whichImageLayout >= 0) && (whichImageLayout < nImageLayouts)) {
    var anImageLayout = imageLayouts[whichImageLayout];
    var nRectsInLayout = anImageLayout.length;
    nRectsInLayout = min(nRectsInLayout, 6);

    for (var i = 0; i < nRectsInLayout; i++) {
      var aRect = anImageLayout[i];
      var rx = aRect[0];
      var ry = aRect[1];
      var rw = aRect[2];
      var rh = aRect[3];

      image (imageArray[i], rx, ry, rw, rh);
    }
  }
}
