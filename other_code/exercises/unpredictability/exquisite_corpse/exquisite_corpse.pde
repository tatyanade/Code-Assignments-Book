int numParts = 5;
PImage head;
PImage body;
PImage feet;
int value;

void setup(){
 size(300,300);
 background(255);
 
 head = loadImage("head" + str(int(random(numParts))+1) + ".png"); 
 body = loadImage("body" + str(int(random(numParts))+1) + ".png");
 feet = loadImage("feet" + str(int(random(numParts))+1) + ".png");

 image(head,0,0);
 image(body,0,0);
 image(feet,0,0);
}



void mousePressed(){
 background(255);
 head = loadImage("head" + str(int(random(numParts))+1) + ".png"); 
 body = loadImage("body" + str(int(random(numParts))+1) + ".png");
 feet = loadImage("feet" + str(int(random(numParts))+1) + ".png");

 image(head,0,0);
 image(body,0,0);
 image(feet,0,0); 
  
}

void draw(){
}