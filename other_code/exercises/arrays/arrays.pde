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
  for (int x=0; x<width; x++) {
    arrays[x]= noise(n)*100+80; //generate noise value which will give us the y coordinate
    line(x, height, x, arrays[x]); //draw a line at x that goes from bottom of screen to y value

    n=n+inc; //increase our noise variable to get new y
    if (arrays[x]<yy) {
      yy=arrays[x];
      xy=x;
      println("yes");
    }
    println("xy:"+xy); //lets check what it is
    println("yy:"+yy);
  }

  fill(#F9FFB7);
  strokeWeight(2);
  stroke(100);
  line(xy, yy, xy, yy-50);
  triangle(xy, yy-50, xy, yy-80, xy+30, yy-65);
}

void draw() {
}
void keyPressed() {
  saveFrame();
}