color color1 = color(72,69,219);
color color2 = color(183,186,36);
color color3 = color(119,120,180);
color color4 = color(155,157, 127);

void setup(){
  noStroke();
  size(300,300);
  background(255);
  fill(color1);
  rect(0,0,150,150);
  fill(color2);
  rect(150,0,150,150); 
  fill(color3);
  ellipse(75,75,30,30);
  fill(color4);
  ellipse(225,75,30,30);
  fill(color3);
  rect(100,200,50,50);
  fill(color4);
  rect(150,200,50,50);
}