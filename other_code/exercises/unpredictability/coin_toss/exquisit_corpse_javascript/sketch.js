var head1;
var head2;
var head3;
var head4;
var head5;
var body1;
var body2;
var body3;
var body4;
var body5;
var feet1;
var feet2;
var feet3; 
var feet4;
var feet5;

var feet = [];
var bodies = [];
var heads = [];

//because of the way that P5 deals with images (as opposed to processing), we preload all of them.
//In the other 2 examples, we load the image in the makeNewExquisitCorpseFunction
//Instead, here we are loading them all, and putting them into arrays, 
//then randomly selecting one image from each of the corresponding arrays and then drawing them.
function preload(){
  head1 = loadImage("head1.png");
  head2 = loadImage("head2.png");
  head3 = loadImage("head3.png");
  head4 = loadImage("head4.png");
  head5 = loadImage("head5.png");
  body1 = loadImage("body1.png");
  body2 = loadImage("body2.png");
  body3 = loadImage("body3.png");
  body4 = loadImage("body4.png");
  body5 = loadImage("body5.png");
  feet1 = loadImage("feet1.png");
  feet2 = loadImage("feet2.png");
  feet3 = loadImage("feet3.png");
  feet4 = loadImage("feet4.png");
  feet5 = loadImage("feet5.png");

  heads = [head1,head2,head3,head4,head5];
  bodies = [body1, body2, body3, body4, body5];
  feet =[feet1,feet2,feet3,feet4,feet5];
  
}

function setup() {
  createCanvas(300, 300);
  drawBackground(); 
  makeNewExquisiteCorpse();
}


function mousePressed() {
  makeNewExquisiteCorpse();
}


function makeNewExquisiteCorpse() {
  drawBackground();
  
  var numParts = 5;
  
  //picks a random head/body/feet from the array off available options
  head = heads[int(random(numParts))];
  body = bodies[int(random(numParts))];
  foot = feet[int(random(numParts))];

  //draws the head, body, and feet
  image(head, 0, 0);
  image(body, 0, 0);
  image(foot, 0, 0);
}


function drawBackground() {
  background(255);
  noStroke();

  fill(250);
  rect(0, 0*height/3, width, height/3);
  fill(230);
  rect(0, 1*height/3, width, height/3);
  fill(250);
  rect(0, 2*height/3, width, height/3);
}