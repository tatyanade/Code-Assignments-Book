def setup():
  size(400, 400)



def lengthOfMonth():
    m = month()
    if(m==1 or m==3 or m==5 or m==7 or m==8 or m==10 or m==31):
        return 31
    elif(m ==4 or m==6 or m==9 or m==11):
        return 30
    else:
        if (year()%4 == 0):
            return 29  #leapyear
        return 28
    
    
    
def draw():
  rectMode(CENTER)
  ellipseMode(CENTER)
  background(255)
  noStroke()
  smooth()

  numOfDaysInMonth =  lengthOfMonth(); 
  # Remember that days are usually counted from 1, not 0.
  d = 1
  while(d <= numOfDaysInMonth):
    dayX = map(d,0,numOfDaysInMonth+1, 0,width); 
    if (d == day()):
      fill(250, 100, 100)
      ellipse(dayX, height/2, 15, 15)
    else:
      fill(0,75,165);
      rect(dayX, height/2, 5, 50);
    d+=1