def setup() :
  size(401, 401)

def draw():
  a = 1
  #color of each individual square
  c = 0
  #the board is 8 by 8
  for i in range (0, 8):
    x = i*50
    #alternates fill between black and white
    a=a*-1
    for j in range (0, 8):
      y = j*50
      #alternates fill between black and white
      a=a*-1
      if (a<0):
        #changes fill to black
        c=0
      if (a>0):
        #changes fill to white
        c=255
      fill(c)
      #draws individual checkers squares
      rect(x, y, 50, 50)