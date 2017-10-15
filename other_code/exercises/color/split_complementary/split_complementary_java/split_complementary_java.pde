void setup() {
  size(400, 400);
}

void draw() {
  colorMode(HSB); 
  background(255, 0, 255); // white

  noStroke();
  int nPieces = 12; 
  float diam = width * 0.8; 

  for (int i=0; i<nPieces; i++) {
    float frac = ((float)i / (float)nPieces);

    float h = 255 * getHue(frac); 
    fill(h, 255, 255); 
    float ang0 = (float)(i+0) / (float)nPieces * TWO_PI; 
    float ang1 = (float)(i+1) / (float)nPieces * TWO_PI;
    arc(width/2, height/2, diam, diam, ang0, ang1);
  }
  
  fill (255, 0, 255); 
  ellipse(width/2, height/2, diam/2, diam/2); 
  
  
  float mx = mouseX - width/2;
  float my = mouseY - height/2; 
  float mouseFrac = (1.0 - (1.0/(nPieces*2.0)) + atan2(my, mx)/ TWO_PI)%1.0; 
  float mouseHue = 255 * getHue(mouseFrac); 
  fill(mouseHue, 255,255); 
  ellipse(width/2, height/2, 30,30); 
  println(mouseFrac); 
  
  
}


float getHue(float fraction){
  return pow(((fraction + 0.25)%1.0), 1.3); 
}




void keyPressed() {
  saveFrame("../split_complementary.png");
}