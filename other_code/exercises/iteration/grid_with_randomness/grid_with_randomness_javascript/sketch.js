// Grid with Randomness

function setup() {
  createCanvas(400, 400);
  smooth();
  noLoop(); 
}

function draw() {
  background(255); 
  strokeWeight(2);
  stroke(0); 
  noFill(); 
  
  for (var y=0; y<8; y++) {
    for (var x=0; x<8; x++) {
      var px = x * 50; 
      var py = y * 50; 
      
      //the chance of drawing a circle is 5%
      //otherwise, it draws a square
      var chance = random(1); 
      if (chance < 0.05){
        ellipse(px+25, py+25, 25, 25);
      } else {
        rect(px+5, py+5, 40, 40);
      }
    }
  }
}