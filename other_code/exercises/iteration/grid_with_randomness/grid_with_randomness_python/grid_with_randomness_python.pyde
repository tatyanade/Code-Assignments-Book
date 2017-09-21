# Grid with Randomness

def setup():
  size(400, 400) 
  smooth() 
  noLoop()  


def draw()  :
  background(255)  
  strokeWeight(2) 
  stroke(0)  
  noFill()  
  y = 0
  while (y<8):
      x = 0
      while (x < 8) :
          px = x*50
          py = y*50
          chance = random(1)
          if (chance < .05):
              ellipse(px + 25, py+25, 25, 25)
          else:
              rect(px+5, py+5, 40, 40)
          x +=1
      y += 1