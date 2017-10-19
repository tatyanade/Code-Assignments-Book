float a=0;
PImage mouse;
void setup(){
 size(400,400);
 background(150);
 smooth();
 strokeWeight(2);
 stroke(255);
 mouse = loadImage("cursor1.png");

 
}

void draw(){
 
  
  
}

void mousePressed(){
  background(200);
  a=mouseX;
  float b = a/width*PI;
  println(b);
  for(int i=-100;i<width+100;i=i+3){
      for(int j=-100;j<width+100;j=j+20){
    pushMatrix();
    float c = random(-b,b);
    translate(i,0);
    rotate(c);
    
   line(i,j,i,j+20);
   popMatrix();
 }
}
 image(mouse,350,200,(12*2)*1.33,(19*2)*1.33);
}

void keyPressed(){
 saveFrame(); 
}