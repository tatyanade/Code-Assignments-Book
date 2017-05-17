//import your data
Table table;

//data variables
float latm, latp;
float lonm, lonp;

//arrays for x coordinates and y coordinates
float[] locationsX;
float[] locationsY;

int margin = 20;
float lon1 = 0.75630238644382;
float lat1 =-73.9905266253743;

void setup() {
  size(900, 540);
  stroke(0, 0, 255,100);

  //load your data file. Check if you have a header.
  table = loadTable("path.csv", "header");

  println(table.getRowCount() + " total rows in table");

  //make arrays as long as our table length. table.getRowCount() evaluates to the length of your table
  locationsX = new float[table.getRowCount()];
  locationsY = new float[table.getRowCount()];
  
  //use a for loop to y which we use to call each row number
  for (int y=0; y<table.getRowCount (); y++) {
    //to animate this data, change the getRowCount() to a counter

    //get latitude using getFloat(row, column) - from the first column
    float lat = table.getFloat(y, 0);

    //get longtitude using getFloat(row, column) - from the second column
    float lon = table.getFloat(y, 1);

    //remap coordinates to the dimensions of our screen
    lat=map(lat, 45, 39, 0+margin, height-margin);
    lon=map(lon, -81, -66, 0+margin, width-margin);

    fill(0, 0, 255,100);

    ellipse(lon, lat, 10, 10);
    
    line(lon,lat,lon1,lat1);
    lon1=lon;
    lat1=lat;
    
  }
  noLoop();
}

void draw() {
  
}
void mouseClicked(){
  
    saveFrame();
  exit();
}