//Exercises: Color 
//Color Relativity 2

color color1 = color(90,31,21);
color color2 = color(165,224,234);
color color3 = color(118,129,134);
color color4 = color(144,184, 192);

void setup(){
  
  noStroke();
  size(300,300);
  background(255);
  
  //top shapes
  fill(color1);
  rect(0,0,150,150);
  fill(color2);
  rect(150,0,150,150); 
  fill(color3);
  ellipse(75,75,30,30); 
  fill(color4);
  ellipse(225,75,30,30);

  //bottom shapes
  fill(color3);
  rect(100,200,50,50);
  fill(color4);
  rect(150,200,50,50);
}

void draw(){
  
}

void mousePressed(){
 saveFrame("../color_relativity_2.png"); 
}