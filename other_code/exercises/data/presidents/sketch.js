// Display of the height of the presidents

function setup() {
  createCanvas(400, 400);
  background(180);
  
  var presidents = getPresidents();
  var name = getNameOfTallest (presidents);
  textSize(20);
  textAlign(CENTER); 
  text("Tallest: " + name, width/2, 30);

  var barMarginX = 8; 
  var barMarginY = 250; 
  var barSeparationX = (width - barMarginX*2)/presidents.length;
  var barWidthX = barSeparationX -1;
  var barMaxHeightY = height/3;
  var minPresHeight = 0;//150; 
  var maxPresHeight = 200; 
  
  for (var i = 0; i < presidents.length; i++) { 
    var aPresident = presidents[i];
    
    var x = barMarginX + (i * barSeparationX);
    var y = barMarginY;
    var w = barWidthX; 
    var h = map(aPresident.height, minPresHeight,maxPresHeight, 0,0-barMaxHeightY);
    
    if (name === aPresident.name) {
      stroke(0);
      strokeWeight(2);
      line (width/2,35, x+w/2, y+h-5);
      fill("yellow");
    } else {
      fill(0);
    }
    noStroke(); 
    rect(x, y, w, h);
  }
  noLoop();
  saveCanvas(); 
}




function getPresidents() {
    return [
      {name: "George Washington", height: 188},
      {name: "John Adams", height: 170},
      {name: "Thomas Jefferson", height: 189},
      {name: "James Madison", height: 163},
      {name: "James Monroe", height: 183},
      {name: "John Q. Adams", height: 171},
      {name: "Andrew Jackson", height: 185},
      {name: "Martin Van Buren", height: 168},
      {name: "William H. Harrison", height: 173},
      {name: "John Tyler", height: 183},
      {name: "James K. Polk", height: 173},
      {name: "Zachary Taylor", height: 173},
      {name: "Millard Fillmore", height: 175},
      {name: "Franklin Pierce", height: 178},
      {name: "James Buchanan", height: 183},
      {name: "Abraham Lincoln", height: 193},
      {name: "Andrew Johnson", height: 178},
      {name: "Ulysses S. Grant", height: 173},
      {name: "Rutherford B. Hayes", height: 174},
      {name: "James A. Garfield", height: 183},
      {name: "Chester A. Arthur", height: 188},
      {name: "Grover Cleveland", height: 180},
      {name: "Benjamin Harrison", height: 168},
      {name: "William McKinley", height: 170},
      {name: "Theodore Roosevelt", height: 178},
      {name: "William H. Taft", height: 182},
      {name: "Woodrow Wilson", height: 180},
      {name: "Warren G. Harding", height: 183},
      {name: "Calvin Coolidge", height: 178},
      {name: "Herbert Hoover", height: 182},
      {name: "Franklin D. Roosevelt", height: 188},
      {name: "Harry S. Truman", height: 175},
      {name: "Dwight D. Eisenhower", height: 179},
      {name: "John F. Kennedy", height: 183},
      {name: "Lyndon Johnson", height: 192},
      {name: "Richard Nixon", height: 182},
      {name: "Gerald Ford", height: 183},
      {name: "Jimmy Carter", height: 177},
      {name: "Ronald Reagan", height: 185},
      {name: "George H. W. Bush", height: 188},
      {name: "Bill Clinton", height: 188},
      {name: "George W. Bush", height: 182},
      {name: "Barack Obama", height: 185},
      {name: "Donald J. Trump", height: 188}
  ];
}


function getNameOfTallest(presidents) {
  // given p, a list of president objects, find the president with
  // the greatest height
  // return the name of the tallest president
  var tallestName = "none";
  var tallestHeight = 0;
  for (var i = 0; i < presidents.length; i++) {
    var p = presidents[i];
    if (p.height > tallestHeight) {
      tallestHeight = p.height;
      tallestName = p.name;
    }
  }
  return tallestName;
}



function draw() {}