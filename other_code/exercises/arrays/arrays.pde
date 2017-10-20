float n=0; //noise variable
float inc=0.01; //noise variable increase
int x=0; //x coordinate of line
float[] arrays;
float yy = height;
float xy=0;

void setup() {
  size(300, 300);
  background(200);
  arrays = new float[width];
  stroke(#BC4865);
  
}

void draw() {
}

void keyPressed() {
  background(200);
  for (int x=0; x<width; x++) {
    arrays[x]= noise(n)*100+80; //generate noise value which will give us the y coordinate
    line(x, height, x, arrays[x]); //draw a line at x that goes from bottom of screen to y value

    n=n+inc; //increase our noise variable to get new y
    if (x<width-10) {
      float k = arrays[x];
      float j = arrays[x+5];
      float xy = x+1;
      float l = arrays[x+10];


      if (j<k&&l>j) {
        drawFlag(xy, j);
      }



      println("xy:"+xy); //lets check what it is
      println("yy:"+j);
    }
  }
  n=random(5);
}


void drawFlag(float xy, float j){
  fill(#F9FFB7);
        strokeWeight(2);
        stroke(100);
        line(xy, j, xy, j-50);
        triangle(xy, j-50, xy, j-80, xy+30, j-65);
}