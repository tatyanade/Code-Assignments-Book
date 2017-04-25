void setup(){
  
  size(400,400);
}


void draw(){
  
  for(int x = 0; x<width; x++){
    float a = map(x,0,width,0,255);
    stroke(255-a,a/4,a );
    line(x,0,x,height);
  }
  
  save("gradient.jpg");
}
