
def setup():
  size(300, 300)
  background(255)
  noStroke()
  fill(0)
  angle = 0.0
  x = 0
  while (x <= width):
    y = height/2 + (sin(angle) * 35.0)
    rect(x, y, 2, 4)
    angle += PI/40.0
    x+=1