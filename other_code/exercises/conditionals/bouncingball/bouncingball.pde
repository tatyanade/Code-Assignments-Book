 //DECLARE OUR VARIABLES HERE!!
 //VariableType VariableName
 float y; // int is integer
 float a; // float is a decimal
 String word = "tega";
 char letter = 'y';
 color red = color(100,200,255); //color variable storing all r,g,b
 float speed =1;

void setup(){
 size(300,300);
smooth();
noStroke();
  //Assign happen in setup and gives a value to a variable
 y = 50;
 println(word);
}
void draw(){
   background(255); 
  // + - / *
  //ellipse(x,y,w,h);
  fill(red);
  ellipse(width/2+30,y,40,40);
  
  y = y + speed; //THIS IS MOVING THE BALL - CHANGING Y
  println(y);
  
  //CONDITIONAL STATEMENTS
  if(y>height){
    //if true do this stuff!!!
    background(0,255,0);
    speed = -1;
  }
  
  //2nd conditional to do with y!!!!!
  if(y==0){ //if y is equal to zero
    speed = 1;
  }
  
  
  
}

void mousePressed(){
saveFrame();

}