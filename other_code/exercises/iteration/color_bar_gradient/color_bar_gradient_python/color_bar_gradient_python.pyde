# Color Bar Gradient


#Using iteration, generate a gradient that interpolates 
#from one fill color to another across exactly 17 rectangles. 
#You may find it helpful to learn about your environment’s lerp() 
#function. Implement some code that randomizes the two end-colors 
#whenever the user clicks the mouse.


nRectangles = 17 
colorA = color(255, 255, 0)
colorB = color(255, 0, 255)

def setup() :
  size(400, 400)



def draw() :
  background(255)
  rectMode(CENTER) 
  noStroke() 
  i = 0
  while( i < nRectangles):
    fraction = float(i)/(nRectangles-1)
    aBarColor = lerpColor(colorA, colorB, fraction)
    barX = map(i, 0,nRectangles-1, 25,width-25) 
    
    fill(aBarColor)
    rect(barX, height/2, 20,360)
    i+=1
  


def mousePressed() :
  colorA = color(random(0, 255), random(0, 255), random(0, 255))
  colorB = color(random(0, 255), random(0, 255), random(0, 255))