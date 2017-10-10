def setup():
  size(400, 400)
  smooth()


def draw():
  background(30)
  for x in range (0, 7):
    for y in range (0, 8):
        #calls the arrow function that we have defined below
        arrow(x*57+6, y*50+25)


#this defines the arrow function
def arrow(x, y):
  #this draws an arrow, relative to any given x and y value
  strokeWeight(4)
  stroke(255, 0, 255)
  line(x+20, y+20, x, y) 
  line(x+20, y-20, x, y) 
  line(x, y, x+45, y)