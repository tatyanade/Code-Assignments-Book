PImage frames[] = new PImage[15]; //array for image frames
int f=0;

void setup() {
  background(0);
  size(300, 300);
  
  //load frames into the array
  for (int i=0; i<frames.length; i++) {
    String ii = nf(i, 2);
    frames[i]=loadImage("frame_"+ii+".png");
  }
}

void draw() {

  image(frames[f], 0, 50);
  
  if (f<frames.length-1) { 
    f++; //increase frame variable
  } else {
    f=0;
  }
}