xpos1 = []
ypos1 = []
xpos2 = []
ypos2 = []

longestLength = 0
indexOfLongest = 0

def setup():
    longestLength = 0
    size(400, 400)


def draw():
    background(255)
    #since we are in python we must specify that we are using global variables(these are defined outside of a function)
    global indexOfLongest
    global longestLength
    
    # Determine which line is longest.
    print(xpos1)
    print(ypos1)
    print(xpos2)
    print(ypos2)
    for i in range(0, len(xpos1)):
        #makes sure that the index we want to check is within range of the arrays
        if (len(xpos1) != 0 and len(xpos2) != 0 and len(xpos1) == len(xpos2) ):
            #checks length on newest line against length of longest line 
            if (dist(xpos1[i], ypos1[i], xpos2[i], ypos2[i]) > longestLength) :
                longestLength = dist(xpos1[i], ypos1[i], xpos2[i], ypos2[i])
                indexOfLongest = i
        
    

    # Draw all of the lines
    for i in range(0, len(xpos2)): #( i = 0; i < xpos1.length; i++) :
        if (i == indexOfLongest) : 
            # Longest line is thick and red
            stroke(255,0,0)
            strokeWeight(7)
        else :
            # All other stored lines are thin and black
            stroke(0,0,0)
            strokeWeight(3)
        if(len(xpos1) != 0 and len(xpos2) != 0):# and len(xpos1) == len(xpos2)): 
            #saftey check to make sure the indeces are accesible
            line(xpos1[i], ypos1[i], xpos2[i], ypos2[i])
    
    
    # Draw a gray diagnostic mark for the active line
    if mousePressed :
        stroke(100,100,100)
        strokeWeight(1)
        line(mouseX, mouseY, xpos1[len(xpos1) - 1], ypos1[len(xpos1) - 1])
  
    
    
# Store data based on eraction
def mousePressed() :
    xpos1.append(mouseX)
    ypos1.append(mouseY)


def mouseReleased() :
    xpos2.append(mouseX)
    ypos2.append(mouseY)


def mouseDragged() :
    # prevent default
    return False