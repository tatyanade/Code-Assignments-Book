int numParts = 5;
PImage head;
PImage body;
PImage feet;
int value;

void setup() {
  size(300, 300);
  background(255);

  head = loadImage("head" + str(int(random(numParts))+1) + ".png"); 
  body = loadImage("body" + str(int(random(numParts))+1) + ".png");
  feet = loadImage("feet" + str(int(random(numParts))+1) + ".png");

  image(head, 0, 0);
  image(body, 0, 0);
  image(feet, 0, 0);
}



void mousePressed() {
  noStroke();
  background(255);
  head = loadImage("head" + str(int(random(numParts))+1) + ".png"); 
  body = loadImage("body" + str(int(random(numParts))+1) + ".png");
  feet = loadImage("feet" + str(int(random(numParts))+1) + ".png");
  fill(250);
  rect(0, 0, width, height/3);
  fill(230);
  rect(0, height/3, width, height/3);
  fill(255);
  rect(0, 2*height/3, width, height/3);
  image(head, 0, 0);

  image(body, 0, 0);

  image(feet, 0, 0);
}

void draw() {
}

void keyPressed() {

  saveFrame();
}