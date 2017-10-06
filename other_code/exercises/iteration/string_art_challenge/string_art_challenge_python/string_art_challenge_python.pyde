def setup():
  size(400, 400) 
  smooth()


def draw():
  background (255)
  strokeWeight (1.5) 

  #sets amount of lines being drawn
  nLines = 7
  #sets margin
  margin = 50 
  
  for i in range (0, nLines):
    #line always starts with the same x value
    x0 = margin
	#line always ends with the same y value
    y1 = height - margin 
	#makes the lines starting y values equidistant
    y0 = map(i, 0, nLines, margin, height-margin)
    x1 = y0 
    line (x0, y0, x1, y1)
