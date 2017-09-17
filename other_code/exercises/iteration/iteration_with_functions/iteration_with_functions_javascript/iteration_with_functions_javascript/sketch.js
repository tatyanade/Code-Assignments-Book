// Iteration with Functions. 
// A function which drawa a smily face, 
// is invoked inside a nested iteration.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  smooth(); 

  for (var i=0; i<5; i++) {
    for (var j=0; j<5; j++) {
      var y = i*75 + 50; 
      var x = j*75 + 50; 
      drawFace(x, y);
    }
  }
}


function drawFace(x, y) {
  stroke(0, 0, 0);
  strokeWeight(2.0); 
  push();
  translate(x, y); 
  ellipse(0, 0, 60, 60);  
  ellipse (11, -7, 10, 10);
  ellipse (-11, -7, 10, 10);
  arc(0, 0, 30, 30, PI*0.25, PI*0.75); 
  pop();
}
