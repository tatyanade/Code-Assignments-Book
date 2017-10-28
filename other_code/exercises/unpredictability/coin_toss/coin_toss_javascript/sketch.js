// Program which flips a coin whenever the user clicks the mouse. 
var theDisplayString = "";
var coinTossCount = 0; 

function setup() {
  createCanvas(240, 240);
  tossCoin();
}


function mousePressed() {
  tossCoin();
}

function draw() {
  background(255);
  drawCoin();
}

function tossCoin() {
  // Generate a random number between 0 and 1
  coinTossCount++; 
  var aRandomValue = random(1.0);

  if (aRandomValue < 0.5) {
    theDisplayString = "T";
    print("Coin toss #" + coinTossCount + ": (T)ails"); 
  } else {
    theDisplayString = "H";
    print("Coin toss #" + coinTossCount + ": (H)eads"); 
  }
}


function drawCoin() {
  textAlign(CENTER, CENTER);
  textSize(80);
  
  noStroke();
  fill(100); 
  ellipse(width/2+6, height/2+1, 120, 120);
  fill(170);
  ellipse(width/2, height/2, 120, 120);

  fill(110);
  text(theDisplayString, width/2-2, height/2-9);
  fill(255, 200);
  text(theDisplayString, width/2, height/2-7);
}
