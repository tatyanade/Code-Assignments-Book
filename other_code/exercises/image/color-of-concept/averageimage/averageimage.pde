PImage imgs[] = new PImage[10]; //array of images
PImage averageImage;
PImage img;

float r, g, b, ar, ag, ab;
float rs[] = new float[90000];
float gs[] = new float[90000];
float bs[] = new float[90000];


void setup() {
  size(300, 300);
  loadPixels();
  averageImage = createImage(300, 300, RGB);
  //img = loadImage("1.jpg");
  //load images into imgs array
  for (int i = 0; i < imgs.length; i++) {
    imgs[i] = loadImage(i+".jpg");
  }
  //img.resize(300,300);
  //img.loadPixels();
  for (int i = 0; i < imgs.length; i++) { //run through each image
    imgs[i].resize(300, 300); //resize it
    imgs[i].loadPixels(); //load pixels
  }


  for (int i = 0; i < imgs.length; i++) { //run through each image


    //run through pixels 
    for (int x = 0; x < 300; x++) {
      for (int y = 0; y < 300; y++) {
        int loc = width*y+x; 

        // The functions red(), green(), and blue() pull out the 3 color components from a pixel.
        float r = red(imgs[i].pixels[loc]);
        float g = green(imgs[i].pixels[loc]);
        float b = blue(imgs[i].pixels[loc]);

       rs[loc] = rs[loc]+r;
        gs[loc] =gs[loc]+g;
        bs[loc] = bs[loc]+b;
        ar=rs[loc]/i;
        ag=gs[loc]/i;
        ab=bs[loc]/i;

        // Set the display pixel to the image pixel
        pixels[loc] =  color(ar, ag, ab);
      }
    }
    updatePixels();
  }
}

void draw() {


}

void keyPressed() {
  saveFrame();
}