# Iteration with Functions. 
# A function which drawa a smily face, 
# is invoked inside a nested iteration.

def setup():
  size(400, 400)

def draw():
  background(255)
  smooth() 
  
  i=0
  while(i<5):
    j = 0
    while(j<5):
        x = j*75 + 50
        y = i*75 + 50
        drawFace(x, y)
        j+=1
    i+=1


def drawFace(x, y):
  stroke(0, 0, 0)
  strokeWeight(2.0) 
  pushMatrix()
  translate(x, y) 
  ellipse(0, 0, 60, 60)  
  ellipse (11, -7, 10, 10)
  ellipse (-11, -7, 10, 10)
  arc(0, 0, 30, 30, PI*0.25, PI*0.75) 
  popMatrix()