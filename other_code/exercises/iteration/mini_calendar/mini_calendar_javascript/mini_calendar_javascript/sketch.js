function setup() {
  createCanvas(400, 400);
}

function lengthOfMonth(){
    m = month()
    if(m==1 || m==3  ||  m==5  ||  m==7  ||  m==8  ||  m==10  ||  m==31){
        return 31;
    } else if (m ==4  ||  m==6  ||  m==9  ||  m==11){
        return 30;
    } else {
        if (year()%4 === 0){
            return 29;  //leapyear
        }
        return 28;
    }
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER); 
  background(255);
  noStroke();
  smooth();

  var numberOfDaysInMonth = lengthOfMonth(); 

  // Remember that days are usually counted from 1, not 0.
  for (var d=1; d<=numberOfDaysInMonth; d++) {
    var dayX = map(d,0,numberOfDaysInMonth+1, 0,width); 

    if (d == day()) {
      fill(250, 100, 100);
      ellipse(dayX, height/2, 15, 15);
      
    } else {
      fill(0,75,165);
      rect(dayX, height/2, 5, 50);
    }
  }
}