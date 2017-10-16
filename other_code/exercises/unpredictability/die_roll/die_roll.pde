int dice_width = 100;
int num_dice = 1;

//x,y, is top left of die
void drawDie(){
  int x = width/2 - dice_width/2;
  int y = x;
  int number = int(random(1,6));
  int d = int(dice_width/7);
  fill(231,29,54);
  rect(x,y,dice_width,dice_width, 10);
  
  fill(0);
  if(number == 1){
    ellipse(x+d*3.5, y+d*3.5,d,d);
  }  
  else if(number == 2){
    if(int(random(1)) == 0){
      ellipse(x+d*1.5,y+d*5.5,d,d);
      ellipse(x+d*5.5,y+d*1.5,d,d);
    }
    else{
      ellipse(x+d*1.5,y+d*1.5,d,d);
      ellipse(x+d*5.5,y+d*5.5,d,d);
    }
  }
  else if(number == 3){
    ellipse(x+d*3.5, y+d*3.5,d,d);
    if(int(random(1)) == 0){
      ellipse(x+d*1.5,y+d*5.5,d,d);
      ellipse(x+d*5.5,y+d*1.5,d,d);
    }
    else{
      ellipse(x+d*1.5,y+d*1.5,d,d);
      ellipse(x+d*5.5,y+d*5.5,d,d);
    }
  }
  else if(number == 4){
    ellipse(x+d*1.5,y+d*5.5,d,d);
    ellipse(x+d*5.5,y+d*1.5,d,d);
    ellipse(x+d*1.5,y+d*1.5,d,d);
    ellipse(x+d*5.5,y+d*5.5,d,d);
  }
  else if(number == 5){
    ellipse(x+d*3.5, y+d*3.5,d,d);
    ellipse(x+d*1.5,y+d*5.5,d,d);
    ellipse(x+d*5.5,y+d*1.5,d,d);
    ellipse(x+d*1.5,y+d*1.5,d,d);
    ellipse(x+d*5.5,y+d*5.5,d,d);
  }
  else{
    ellipse(x+d*1.5,y+d*5.5,d,d);
    ellipse(x+d*5.5,y+d*1.5,d,d);
    ellipse(x+d*1.5,y+d*1.5,d,d);
    ellipse(x+d*5.5,y+d*5.5,d,d);
    if(int(random(1))==0){
    ellipse(x+d*3.5,y+d*1.5,d,d);
    ellipse(x+d*3.5,y+d*5.5,d,d);      
    }
    else{
    ellipse(x+d*5.5,y+d*3.5,d,d);
    ellipse(x+d*1.5,y+d*3.5,d,d);  
    }
  }
}

void setup(){
  size(300,300);
  background(255);
  noStroke();
}


void drawDice(){
  background(255);

      drawDie(); 
  
  
}

void mousePressed() {
  drawDice();
}

void keyPressed(){
 saveFrame(); 
}

  


void draw(){
}