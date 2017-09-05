// Checker board generation
// Using nested iteration

void setup() {
  size(401, 401);
}



void draw() {

  int a=1;
  int c=0;

  for (int i=0; i<400; i=i+50) {
    a=a*-1;
    for (int j=0; j<400; j=j+50) {
      a=a*-1;
      if (a<0) {
        c=0;
      }
      if (a>0) {
        c=255;
      }
      fill(c);
      rect(i, j, 50, 50);
    }
  }
}

void keyPressed() {
  if (key == 's') {
    save("../checkers.png");
  }
}