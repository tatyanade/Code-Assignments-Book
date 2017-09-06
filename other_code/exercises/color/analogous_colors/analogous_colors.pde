color baseColor;
color color2;
color color3;

int red1;
int green1;
int blue1;

int red2 = 0;
int green2 = 0;
int blue2 =0;

int red3 = 0;
int green3 = 0;
int blue3 = 0;

PImage wheel;
int mainX;
int mainY;

int x2;
int y2;

int x3;
int y3;

void setup(){
  wheel = loadImage("wheel.png");
  size(300,300);
  noStroke();  
  }

int pythagorean(int a, int b){
  return int(sqrt(sq(a) + sq(b)));
}

int distanceFrom(int x, int y, String loc){
 if (loc == "red"){
   return pythagorean(300-x, abs(y-150));
 }
 else if (loc == "green"){
   return pythagorean(abs(75-x), abs(y-280));
 }
 else if (loc == "blue"){
   return pythagorean(abs(75-x), abs(y-20));
 }
 else if (loc == "center"){
   return pythagorean(abs(150-x), abs(y-150));
 }
 return 300;
}

float angleMain(){
   //convert to cartesian
  int cartX = mainX - 150;
  int cartY = 150 - mainY;
  int dist = distanceFrom(mainX, mainY, "center");
  return atan2(cartX,cartY);
}

void updateCenterpoints(){
  int dist = distanceFrom(mainX, mainY, "center");

  float mainAngle = angleMain();
  float secondAngle = mainAngle - QUARTER_PI/2;
  float thirdAngle = mainAngle + QUARTER_PI/2; 
  
  x2 = int(dist*sin(secondAngle))+150;
  y2 = 150 -int(dist*cos(secondAngle));
  
  x3 = int(dist*sin(thirdAngle))+150;
  y3 = 150 -int(dist*cos(thirdAngle));
}

void updateColors(){
    red1 = distanceFrom(int(mainX), int(mainY), "red");
    green1 = distanceFrom(int(mainX), int(mainY), "green");
    blue1 = distanceFrom(int(mainX), int(mainY), "blue");
    
    red2 = distanceFrom(int(x2), int(y2), "red");
    green2 = distanceFrom(int(x2), int(y2), "green");
    blue2 = distanceFrom(int(x2), int(y2), "blue");
  
    red3 = distanceFrom(int(x3), int(y3), "red");
    green3 = distanceFrom(int(x3), int(y3), "green");
    blue3 = distanceFrom(int(x3), int(y3), "blue");
}

void updateCircles(){
  if(inCircle(mouseX, mouseY)){
    mainX = mouseX;
    mainY = mouseY;
    
    updateColors();
    updateCenterpoints();
 
    baseColor = color(red1, green1, blue1);
    color2 = color(red2, green2, blue2);
    color3 = color(red3, green3, blue3);  
  }
}

void drawColors(){
  int radius = 30;
  fill(baseColor);
  ellipse(mainX, mainY, radius, radius);
  fill(color2);
  ellipse(x2, y2, radius, radius);
  fill(color3);
  ellipse(x3, y3, radius, radius);
}

boolean inCircle(int x, int y){
  if (distanceFrom(x,y,"center") > 150){
    return false; }
  return true;
}


void draw(){
 background(wheel);
 updateCircles();
 drawColors();
 stroke(255);
 strokeWeight(2);
 }