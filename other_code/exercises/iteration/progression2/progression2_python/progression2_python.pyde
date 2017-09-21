c = color(0)
d = color(0)
p = color(0)
def setup():
  size(430, 430)
  noFill()

  ellipseMode(CORNER)
  smooth()
  c = color(198, 2, 61)
  d = color(22, 0, 15)
  stroke(c)
  noLoop()




def draw():
  background(255)
  j=0.3
  k=10
  while (k<130 ) :
    g= k/130.0
    p=lerpColor(c, d, g)
    stroke(p)
    i = 0
    while (i<15):
      j=j*2.2
      arch(j, 0+i*31, 10+k*3.5)
      i+=3
    j=1
    k+=15
  

def arch(curvature,  x,  y):

  strokeWeight(4);
  noFill();
  beginShape();
  smooth();
  vertex(x, y);
  bezierVertex(x-curvature, y-curvature, x+15.0, y-35.0, x+55.0, y-35.0);
  endShape();