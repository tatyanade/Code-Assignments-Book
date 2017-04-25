 //DECLARE OUR VARIABLES HERE!!
 //VariableType VariableName
 float y; // int is integer
float x;

PImage img;

 color red = color(122, 163, 146); //color variable storing all r,g,b
 float yspeed =1;
 float xspeed = 1;

void setup(){
 size(300,300);
smooth();
noStroke();
  //Assign happen in setup and gives a value to a variable
 y = 50;
 
 img = loadImage("cursor1.png");

}
void draw(){
   background(255); 
   
   rect(3*width/4,mouseY,15,80);
  // + - / *
  //ellipse(x,y,w,h);
  fill(red);
  ellipse(x,y,40,40);
  
  y = y + yspeed; //THIS IS MOVING THE BALL - CHANGING Y
  x = x + xspeed;
  println(y);
  
  //CONDITIONAL STATEMENTS
  if(x<0||x>width){
   xspeed = xspeed*-1;
   
  }
  
  if(y<0||y>height){
   yspeed = yspeed*-1;
   
  }
  
  
  
  //2nd conditional to do with y!!!!!
  if(y==0){ //if y is equal to zero
    yspeed = 1;
  }
  if(x==0){
    
    xspeed=1;
  }
  
  image(img,mouseX,mouseY+55,12*2,19*2);
  
}

void mousePressed(){
saveFrame();

}