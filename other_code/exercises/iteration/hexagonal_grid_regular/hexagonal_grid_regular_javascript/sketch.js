//radius of shape is equal to side length
var radius = 15;
var hex_height;

function setup(){
  createCanvas(300,300);
  
  //the height of a regular hexagon is equal to the side length * sqrt(3)
  var hex_height = radius * sqrt(3);

  var x;
  var y;
  
  //drawing hexagons on the grid
  for (var i = 0; i<(width/radius); i+=1){
    for (var j = 0; j<(width/radius); j+=1){
      x = i*(radius*1.5);
      
      //if an even row, fraw hexagon
      if ((i%2) === 0){
        y = j*hex_height;
      }
      
      //if an odd row, draw hexagons half a hexagon lower so they tessellate
      else{
        y = j*hex_height + hex_height/2 ;
      }
      fill(random(255));
      hexagon(x, y, radius);
    }    
  }

}


//based on regular polygons https://processing.org/examples/regularpolygon.html
function hexagon(x, y, radius) {
  var angle = TWO_PI / 6;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}