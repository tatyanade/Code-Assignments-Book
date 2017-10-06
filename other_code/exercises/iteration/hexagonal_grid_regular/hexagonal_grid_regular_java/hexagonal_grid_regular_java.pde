//radius of shape is equal to side length
int radius = 15;

float hex_height = radius * sqrt(3);

void setup(){
  size(300,300);
  drawHexagons();
}

void drawHexagons(){
  float x;
  float y;
  //drawing hexagons on the grid
  for (int i = 0; i<(width/radius); i+=1){
    for (int j = 0; j<(width/radius); j+=1){
      x = i*(radius*1.5);
      
      //if an even row, fraw hexagon
      if ((i%2) == 0){
        y = j*hex_height;
      }
      
      //if an odd row, draw hexagons half a hexagon lower so they tessellate
      else{
        y = j*hex_height + hex_height/2 ;
      }
      fill(random(255));
      hexagon(x, y, radius);
    }    
  }
}

//based on regular polygons https://processing.org/examples/regularpolygon.html
void hexagon(float x, float y, float radius) {
  float angle = TWO_PI / 6;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius;
    float sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}