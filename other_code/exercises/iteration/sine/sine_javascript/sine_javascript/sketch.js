function setup() {
  createCanvas(300, 300);
  background(255);

  noStroke();
  fill(0);
  var angle = 0.0;
  for (var x = 0; x <= width; x += 1) {
    var y = height/2 + (sin(angle) * 35.0);
    rect(x, y, 2, 4);
    angle += PI/40.0;
  }
}