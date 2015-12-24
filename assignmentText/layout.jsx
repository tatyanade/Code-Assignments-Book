/**
* example shows how to parse a raw JSON string to a javascript object.
* no idea what JSON is? then have a read here: http://en.wikipedia.org/wiki/JSON
*/

#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// to load an external json file use
var jsonString = b.loadString("data.json");

//PAGES
var pages=25; //how many pages? Pages in addition to the 1 the template.
var assStartPage =3; //start assignments on what page?
var titleFrame, varFrame, desFrame, bFrame, metaFrame, makeFrame, aspFrame;

//FORMATTING VARIABLES
var colSpacing=20;
var colWidth= (576-2*colSpacing)/3;




function draw() {
  b.textFont("Atlas Grotesk","Regular"); // set default font
  // parse JSON
  var jsonData = b.JSON.decode( jsonString );
  var jLength = objLength(jsonData);
  //to auto generate doc length based on json
  //pages = assStartPage + (jLength*4)-1;

  // add new pages
  for (var i = 0; i < pages; i++) {
    b.addPage();
  };

  //Assignment title page
  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {
    b.page((i*4)+assStartPage);
    assTitle1(jsonData[i].titles, 36, 441);
  };

  //Assignment brief page
  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {
    b.page(((i)*4)+1+assStartPage);
    //TITLE
    assTitle2(jsonData[i].titles, 36, 36);
    //DESCRIPTION
    assDescription(jsonData[i].shortdescription);
    //BRIEF
    assBrief(jsonData[i].brief);
    //META DATA

    /*
    b.textSize(7);
    b.textLeading(9);
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);
    assMeta(jsonData[i].level,jsonData[i].tagsstem, jsonData[i].tagsarts, jsonData[i].learningobjectives);
    */
    //VARIATIONS
    assVariations(jsonData[i].variations);
    //b.linkTextFrames(bFrame, vFrame);
    //MAKING IT meaningful
    assMeaningful(jsonData[i].makingitmeaningful);
    b.linkTextFrames(vFrame,makeFrame);
  };

  b.textSize(7);
  b.textLeading(9);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);
  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {
    b.page(((i)*4)+1+assStartPage);
    assMeta(jsonData[i].level,jsonData[i].tagsstem, jsonData[i].tagsarts, jsonData[i].learningobjectives);
  }



  //Assignment image pages
  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {
    b.page((i)*4+2+assStartPage);
    //IMAGE CODE HERE

  };

  //Image reference page
  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {
    b.page((i)*4+3+assStartPage);
    //REFERENCE page
    assAspiration(jsonData[i].aspirationurl);

  };

  //FIX FOR WEIRD BUGS
  b.typo(metaFrame,"pointSize",7);
};
// function setup() {
//   // parse JSON
//   var jsonData = b.JSON.decode( jsonString );
//   // run this on an empty document with only one page
//   b.textFont('Arial', ['Italic'])
//   b.textSize(24);
//   b.text(jsonData.titles, 36,3, 576, 3);
//
//   b.text(jsonData.address.city, 0,50, b.width, 50);
//   b.text(jsonData.phoneNumber[0].number, 0,100, b.width, 50);
//
//   // convert an object to a JSON-string
//   b.println( b.JSON.encode(jsonData) );
// }

//FORMATTING--------------------------------------

function bolding(tFrame, pNumber, wNumber){
  var paraV = b.paragraphs(tFrame);
  var wordsV = b.words(paraV[pNumber]);
  b.typo(wordsV[wNumber], "fontStyle", "Bold");
}

function iBolding(tFrame, pNumber, wNumber){
  var paraV = b.paragraphs(tFrame);
  var wordsV = b.words(paraV[pNumber]);
  b.typo(wordsV[wNumber], "fontStyle", "Bold Italic");
}

//CONTENT------------------------------------------

function assTitle1(_titles, _x, _y){
  b.textSize(24);
  b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.CENTER_ALIGN);
  titleFrame = b.text(_titles, _x,_y,576,27.6);

  titleFrame.name = "title";

}
function assTitle2(_titles, _x, _y){
  b.textSize(24);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);
  titleFrame = b.text(_titles, _x,_y,576,27.6);

  titleFrame.name = "title";

}

function assDescription(description){
  b.textSize(12);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
  desFrame = b.text(description, 36,68,550,16);
  desFrame.name = "description";

}


function assBrief(_brief){
  b.textSize(8);
  b.textLeading(12);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);

  var brief = "Brief "+"\r"+_brief+"\n"+"\r";
  bFrame =b.text(brief, 36,95,colWidth,260);

  bolding(bFrame, 0, 0);

  bFrame.name = "brief";

}


function assMeta(_level, _stemTags, _artTags, _learning){
  b.textSize(7);
  b.textLeading(9);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);
  var meta = "Level: "+_level+"\r"+"STEM tags: "+_stemTags+"\r"+"Art tags: "+_artTags+"\r"+"Learning Objectives: Students will "+"\r"+_learning;
  var learning = "Learning Objectives: Students will "+"\r"+_learning;
  var metaFull = meta;
  metaFrame =b.text(metaFull, 36,365,colWidth,102);
  b.typo(metaFrame, "fontStyle", "Light Italic");
  iBolding(metaFrame, 0, 0);
  iBolding(metaFrame, 1, 0);
  iBolding(metaFrame, 1, 1);
  iBolding(metaFrame, 2, 0);
  iBolding(metaFrame, 2, 1);
  iBolding(metaFrame, 3, 0);
  iBolding(metaFrame, 3, 1);

  metaFrame.name = "meta";
  b.typo(metaFrame,"leftIndent", 10);
  b.typo(metaFrame,"rightIndent", 10);

  //make a solid frame of 0.5 thickness
  b.rectMode( b.CORNER ); // default
  b.noFill();
  b.stroke(0,0,0);
  b.strokeWeight(1);
  b.rect(36,365,colWidth,102);
  b.fill(0,0,0);
  b.stroke(0);
}


function assVariations(_variations){
  b.textSize(8);
  b.textLeading(12);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);

  var variation = "Variations"+"\r"+_variations+"\n"+"\r";
  vFrame =b.text(variation, 36+colWidth+colSpacing,95,colWidth,373);
  bolding(vFrame, 0, 0);

}

function assMeaningful(_meaningful){
  b.textSize(8);
  b.textLeading(12);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
  var making = "Making it Meaningful"+"\r"+_meaningful;
  makeFrame =b.text(making, 36+ colWidth*2+colSpacing*2,95,colWidth,373);
  bolding(makeFrame, 0, 0);
  bolding(makeFrame, 0, 1);
  bolding(makeFrame, 0, 2);
}

function assAspiration(_aspiration){
  b.textSize(8);
  b.textLeading(12);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
  var aspiration = "Image References"+"\r"+_aspiration;
  aspFrame =b.text(aspiration, 36,100,colWidth,367.5);

}

function objLength(obj){
  var i=0;
  for (var x in obj){
    if(obj.hasOwnProperty(x)){
      i++;
    }
  }
  return i;
}

b.go();
