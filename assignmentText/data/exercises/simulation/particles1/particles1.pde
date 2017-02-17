Particle parray[];
int nx = 40; 
int ny = 40; 
int nParticles = nx*ny; 
PImage curs; 

void setup() {
  size(600, 600); 
  curs = loadImage("cursor1.png"); 
  parray = new Particle[nParticles];
  int index = 0; 
  for (int i=0; i<nx; i++) {
    for (int j=0; j<ny; j++) {
      float x = map(j, -2, nx+1, 0, width); 
      float y = map(i, -2, ny+1, 0, height); 
      parray[index] = new Particle(x, y);
      index++;
    }
  }
  
  background(255);
}

void draw() {
  
  // background(255); 
  fill(255,255,255, 64); 
  noStroke(); 
  rect(0,0,width,height); 
  
  for (int i=0; i<nParticles; i++) {
    if (mousePressed) {
      parray[i].update();
    }
    parray[i].draw();
  }
  image(curs, mouseX, mouseY, 12*3, 19*3);
}

void mousePressed(){
  background(255); 
}

void keyPressed() {
  saveFrame();
}

class Particle {
  float px; 
  float py; 
  float vx; 
  float vy; 

  Particle(float x, float y) {
    px = x; 
    py = y; 
    vx = 0; 
    vy = 0;
  }
  void draw() {
    noStroke(); 
    fill(0); 
    ellipse(px, py, 3, 3);
  }
  void update() {
    float dx = mouseX - px; 
    float dy = mouseY - py; 
    float dh = sqrt(dx*dx + dy*dy); 
    if (dh > 0) {
      float fx = dx/(dh*dh); 
      float fy = dy/(dh*dh);
      float ax = fx * 4; 
      float ay = fy * 4; 
      vx += 0-ax; 
      vy += 0-ay; 
      vx *= 0.95; 
      vy *= 0.95; 
      px += vx; 
      py += vy;
    }
  }
}