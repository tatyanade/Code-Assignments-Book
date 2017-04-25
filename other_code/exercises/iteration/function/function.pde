float p;
      color c = color(255,255,0);
    color d = color(255,0,255);
    color interA;
    
void setup(){
background(50);
  p = random(0,1);
  size(400,400);
  smooth();
}


void draw(){

  for(int x = 0; x<17; x=x+1){
      for(int y = 0; y<25; y=y+1){
arrow(x*60+3,y*50+25);
      }
  }
  
  save("function.jpg");
  stop();
}
void arrow(int x, int y){
  strokeWeight(2);
  stroke(255,0,255);
   line(x+20,y+20,x,y); 
    line(x+20,y-20,x,y); 
  line(x,y,x+45,y); 
  
}
