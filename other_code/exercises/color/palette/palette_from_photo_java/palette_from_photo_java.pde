// Exercises: Color
// Palette from Photo

PImage img;

void setup() {
  size(300, 300);
  strokeWeight(2);
  stroke(40); 

  img = loadImage("img.png"); 
  image(img, 0, 0, 450, 300); //draw image to the screen 
  loadPixels(); //load pixels on the screen

  for (int i = 0; i < 5; i++) { //loop through each box
    fill(pixels[int(random(0, pixels.length))]); //set color from the pixel array
    rect(250, i*60+10, 40, 40);
  }
}

void draw() {
}

void mousePressed(){
 saveFrame("../palette.png"); 
}