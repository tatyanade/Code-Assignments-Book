num = 100
#array of 100 x,y values for previous drawn circles
xs = [0]*100
ys = [0]*100

def setup() :
  size(300, 300)
  fill(0, 100)

def draw() :
  background(255)
  noStroke()
  #moves circle centers down the array so that the most recent is at position 0
  i = num-1
  while (i>0):
    xs[i]=xs[i-1]
    ys[i]=ys[i-1]
    i-=1
  
  #stores the current mouse coordinates
  xs[0]= mouseX
  ys[0]= mouseY

  #draws all cicles with progressivly smaller diameters
  i = num-1
  while (i>0):
    ellipse(xs[i], ys[i], 50-i/2, 50-i/2)
    i-=1