def setup():
  size(400, 400)
  smooth()


def draw():
  background(30)
  x = 0
  while(x < 7):
    y = 0
    while(y<8):
      arrow(x*57+6, y*50+25)
      y+=1
    x+=1


def arrow(x, y):
  strokeWeight(4)
  stroke(255, 0, 255)
  line(x+20, y+20, x, y) 
  line(x+20, y-20, x, y) 
  line(x, y, x+45, y)