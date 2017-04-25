float p;
      color c = color(255,255,0);
    color d = color(255,0,255);
    color interA;
    
void setup(){

  p = random(0,1);
  size(400,400);
}


void draw(){

  for(int x = 0; x<17; x=x+1){
float i = float(x)/17.0;
    interA = lerpColor(c, d, i);
    fill(interA);
    println(i);
    rect(x*width/17,height/2,18,18);
  }
  
  save("gradient2.jpg");
}
void mousePressed(){
     c = color(random(0,255),random(0,255),random(0,255));
    d = color(random(0,255),random(0,255),random(0,255));
}