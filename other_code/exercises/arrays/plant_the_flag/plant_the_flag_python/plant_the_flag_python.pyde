# Exercises: Array
# Plant the Flag

# A bumpy "landscape" or terrain, 
# consisting of an array of height values, 
# has been provided to you. 
# Write code which searches through this array, 
# and draws "flags" on the peaks (i.e. local maxima).

terrain = []

def placeFlagsOnTerrain() :
  # PLACE YOUR CODE HERE TO DETECT HILLS
  
  for i in range(1, width-1):
    yA = terrain[i - 1] 
    yB = terrain[i + 0]
    yC = terrain[i + 1]
    
    if ((yA > yB) and (yC > yB)) : 
        drawFlag(i, yB) # We found a peak... draw a flag!
    
  


def drawFlag( flagx,  flagy):
    # For example...
    stroke (0, 0, 0) 
    line(flagx, flagy, flagx, flagy - 60)
    rect(flagx,flagy - 60 ,25,15)


#----------------------------------------------------------------------
# There should be no reason for you to modify any code below this line: 
def setup() :
  global terrain
  size(300, 300)
  terrain = [0]*width

def draw() :
  background(160, 190, 255)
  calculateTerrain()
  renderTerrain() 
  placeFlagsOnTerrain()


def calculateTerrain() :
    noiseDetail(2,0.2) 
    noiseSeed(12345) 
    for i in range(0,width):
        val = noise(i/40.0 + frameCount/50.0)
        y = map(val, 0, 1, height*0.25, height*0.98) 
        terrain[i] = y
    


def renderTerrain() :
    stroke(10, 90, 10) 
    for i in range(0, width): 
        y = terrain[i] 
        line (i, height, i, y)