import java.time.YearMonth; 

void setup() {
  size(400, 400);
}

void draw() {
  rectMode(CENTER);
  ellipseMode(CENTER); 
  background(255);
  noStroke();
  smooth();

  // Using Java8, You can fetch the number of days in the current month. 
  // Beginners could hardcode numberOfDaysInMonth if necessary.
  YearMonth yearMonthObject = YearMonth.of (year(), month());
  int numberOfDaysInMonth = yearMonthObject.lengthOfMonth(); 

  // Remember that days are usually counted from 1, not 0.
  for (int d=1; d<=numberOfDaysInMonth; d++) {
    float dayX = map(d,0,numberOfDaysInMonth+1, 0,width); 
    
    //draws a circle for the current day
    if (d == day()) {
      fill(250, 100, 100);
      ellipse(dayX, height/2, 15, 15);
      
     //draws a bar representing all the other days
    } else {
      fill(#004BA5);
      rect(dayX, height/2, 5, 50);
    }
  }
}

void keyPressed() {
  // save("../mini_calendar.png");
}