// Checker board generation
// Using nested iteration

void setup() {
  size(401, 401);
}

void draw() {

  //
  int a=1;
  //color of each individual square
  int c=0;

  for (int x=0; x<400; x=x+50) {
    //alternates the fill between black and white
    a=a*-1;
    for (int y=0; y<400; y=y+50) {
      //alternates the fill between black and white
      a=a*-1;
      if (a<0) {
        //set color to black
        c=0;
      }
      if (a>0) {
        //set color to white
        c=255;
      }
      //changes fill to c
      fill(c);
      //draws the checkers square
      rect(x, y, 50, 50);
    }
  }
}

void keyPressed() {
  if (key == 's') {
    save("../checkers.png");
  }
}