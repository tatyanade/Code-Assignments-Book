import processing.video.*;
PImage img;
int pointillize = 16;

Capture video;

void setup() {
  size(300, 300);
  video = new Capture(this, 300, 300, 15);
  background(0);
  smooth();
}
void draw() {

  if (video.available()) {
    video.read();
  }
  // Tinting using mouse location
  tint(mouseX, mouseY, 255);
  // Width and height according to mouse


  // Pick a random point
  int x = int(random(video.width));
  int y = int(random(video.height));
  int loc = x + y*video.width;
  // Look up the RGB color in the source image
  loadPixels();
  float r = red(video.pixels[loc]);
  float g = green(video.pixels[loc]);
  float b = blue(video.pixels[loc]);
  noStroke();
  // Draw an ellipse at that location with that color
  fill(r, g, b, 100);

  customPixel(x, y, pointillize, pointillize, 5);
}

void customPixel(float x, float y, float radius1, float radius2, int npoints) {
  float angle = TWO_PI / npoints;
  float halfAngle = angle/2.0;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius2;
    float sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}