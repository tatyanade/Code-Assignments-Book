int num = 100;
float[] xs = new float[num];
float[] ys = new float[num];

PImage img;

void setup() {
  size(300,300);
  fill(0);  

  img = loadImage("cursor1.png");
}

void draw() {
  background(255);
 //move along array
  for (int i=num-1; i>0; i--) {
   

    xs[i]=xs[i-1];
    ys[i]=ys[i-1];
    
  }
  

  xs[0]= mouseX;
  ys[0]= mouseY;
  
   for (int i=num-1; i>0; i--) {
    xs[i]=xs[i]+random(-1,1);
    ys[i]=ys[i]+random(-1,1);
   line(xs[i], ys[i], xs[i-1], ys[i-1]);
   }
   image(img,mouseX,mouseY ,12*2, 19*2);
}

void mouseReleased(){
 saveFrame(); 
}