PImage img;

void setup(){
  size(300,300);
 img = loadImage("img.png"); 
 image(img, 0, 0,450, 300);
 loadPixels();
 stroke(pixels[int(random(0,pixels.length))]);
 for(int i = 0; i < 5; i++){
  fill(pixels[int(random(0,pixels.length))]);
  rect(250,i*60+10, 40, 40);
 }
}