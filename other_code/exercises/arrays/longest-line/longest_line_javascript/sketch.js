var xpos1 = [];
var ypos1 = [];

var xpos2 = [];
var ypos2 = [];

var longest=0;
var a;

function setup() {
  createCanvas(400,400);
  background(255);


}

function draw() {

  for(var i=0;i<xpos1.length;i++){
    strokeWeight(2);
 stroke(0);
   line(xpos1[i],ypos1[i],xpos2[i],ypos2[i]);
    stroke(255,128,128);
    strokeWeight(2);
    line(xpos1[a],ypos1[a],xpos2[a],ypos2[a]);

  if(dist(xpos1[i],ypos1[i],xpos2[i],ypos2[i])>longest){
    longest=dist(xpos1[i],ypos1[i],xpos2[i],ypos2[i]);
    a=i;
  }
  }
  print(xpos1.length);
}

function mousePressed(){
  xpos1.push(mouseX);
  ypos1.push(mouseY);
   for(var i=0;i<xpos1.length;i++){
     print(xpos1[i]);
   }
}

function mouseClicked(){
  xpos2.push(mouseX);
  ypos2.push(mouseY);
}

function mouseDragged() {
 // ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}

function keyPressed(){
  saveCanvas("1",".jpg")
}
