int x = -100;

void setup() {
  size(300, 300);
  background(255);
  rectMode(CENTER);
  fill(150);
  noStroke();
  fill(210);
  rect(width/2, height/2, 250, 10);
  smooth();


}
void draw() {
  rectMode(CORNER);
    fill(0);
  rect(25,height/2-5,50,10);
  fill(#FFB936);
  pushMatrix();
  translate(-200,40);
  bezier(260,38,226,169,362,109,254,35);
  
  fill(#FF8258);
  scale(0.7);
  translate(120,50);
  bezier(260,38,226,169,362,109,254,35);
  //ellipse(width/2+x, height/2, 20, 20);
  popMatrix();


}

void keyPressed(){
 saveFrame(); 
}