# Simple iteration. 
# Uses introductory "immediate mode"
# With no setup() or draw() functions. 

size(400, 400)
background (192) 

stroke(0) 
fill(255)
strokeWeight(4) 
#draws 7 circles
for i in range (0, 7):
  #sets space between circle centers to 50
  x = 50 + i*50
  #draws circles of radius 30
  ellipse(x, 100, 30, 30)