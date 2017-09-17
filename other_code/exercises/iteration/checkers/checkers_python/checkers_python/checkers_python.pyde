def setup() :
  size(401, 401)




def draw():
  a = 1
  c = 0
  i = 0
  for x in range (0, 8): # in range(i=0; i<400; i=i+50):
    i = x*50
    a=a*-1
    j = 0
    while (j < 400):
    #for (j=0; j<400; j=j+50):
      a=a*-1
      if (a<0):
        c=0
      if (a>0):
        c=255
      fill(c)
      rect(i, j, 50, 50)
      j+=50