
function setup(){
	createCanvas(400,400);
	background (192); 
	fill(255); 
	strokeWeight(4); 

    //draws 7 circles
	for (var i=0; i<7; i++) {
	  //sets space between circle centers to 50
	  var x = 50 + i*50;
	  //draws circles of radius 30
	  ellipse(x, 100, 30, 30);
	}	  
}