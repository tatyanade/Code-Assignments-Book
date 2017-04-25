color p;
color c, d;
void setup(){
  size(400,400);
  c= color(random(255),random(255),random(255));
d= color(random(255),random(255),random(255));

}

void draw(){
  
  
  for(int i=0; i<width;i++){
    p=lerpColor(c,d,i/400.0);
    stroke(p);
   line(i,0,i,height); 
  }


}


void mousePressed(){
 
  c= color(random(255),random(255),random(255));
d= color(random(255),random(255),random(255));
   saveFrame();
}