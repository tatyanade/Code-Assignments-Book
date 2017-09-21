
def setup():
  size(400, 400)
  smooth()


def draw():
  background(255)
  strokeWeight (2.0)
  stroke(0)

  nLines = 10
  margin = 50
  i = 1
  while(i <= nLines) :
    x0 = map(i, 1,nLines, margin, width-margin) 
    y0 = margin
    line (x0, y0, mouseX, mouseY)
    i+=1