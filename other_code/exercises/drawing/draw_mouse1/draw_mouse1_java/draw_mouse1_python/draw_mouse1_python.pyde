def setup() :
  size(300, 300)
  background(255)
  stroke(0, 200)

def draw() :
  #makes strokeWeight dependent on horizontal velocity
  strokeWeight(abs((pmouseX-mouseX)/2))
  if (mousePressed) :
    #draws line from previouse point to current mousex,mousey
    line(pmouseX, pmouseY, mouseX, mouseY)
  