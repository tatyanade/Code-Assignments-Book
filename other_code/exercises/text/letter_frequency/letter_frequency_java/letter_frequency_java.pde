int data[] = {
  14810, 
  2715, 
  4943, 
  7874, 
  21912, 
  4200, 
  3693, 
  10795, 
  13318, 
  188, 
  1257, 
  7253, 
  4761, 
  12666, 
  14003, 
  3316, 
  205, 
  10977, 
  11450, 
  16587, 
  5246, 
  2019, 
  3819, 
  315, 
  3853, 
  128};

void setup() {
  size(400, 400);
}

void draw() {
  background(255); 
  int maxval = 0; 
  for (int i=0; i<26; i++) {
    if (data[i] > maxval) {
      maxval = data[i];
    }
  }

  for (int i=0; i<26; i++) {
    float rw = width/(26+2.0); 
    float rx = map(i,0,25, rw,width-rw*2); 
    float ry = height-rw*2; 
    float rh = 0-map(data[i], 0, maxval, 0,height-3*rw); 
    noStroke(); 
    fill(64);
    rect(rx,ry,rw-2,rh); 
    
    fill(0); 
    textAlign(CENTER); 
    text(char(i+'A'), rx+rw/2-1, ry+rw); 
  }
}

void keyPressed(){
  saveFrame("../letter_frequency.png"); 
}