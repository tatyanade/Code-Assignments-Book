
def setup() :
  size(400, 400) 
  noSmooth()


def draw() :
  background (255) 
  strokeWeight (2)
  stroke(0) 

  nRectangles = 14
  i = 0
  while (i < nRectangles):
    x0 = 25 + i * 25
    y0 = height-25
    rectH = (i+1) * 25
    fill(i* (255.0/nRectangles))
    rect(x0, y0, 25, -rectH)
    i=i+1