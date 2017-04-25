void setup(){
  size(400,400);
colorMode(HSB);
for(int i=0;i<400;i++){
 stroke(i*255/400,255,255);
line(i,0,i,height); 
}
  
}


void draw(){

saveFrame();
stop();
  
}