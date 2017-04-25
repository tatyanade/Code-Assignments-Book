void setup(){
  size(300,300);
  background(128,177,211);
  noStroke();
  smooth();
  
}

void draw(){
   fill(251,128,114);
 ellipse(130,140,180,180);
  fill(255,255,179);
 ellipse(180,200,80,80);
 fill(141,211,199);
 //rect(40,30,100,100);
 for(int i=2; i<6;i++){
   int x=50*i;

   ellipse(x,150,20,20);
 }

  
}

void mousePressed(){
 saveFrame(); 
}