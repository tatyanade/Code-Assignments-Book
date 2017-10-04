num = 100
xs = [0]*num
ys = [0]*num

def setup() :
  size(300,300)
  fill(0)  


def draw() :
  background(255)
  #move along array
  i = num-1
  while (i>0):
    xs[i]=xs[i-1]
    ys[i]=ys[i-1]
    i-=1
  
  #store current location onto array
  xs[0]= mouseX
  ys[0]= mouseY
  
  i = num-1
  while (i>0):
    #slightly alters the x,y values to create a jitter
    xs[i]=xs[i]+random(-1,1)
    ys[i]=ys[i]+random(-1,1)
    line(xs[i], ys[i], xs[i-1], ys[i-1])
    i-=1
  