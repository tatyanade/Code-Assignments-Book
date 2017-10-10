var x;
var y;

function setup() {
	createCanvas(300,300)
	x = 150;
	y = 150;
	noStroke();
	fill(151, 168, 196);

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
  background(255)
  movePoint()
  ellipse(x,y,10);
}
