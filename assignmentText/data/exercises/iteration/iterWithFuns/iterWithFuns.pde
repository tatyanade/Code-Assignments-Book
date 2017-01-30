void setup() {
  size(400, 400);
}

void draw() {
  background(255);

  for (int i=0; i<5; i++) {
    for (int j=0; j<5; j++) {
      float y = i*75 + 50; 
      float x = j*75 + 50; 
      drawFace(x, y);
    }
  }
}


void drawFace(float x, float y){
  stroke(0,0,0);
  strokeWeight(1.5); 
  pushMatrix();
  translate(x,y); 
  ellipse(0,0, 60,60);  
  ellipse (11,-7,   10,10);
  ellipse (-11,-7,  10,10);
  arc(0,0, 30,30, PI*0.25, PI*0.75); 
  popMatrix();
}

void keyPressed(){
  saveFrame("interactionWithFunctions.png"); 
}