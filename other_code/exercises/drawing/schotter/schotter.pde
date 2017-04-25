float r=0;
float v=0;

int w = 20;

//high res image export
PGraphics pg;
int sx = 2200;//5100from 5400
int sy = 1400;//2200from 2288

void setup() {
  size(300,300);
smooth();



}

void draw() {
  //high res image hack

  background(255);
   stroke(0);
  smooth();
  noFill();
//  for (int x=60; x<width-40; x=x+40) {
//
//    stroke(0, 200, 100);
//    // rect(x, 100, 40, 40);  
//
//    rotate(r);
//  }

 

  for (int y=w; y<height-w; y=y+w) {

    for (int x=w; x<width-w; x=x+w) {


      pushMatrix(); 
      r=random(-v, v);
      //float t=v*100;

      translate(x+w/2, y+w/2);
      rotate(r);
      rect(-w/2,-w/2, w, w); 
       popMatrix();
    }
    v=v+0.05;
  }

  //high res image hack


  saveFrame();

  exit();
}