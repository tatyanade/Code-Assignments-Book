function setup() {
  createCanvas(300, 300);
  background(255);
  stroke(0);
}
function draw() {
  if (mouseIsPressed) {
    //draws a line from the previous mouseX,mouseY to the current mouseX,mouseY
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}