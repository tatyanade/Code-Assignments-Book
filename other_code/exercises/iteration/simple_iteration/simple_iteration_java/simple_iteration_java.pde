// Simple iteration. 
// Uses introductory "immediate mode"
// With no setup() or draw() functions. 

size(400, 400);
background (192); 

stroke(0); 
fill(255); 
strokeWeight(4); 

for (int i=0; i<7; i++) {
  float x = 50 + i*50;
  ellipse(x, 100, 30, 30);
}

saveFrame("../simple_iteration.png"); 