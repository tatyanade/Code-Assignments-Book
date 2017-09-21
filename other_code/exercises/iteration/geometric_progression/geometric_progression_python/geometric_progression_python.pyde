# Geometric Progression

def setup() :
  size(800, 800)
  smooth() 


def draw():
  background(255)
  stroke(0) 
  noFill()
  
  constantFactor = 1.315
  circleSize = 20 
  
  i = 1
  while(i < 20):
    strokeWeight(circleSize/25.0) 
    ellipse(width/2,height, circleSize, circleSize)
    circleSize = circleSize * constantFactor 
    i+=1