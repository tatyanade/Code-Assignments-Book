def setup():
  size(400, 400) 
  smooth()


def draw():
  background (255)
  stroke(0) 
  strokeWeight (1.5) 

  nLines = 7
  margin = 50 
  i = 0
  while (i<=nLines):
    x0 = margin
    y1 = height - margin 
    y0 = map(i, 0, nLines, margin, height-margin)
    x1 = y0 
    line (x0, y0, x1, y1)
    i+=1;