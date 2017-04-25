int a =1;
int c;
void setup(){
  //noStroke();
  size(401,401);
}


void draw(){
 
 for(int i=0; i<400;i=i+50){
   a=a*-1;
   for(int j=0; j<400;j=j+50){
     a=a*-1;
     if(a<0){
       c=255;
     }
     if(a>0){
       c=0;
     }
     println(a);
  fill(c);
     rect(i,j,50,50); 
  
 }
 }
  save("checkers.jpg");
  stop();
}
