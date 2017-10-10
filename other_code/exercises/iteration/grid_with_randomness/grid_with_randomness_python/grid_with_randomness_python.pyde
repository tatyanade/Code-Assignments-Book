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
 for y in range(0, 8):
     for x in range(0, 8):
          px = x*50
          py = y*50
          #the chance of drawing a circle is 5%
          #otherwise, it draws a square
          chance = random(1)
          if (chance < .05):
              ellipse(px + 25, py+25, 25, 25)
          else:
              rect(px+5, py+5, 40, 40)