void setup(){
  size(300,300);
  noStroke();
  
  fill(200,200,100);
  background(255);
  ellipse(150,150,100,100);
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255);
  if(int(random(2)) == 0){
    text("T", 150,150);
  }
 else{
    text("H", 150,150);
 }  
}

void draw(){

}