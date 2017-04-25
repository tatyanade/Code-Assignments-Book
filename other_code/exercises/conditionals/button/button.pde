PImage img;

void setup(){
 size(300,300);
 background(200);
 rectMode(CENTER);
 img = loadImage("cursor1.png");
}

void draw(){
  fill(255);

  rect(width/2,height/2,100,100);
   image(img,width/2+60,height/2+50,12*2,19*2);

}

void mouseClicked(){
  
    saveFrame();
  exit();
}