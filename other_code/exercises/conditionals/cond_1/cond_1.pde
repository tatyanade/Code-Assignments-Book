PImage img;

void setup(){
 size(300,300);
 background(255, 120, 102);
 rectMode(CENTER);
 img = loadImage("cursor1.png");
}

void draw(){
  fill(255,102);

  
   image(img,width/2+50,height/2,12*2,19*2);
  

}

void mouseClicked(){
  
    saveFrame();
  exit();
}