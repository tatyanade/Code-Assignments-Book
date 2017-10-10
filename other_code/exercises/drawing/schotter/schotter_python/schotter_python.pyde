

def setup() :
  size(300,300)
  smooth()
  noLoop()

  background(255)
  noFill()
  r = 0
  v = 0
  w = 20
  
  #draws a grid of squares that become progressivley randomly rotated
  y = w

  while(y < height-w):
      x = w
      while(x < width-w):
        pushMatrix() 
        r=random(-v, v)
        translate(x+w/2, y+w/2)
        rotate(r)
        rect(-w/2,-w/2, w, w) 
        popMatrix()
        x = x+w
      y = y+w
      v=v+0.05
  