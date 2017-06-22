PImage orderedImage;
PImage img;


float rs[] = new float[90000];
float gs[] = new float[90000];
float bs[] = new float[90000];

float or,og,ob;

float oldTotal,total;

int c=0;


void setup() {
  size(300, 300);
  loadPixels();
  orderedImage = createImage(300, 300, RGB);
  img = loadImage("1.jpg");
  orderedImage.loadPixels();

  img.resize(300, 300);

  //run through pixels 
  for (int x = 0; x < 300; x++) {
    for (int y = 0; y < 300; y++) {
      int loc = width*y+x; 

      // The functions red(), green(), and blue() pull out the 3 color components from a pixel.
      float r = red(img.pixels[loc]);
      float g = green(img.pixels[loc]);
      float b = blue(img.pixels[loc]);

//find the lightest pixel
       total = r+g+b;
      if(total>oldTotal){
        //new winner
       oldTotal=total; 
       //set it as the next pixel
       orderedImage.pixels[0]=color(r,g,b);
      
      }

      //if (x==0&&y==0) {
      //  // Set the display pixel to the image pixel
      //  pixels[loc] =  color(r, g, b);
      //}else{
      //  //sort pixels
      //  dist(r,or,g,og,b,ob);
        
      //}
      or=r;
      og=g;
      ob=b;
    }
  }
  updatePixels();
}

void draw() {
}

void keyPressed() {
  saveFrame();
}