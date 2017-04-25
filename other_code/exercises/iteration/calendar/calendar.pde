void setup() {
  size(400, 400);
  smooth();
background(255);
}

void draw() {
rectMode(CENTER);
  for (int y=0; y<31; y=y+1) {
    if (day()==y) {
      fill(250,100,100);
      
      rect(y*12+20, height/2, 10, 10);
    } else {
      fill(#004BA5);
      noStroke();
      rect(y*12+20, height/2, 10, 50);
    }
  }
  save("calendar.jpg");
}

