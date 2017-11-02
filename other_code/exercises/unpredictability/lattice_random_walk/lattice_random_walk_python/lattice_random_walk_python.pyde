# Lattice Drunk Walk
# Create a sketch in which a small element travels 
# erratically from one moment to the next, 
# leaving a trail as it moves. It should have a 1-in-4 
# chance of moving up, down, left or right.

prevx = 0
prevy = 0

def setup():
  size(400,400)
  clearCanvas() 

def clearCanvas():
  #in python, you must specify that you are using global (defined outside the function), otherwise it will create a new variable with the same name
  global prevx
  global prevy
  background(255,255,255)
  prevx = width/2
  prevy = height/2

def movePoint():
   global prevx
   global prevy
   
   stepSize = 8 # pixels
   nextx = prevx 
   nexty = prevy 

   #randomly chooses which direction the line will continue in
   directionChoice = (int(random(0,4)))

   if (directionChoice == 0):
    nextx += stepSize
  
   elif (directionChoice == 1):
    nextx -= stepSize
  
   elif (directionChoice == 2):
    nexty -= stepSize
  
   elif (directionChoice == 3):
    nexty += stepSize
  

   stroke(0,0,0) 
   strokeWeight(2)
   
   #draws a line from previous point to new point
   line (prevx,prevy, nextx,nexty)

   #updates variables
   prevx = nextx
   prevy = nexty 

def draw() :
  movePoint()

def mousePressed():
  clearCanvas() 