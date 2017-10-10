// Grid with Randomness

void setup() {
  size(400, 400);
  smooth();
  noLoop(); 
}

void draw() {
  background(255); 
  strokeWeight(2);
  stroke(0); 
  noFill(); 
  
  for (int y=0; y<8; y++) {
    for (int x=0; x<8; x++) {
      float px = x * 50; 
      float py = y * 50; 
      //the chance of drawing a circle is 5%
      //otherwise, it draws a square
      float chance = random(1); 
      if (chance < 0.05){
        ellipse(px+25, py+25, 25, 25);
      } else {
        rect(px+5, py+5, 40, 40);
      }
    }
  }
}

void keyPressed(){
  if (key == 's'){
    saveFrame("../grid_with_randomness.png"); 
  }
}