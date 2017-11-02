int[] xpos1 = new int[10];
int[] ypos1 = new int[10];
int[] xpos2 = new int[10];
int[] ypos2 = new int[10];

int newestLineNum = 0;

boolean isDrawing = false;

int longestLength = 0;
int indexOfLongest;

int currentx1;
int currenty1;
int currentx2;
int currenty2;

void setup(){
  size(300,300);
  background(255,255,255);
}

void draw(){
  background(255,255,255);
  drawLines();
}

void mousePressed(){
 if (isDrawing == false){
  isDrawing = true;
  currentx1 = mouseX;
  currenty1 = mouseY;
 }
 
 else if (isDrawing == true){
   currentx2 = mouseX;
   currenty2 = mouseY;
   storeLine();
   isDrawing = false;
 }
}

void drawLines(){
  
  // Draw a gray diagnostic mark for the active line 
  stroke(100,100,100);
  strokeWeight(1);
  if (isDrawing == true){
   line(currentx1, currenty1, mouseX, mouseY); 
  }

  for (int i = 0; i < newestLineNum; i++){
    if (i == indexOfLongest) { 
      // Longest line is thick and red
      stroke(255,0,0);
      strokeWeight(7);
    } else {
      // All other stored lines are thin and black
      stroke(0,0,0);
      strokeWeight(3);
    }
    line(xpos1[i], ypos1[i], xpos2[i], ypos2[i]);
  }
}

void storeLine(){

 int i = newestLineNum;
 newestLineNum +=1;
 
 
 //makes arrays longer if we are about to run out of room
 if(i == xpos1.length){
   xpos1 = expand(xpos1);
   ypos1 = expand(ypos1);
   xpos2 = expand(xpos2);
   ypos2 = expand(ypos2);
 
 }
 
 xpos1[i] = currentx1;
 ypos1[i] = currenty1;
 xpos2[i] = currentx2;
 ypos2[i] = currenty2;
 
 int lineLength = int(dist(xpos1[i], ypos1[i], xpos2[i], ypos2[i]));
 if (lineLength > longestLength){
   longestLength = lineLength;
   indexOfLongest = i;
 }
}