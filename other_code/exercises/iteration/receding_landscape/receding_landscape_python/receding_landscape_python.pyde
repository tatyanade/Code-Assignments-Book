# Receding Horizon
# Iteration exercise 
# Java solution

size(800, 800)
background(255)
strokeWeight(3.0)
stroke(0)
smooth()
i=0-100
while (i<=width+100):
  xTop = width/2 + i*10 
  xBot = width/2 + i*55 
  line (xTop, -1, xBot, height) 
  i=i+1