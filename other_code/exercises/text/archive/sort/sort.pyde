def setup():
    size(600,600)
    background(255)
    global lines1 
    global lines2
    global sorted_items
    sorted_items=" "
    lines2=" "
    global y
    y=34
    lines1 = loadStrings("frost.txt")
    #print("there are %i lines" % len(lines))
    #shuffle(lines)

    f = createFont("Times", 34)
    background(255)
    textFont(f)            
    fill(0) 
    
    #construct string
    for line in lines1:
        lines2=lines2+" "+line
   
    #split string into a list
    lines2.split(" ")
    
    #sort string
    sorted_items = sorted(lines2)   
    #line3.sort()

    text(lines2,10,y)
    print(lines2)



    
def mousePressed():
    saveFrame()
 

