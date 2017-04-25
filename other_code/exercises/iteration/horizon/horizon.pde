

void setup() {
  size(421, 421);
  smooth();
  background(255);

  float a=20;
  for (int i=0-100000; i<=width+100000; i=i+40) {
    
    line(width/2+i/100, 0, i, height); //vertical
  }
//  for (int j=height; j>=-500; j=int(j-a)) {
//       println(a);
//      a=a-0.5;
//
//     
//      line(0, j, width, j); //horizontal
//    }
}


void draw() {
  //  for(int i=0;i<width;i=i+10){
  //    for(int j=0; j<height;j=j+10){
  //      line(0,i,width,i);
  //      line(j,0,j,height);
  //    }
  //  }


  save("horizon.jpg");
}

