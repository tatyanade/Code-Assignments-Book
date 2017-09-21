function setup(){
	createCanvas(401, 401)
}

function draw() {

  var a=1;
  var c=0;

  for (var i=0; i<400; i=i+50) {
    a=a*-1;
    for (var j=0; j<400; j=j+50) {
      a=a*-1;
      if (a<0) {
        c=0;
      }
      if (a>0) {
        c=255;
      }
      fill(c);
      rect(i, j, 50, 50);
    }
  }
}
