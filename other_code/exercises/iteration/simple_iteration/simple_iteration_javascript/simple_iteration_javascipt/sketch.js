
function setup(){
createCanvas(400,400);
background (192); 

stroke(0); 
fill(255); 
strokeWeight(4); 

for (var i=0; i<7; i++) {
  var x = 50 + i*50;
  ellipse(x, 100, 30, 30);
}
  
  
}