float mx[];
float my[]; 
PImage img;

void setup() {
  size(400, 400); 
  mx = new float[100];
  my = new float[100];
  img = loadImage("cursor1.png");
}

void mousePressed(){
  background(255);
  for (int i=0; i<100; i++) {
    mx[i] = mouseX;
    my[i] = mouseY;
  }
}

void draw() {
  noStroke(); 
  fill(200,200,200, 10); 
 
  rect(0,0, width, height); 

  noFill(); 
  stroke(0); 
  beginShape();
  for (int i=0; i<100; i++) {
    vertex(mx[i], my[i]);
  }
  endShape(); 

  if (mousePressed) {
    for (int i=0; i<99; i++) {
      mx[i] = mx[i+1];
      my[i] = my[i+1];
    }
    mx[99] = mouseX; 
    my[99] = mouseY;
  } else {
    for (int i=1; i<99; i++) {
      mx[i] = (mx[i-1] + mx[i] + mx[i+1])/3.0;
      my[i] = (my[i-1] + my[i] + my[i+1])/3.0;
    }
  }
}

void keyPressed(){
   image(img, mouseX,mouseY,12*2,19*2);
 saveFrame(); 
}