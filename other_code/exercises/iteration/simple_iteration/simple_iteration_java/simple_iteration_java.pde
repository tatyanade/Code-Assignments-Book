// Simple iteration. 
// Uses introductory "immediate mode"
// With no setup() or draw() functions. 

size(400, 400);
background (192); 
fill(255); 
strokeWeight(4); 

//draws 7 circles
for (int i=0; i<7; i++) {
  //sets space between circle centers to 50
  float x = 50 + i*50;
  //draws circles of radius 30
  ellipse(x, 100, 30, 30);
}

saveFrame("../simple_iteration.png"); 