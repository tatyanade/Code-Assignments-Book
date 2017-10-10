#radius of shape is equal to side length
radius = 15
hex_height = radius * sqrt(3)

def setup():
  size(300,300)
  drawHexagons()


def drawHexagons():
  #drawing hexagons on the grid
  for i in range (0, width/radius):
    for j in range (0, width/radius):
      x = i*(radius*1.5)
      
      #if an even row, fraw hexagon
      if ((i%2) == 0):
        y = j*hex_height
      
      #if an odd row, draw hexagons half a hexagon lower so they tessellate
      else:
        y = j*hex_height + hex_height/2 
        
      fill(random(255))
      hexagon(x, y, radius)
        
#based on regular polygons https:#processing.org/examples/regularpolygon.html
def hexagon( x,  y,  radius) :
  angle = TWO_PI / 6
  beginShape()
  a = 0
  while (a < TWO_PI):
     sx = x + cos(a) * radius
     sy = y + sin(a) * radius
     vertex(sx, sy)
     a += angle
  endShape(CLOSE)