// Exercises: Array
// Plant the Flag

// A bumpy "landscape" or terrain, 
// consisting of an array of height values, 
// has been provided to you. 
// Write code which searches through this array, 
// and draws "flags" on the peaks (i.e. local maxima).

float terrain[];
PImage img;

void placeFlagsOnTerrain() {
  // PLACE YOUR CODE HERE TO DETECT HILLS
  
  for (int i=1; i<(width-1); i++) {
    float yA = terrain[i - 1]; 
    float yB = terrain[i + 0];
    float yC = terrain[i + 1];

    if ((yA > yB) && (yC > yB)) { 
      drawFlag(i, yB); // We found a peak... draw a flag!
    }
  }
}

void drawFlag (float flagx, float flagy) {
  // For example...
  stroke (0, 0, 0); 
  line(flagx, flagy, flagx, flagy - 60);
  rect(flagx, flagy-60, 25, 15);
}

//----------------------------------------------------------------------
// There should be no reason for you to modify any code below this line: 
void setup() {
  size(300, 300);
  terrain = new float[width];
  img = loadImage("flag.png");
}

void draw() {
  background(160, 190, 255);
  calculateTerrain();
  renderTerrain(); 
  placeFlagsOnTerrain();
}

void calculateTerrain() {
  noiseDetail(2,0.2); 
  noiseSeed(12345); 
  for (int i=0; i<width; i++) {
    float val = noise(i/40.0 + frameCount/50.0);
    float y = map(val, 0, 1, height*0.25, height*0.98); 
    terrain[i] = y;
  }
}

void renderTerrain() {
  stroke(10, 90, 10); 
  for (int i=0; i<width; i++) {
    float y = terrain[i]; 
    line (i, height, i, y);
  }
}

void keyPressed(){
  saveFrame("../plant_the_flag.png"); 
}