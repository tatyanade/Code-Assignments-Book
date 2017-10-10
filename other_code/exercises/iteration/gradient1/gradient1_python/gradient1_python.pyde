def setup():
    size(400, 400)
    
def draw():
    background(0)
    for x in range(0,width):
        #maps color values from full range of value to pixels available, creating a smooth and full transition
        r = map(x, 0, width, 255, 0)
        g = map(x, 0, width, 0, 255)
        b = map(x, 0, width, 0, 255)
        
        #draws a line that has the specific rgb value
        stroke(r,g,b)
        line(x, 0, x, height)
        