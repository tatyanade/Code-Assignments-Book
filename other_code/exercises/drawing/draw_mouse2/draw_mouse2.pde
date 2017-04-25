int num = 100;
int[] xs = new int[num];
int[] ys = new int[num];

PImage img;

void setup() {
  size(300,300);
  fill(0, 100);
  img = loadImage("cursor1.png");
}

void draw() {
  background(255);
  noStroke();
  for (int i=num-1; i>0; i--) {
    xs[i]=xs[i-1];
    ys[i]=ys[i-1];
  }

  xs[0]= mouseX;
  ys[0]= mouseY;
  
   for (int i=num-1; i>0; i--) {

   ellipse(xs[i], ys[i], 50-i/2,50-i/2);
   }
   image(img,mouseX,mouseY ,12*2, 18*2);
}

void mouseReleased(){
 saveFrame(); 
}