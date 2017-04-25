PImage img, img2;
color r;

void setup(){
  size(400,400);
  img = loadImage("monet.jpg");
  img2 = loadImage("cursor1.png");
  noStroke();
  smooth();
  
}


void draw(){
      image(img,0,0);
       image(img2,mouseX+10,mouseY+10 ,30, 50);
  r = get(mouseX, mouseY);
stroke(255);
strokeWeight(3);
  fill(red(r),0,0);
  ellipse(140,200,50,50);
  fill(0,green(r),0);
  ellipse(200,200,50,50);
  fill(0,0,blue(r));
  ellipse(260,200,50,50);
 

}

void mouseReleased(){
 saveFrame(); 
}