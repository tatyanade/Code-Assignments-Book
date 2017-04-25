PImage cursor;

void setup(){
  size(300,300);
  background(255);
  stroke(0);
  cursor = loadImage("cursor1.png");
}
void draw(){
  if(mousePressed){
 line(pmouseX, pmouseY, mouseX,mouseY);
  
}

}

void mouseReleased(){
  image(cursor, mouseX,mouseY,2*12,2*19);
saveFrame();
}