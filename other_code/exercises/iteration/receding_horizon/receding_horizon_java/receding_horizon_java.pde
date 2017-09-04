// Receding Horizon
// Iteration exercise 
// Java solution

size(800, 800);
background(255);
strokeWeight(3.0); 
stroke(0); 
smooth();

for (int i=0-100; i<=width+100; i=i+1) {
  float xTop = width/2 + i*10; 
  float xBot = width/2 + i*55; 
  line (xTop, -1, xBot, height); 
}

save("../receding_horizon.png");