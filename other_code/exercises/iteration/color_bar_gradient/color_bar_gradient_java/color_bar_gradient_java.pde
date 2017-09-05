// Color Bar Gradient

int nRectangles = 17; 
color colorA = color(255, 255, 0);
color colorB = color(255, 0, 255);

void setup() {
  size(400, 400);
}


void draw() {
  background(255);
  rectMode(CENTER); 
  noStroke(); 
  
  for (int i=0; i<nRectangles; i=i+1) {
    float fraction = float(i)/(nRectangles-1);
    color aBarColor = lerpColor(colorA, colorB, fraction);
    float barX = map(i, 0,nRectangles-1, 25,width-25); 
    
    fill(aBarColor);
    rect(barX, height/2, 20,360);
  }
}

void mousePressed() {
  colorA = color(random(0, 255), random(0, 255), random(0, 255));
  colorB = color(random(0, 255), random(0, 255), random(0, 255));
}

void keyPressed(){
  if (key == 's'){
    save("../color_bar_gradient.png");
  }
}