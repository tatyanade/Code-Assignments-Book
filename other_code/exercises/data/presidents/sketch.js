// Practice lab exam 2, problem 1 (Presidents)
// POSSIBLE SOLUTION


function setup() {
  createCanvas(400, 400);
  
  background(200,200,200);
  var presidents = getPresidents();
  var name = tallest(presidents);
  if (typeof name === "number") {
    name = "Oops: your tallest() function returned a number";
  } else if (typeof name === "object") {
    name = "Oops: your tallest() function returned an object or nothing";
  } else if (name === "tall guy") {
    name = "Oops: you did not implement the tallest() function.";
  }
  text(name, 10, 20);

  for (var i = 0; i < 4; i++) { // draw rows
    for (var j = 0; j < 10; j++) { // draw columns
      var x = 10 + j * 40;
      var y = 100 + i * 100;
      fill(0);
      var presIndex = i * 10 + j; // 10 per row and add column to
      // get the index of the president we want to draw next
      if (presIndex >= presidents.length) {
        break; // quit when we run out of presidents to draw
      }
      var pres = presidents[i * 10 + j];
      if (name === pres.name) {
        fill("red");
      } else {
        fill(0);
      }
      rect(x, y-10, 20, -pres.height * 0.3);
    }
  }

//  noLoop();

}


function draw() {}

function keyPressed(){
  saveCanvas('myCanvas', 'png');
}

function tallest(presidents) {
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



function getPresidents() {
  return [{
    name: "Washington, George",
    height: 188
  }, {
    name: "Adams, John",
    height: 170
  }, {
    name: "Jefferson, Thomas",
    height: 189
  }, {
    name: "Madison, James",
    height: 163
  }, {
    name: "Monroe, James",
    height: 183
  }, {
    name: "Adams, John Q.",
    height: 171
  }, {
    name: "Jackson, Andrew",
    height: 185
  }, {
    name: "Van Buren, Martin",
    height: 168
  }, {
    name: "Harrison, William H.",
    height: 173
  }, {
    name: "Tyler, John",
    height: 183
  }, {
    name: "Polk, James K.",
    height: 173
  }, {
    name: "Taylor, Zachary",
    height: 173
  }, {
    name: "Fillmore, Millard",
    height: 175
  }, {
    name: "Pierce, Franklin",
    height: 178
  }, {
    name: "Buchanan, James",
    height: 183
  }, {
    name: "Lincoln, Abraham",
    height: 193
  }, {
    name: "Johnson, Andrew",
    height: 178
  }, {
    name: "Grant, Ulysses S.",
    height: 173
  }, {
    name: "Hayes, Rutherford B.",
    height: 174
  }, {
    name: "Garfield, James A.",
    height: 183
  }, {
    name: "Arthur, Chester A.",
    height: 188
  }, {
    name: "Cleveland, Grover",
    height: 180
  }, {
    name: "Harrison, Benjamin",
    height: 168
  }, {
    name: "McKinley, William",
    height: 170
  }, {
    name: "Roosevelt, Theodore",
    height: 178
  }, {
    name: "Taft, William H.",
    height: 182
  }, {
    name: "Wilson, Woodrow",
    height: 180
  }, {
    name: "Harding, Warren G.",
    height: 183
  }, {
    name: "Coolidge, Calvin",
    height: 178
  }, {
    name: "Hoover, Herbert",
    height: 182
  }, {
    name: "Roosevelt, Franklin D.",
    height: 188
  }, {
    name: "Truman, Harry S.",
    height: 175
  }, {
    name: "Eisenhower, Dwight D.",
    height: 179
  }, {
    name: "Kennedy, John F.",
    height: 183
  }, {
    name: "Johnson, Lyndon",
    height: 192
  }, {
    name: "Nixon, Richard",
    height: 182
  }, {
    name: "Ford, Gerald",
    height: 183
  }, {
    name: "Carter, Jimmy",
    height: 177
  }, {
    name: "Reagan, Ronald",
    height: 185
  }, {
    name: "Bush, George H. W.",
    height: 188
  }, {
    name: "Clinton, Bill",
    height: 188
  }, {
    name: "Bush, George W.",
    height: 182
  }, {
    name: "Obama, Barack",
    height: 185
  }];
}