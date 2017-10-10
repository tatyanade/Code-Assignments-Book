
def setup() :
  size(400, 400) 
  noSmooth()


def draw() :
  background (255) 
  strokeWeight (2)

  nRectangles = 14
  for i in range(0, nRectangles):
    #finds the x and y value of the current rectangle
    x0 = 25 + i * 25
    y0 = height-25
	
	#increases the rectangle height by 25
    rectH = (i+1) * 25
	#creates a color gradient by making fill dependent on i
    fill(i* (255.0/nRectangles))
	#draws the current rectangle
    rect(x0, y0, 25, -rectH)
