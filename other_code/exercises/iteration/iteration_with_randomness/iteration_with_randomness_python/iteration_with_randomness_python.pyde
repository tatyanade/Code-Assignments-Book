# Iteration with Randomness

def setup():
  size(400, 400) 
  noLoop()


def draw():
  background(160)
  i=0
  while(i<150):
    rx = random(-20, width+20) 
    ry = random(-20, height+20) 
    rd = random(64)
    drawCrater(rx, ry, rd)
    i+=1

def drawCrater(rx, ry, rd):
  noFill()

  strokeWeight(7)
  stroke(0, 0, 0, 10) 
  ellipse(rx-6, ry, rd+5, rd+5)
  stroke(255, 255, 255, 25)
  ellipse(rx+6, ry, rd+5, rd+5)

  strokeWeight(5)
  stroke(0, 0, 0, 25) 
  ellipse(rx-4, ry, rd+3, rd+3)
  stroke(255, 255, 255, 25)
  ellipse(rx+4, ry, rd+3, rd+3)

  strokeWeight(4)
  stroke(0, 0, 0, 50) 
  ellipse(rx-3, ry, rd+2, rd+2)
  stroke(255, 255, 255, 50)
  ellipse(rx+3, ry, rd+2, rd+2)

  strokeWeight(3)
  stroke(0, 0, 0, 75) 
  ellipse(rx-2, ry, rd+1, rd+1)
  stroke(255, 255, 255, 75)
  ellipse(rx+2, ry, rd+1, rd+1)

  strokeWeight(2)
  stroke(0, 0, 0, 100) 
  ellipse(rx-1, ry, rd+0, rd+0)
  stroke(255, 255, 255, 100)
  ellipse(rx+1, ry, rd+0, rd+0)