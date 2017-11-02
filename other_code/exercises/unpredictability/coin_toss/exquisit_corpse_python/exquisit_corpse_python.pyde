def setup() :
  size(300, 300)
  drawBackground() 
  makeNewExquisiteCorpse()

def draw():
    #does nothing, mousePressed does not work unless the draw function exists, this is a glitch in processing py
    #this statement does nothing, but the function needs a statement in order to compile
    a = 7
    
def mousePressed():
  #redraws corpse when mouse is pressed
  drawBackground()
  makeNewExquisiteCorpse()

def makeNewExquisiteCorpse() :
  numParts = 5
  
  #generates the file names for the head, body, and feet by randomly picking one of five for each
  headImage = "head" + str(int(random(1,numParts))) + ".png"
  bodyImage = "body" + str(int(random(1,numParts))) + ".png"
  feetImage = "feet" + str(int(random(1,numParts))) + ".png"
  
  #loads images and stores them into variable names
  head = loadImage(headImage) 
  body = loadImage(bodyImage)
  feet = loadImage(feetImage)

  #draws the head, body, and feet
  image(head, 0, 0)
  image(body, 0, 0)
  image(feet, 0, 0)

def drawBackground() :
  background(255)
  noStroke()
  fill(250)
  rect(0, 0*height/3, width, height/3)
  fill(230)
  rect(0, 1*height/3, width, height/3)
  fill(250)
  rect(0, 2*height/3, width, height/3)