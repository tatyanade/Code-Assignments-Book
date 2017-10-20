//Exercises: Color 
//Every Color

int r=0;
int g=0;
int b=0;

void setup() {
  size(400, 400);
}

void draw() {
  background(r, g, b);
 // println("r:"+r+",g:"+g+",b:"+b);
  if (r<255) {
    r++;
  } else if (g<255) {
    g++;
    r=0;
  } else if (b<255) {
    b++;
    r=0;
    b=0;
  } else {
    r=0;
    g=0;
    b=0;
  }
}

void mousePressed(){
 saveFrame("../everyColor.png");
}