

void setup(){
  size(300,300);
  background(0);
  smooth();
  stroke(255);
  strokeWeight(4);
  
  line(width/4+20, 120,width/4+20,240);
  line(3*width/4-40, 50,3*width/4-40,240);
  noStroke();
  arc(width/4+20, 110, 120, 120, PI, TWO_PI, OPEN);
  
  arc(3*width/4-30, 100, 100, 100, -1*HALF_PI, HALF_PI, OPEN);
  
  arc(3*width/4-30, 190, 100, 100, -1*HALF_PI, HALF_PI, OPEN);
  
}

void draw(){
}

void mousePressed(){
 saveFrame(); 
}