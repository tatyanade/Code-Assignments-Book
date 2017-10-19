// Plant flags on the peaks in a (provided) Perlin-noise terrain.

float terrain[];

void placeFlagsOnTerrain() {
  // PLACE YOUR CODE HERE
  
  for (int i=1; i<(width-1); i++) {
    float yA = terrain[i - 1]; 
    float yB = terrain[i + 0];
    float yC = terrain[i + 1];

    if ((yA > yB) && (yC > yB)) { 
      drawFlag(i, yB); // Found a peak, draw a flag!
    }
  }
}

void drawFlag (float flagx, float flagy) {
  // For example...
  stroke (0, 0, 0); 
  line(flagx, flagy, flagx, flagy - 60);
  triangle(flagx, flagy - 60, flagx, flagy - 50, flagx + 20, flagy - 55);
}

//----------------------------------------------------------------------
// There should be no reason for you to modify any code below this line: 
void setup() {
  size(300, 300);
  terrain = new float[width];
}

void draw() {
  background(160, 190, 255);
  calculateTerrain();
  renderTerrain(); 
  placeFlagsOnTerrain();
}

void calculateTerrain() {
  for (int i=0; i<width; i++) {
    float val = noise(i/180.0 + millis()/2000.0);
    float y = map(val, 0, 1, height*0.20, height*0.95); 
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