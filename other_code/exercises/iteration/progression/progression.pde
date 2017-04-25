void setup(){
size(430,430);
  noFill();

  ellipseMode(CORNER);
}


void draw(){
    background(255);


  for(int i =1; i<2200;i=i*2){
        strokeWeight(i/100);
        stroke(0,50);
   ellipse(10,10,i/5,i/5); 
  }
  
  
  
}
