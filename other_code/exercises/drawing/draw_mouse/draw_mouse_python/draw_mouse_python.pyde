def setup() :
  size(300, 300);
  background(255);
  stroke(0);

def draw() :
  if (mousePressed) :
    #draws a line from the previous mouseX,mouseY to the current mouseX,mouseY
    line(pmouseX, pmouseY, mouseX, mouseY);
  