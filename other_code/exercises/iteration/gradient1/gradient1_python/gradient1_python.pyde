def setup():
    size(400, 400)
    
def draw():
    background(0)
    x = 0
    while (x < width):
        r = map(x, 0, width, 255, 0)
        g = map(x, 0, width, 0, 255)
        b = map(x, 0, width, 0, 255)
        
        stroke(r,g,b)
        line(x, 0, x, height)
        x+=1
        