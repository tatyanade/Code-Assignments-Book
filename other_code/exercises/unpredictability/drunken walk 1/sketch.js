var x;
var y;

function setup() {
	createCanvas(300,300)

	x = 150;
	y = 150;
	noStroke();
	fill(255);

}

function movePoint(){
	var probability = int(random(0,4));
	if (probability == 0){
		x+=1;
	}
	else if (probability == 1){
		x-=1;
	}
	else if (probability == 2) {
		y-=1;
	}
	else {
		y+=1
	}
}

function draw() {
//	fill(251,128,114,10);
//  rect(0,0,width,height);
  movePoint()
  fill(0);
  ellipse(x,y,1,1);
}
