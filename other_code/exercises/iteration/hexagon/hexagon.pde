PShape s;
void setup(){
  size(300,300);
}

void draw(){
  hexagon(100,100,30);
}


void hexagon(float x,float y,float side){
  beginShape();
  vertex(x-side/2,y-side/2);
  vertex(x+side/2,y-side/2);
  vertex(x+2*side/2,y);
  vertex(x+side/2,y+side/2);
  vertex(x-side/2,y+side/2);
  vertex(x-2*side/2,y);
  
  
  endShape(CLOSE);
    
    
  
}