/**
* example shows how to parse a raw JSON string to a javascript object.
* no idea what JSON is? then have a read here: http://en.wikipedia.org/wiki/JSON
*/

#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// to load an external json file use
var jsonString = b.loadString("data.json")
var tFrame, titleFrame, varFrame, desFrame, metaFrame;
var pages=10; //how many pages?
function draw() {
  // parse JSON
  var jsonData = b.JSON.decode( jsonString );

  // add new pages
  for (var i = 0; i < pages; i++) {
    b.addPage();
  };

  for (var i = 0; i <= pages-1; i++) {
    b.page(i+1);

    //TITLE
    assTitle(jsonData[i-1].titles);

    //DESCRIPTION
    assDescription(jsonData[i-1].shortdescription);

    //assBrief(level,tags,learning objectives,data)
    assBrief(jsonData[i-1].level,jsonData[i-1].tagsstem+jsonData[i-1].tagsarts, jsonData[i-1].learningobjectives,jsonData[i-1].brief);

    //VARIATIONS
    assVariations(jsonData[i-1].variations);

    b.linkTextFrames(metaFrame,vFrame);
    //MAKING IT meaningful
    assMeaningful(jsonData[i-1].makingitmeaningful);

    b.linkTextFrames(vFrame,makeFrame);
  };


  // -- let's change the textframe on page 3 --
  // go to the page
  // b.page(3);
  // // select the the textframe with the name "page count big"
  // var txtOnPage3 = b.nameOnPage("page count big");
  // // change it
  // txtOnPage3.contents = "Found it! :)";

}
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

function bolding(tFrame, pNumber, wNumber){

  var paraV = b.paragraphs(tFrame);
  var wordsV = b.words(paraV[pNumber]);
  b.typo(wordsV[wNumber], "fontStyle", "Bold");

}

function assTitle(titlez){
  b.textSize(24);
  titleFrame = b.text(titlez, 36,36,576,27.6);
  titleFrame.name = "title";
}

function assDescription(description){
  b.textSize(12);
  desFrame = b.text(description, 36,68,550,16);
  desFrame.name = "description";

}

function assBrief(_level, _tags, _learning, _brief){
  b.textSize(8);
  b.textLeading(12);
  var meta = "Level: "+_level+"\r"+"Tags: "+_tags+"\r"+"Learning Objectives "+"\r"+_learning;
  var brief = "\n"+"\r"+"Brief "+"\r"+_brief+"\n"+"\r";
  metaFrame =b.text(meta+brief, 36,98,172,371);

  bolding(metaFrame, 0, 0);
  bolding(metaFrame, 1, 0);
  bolding(metaFrame, 2, 0);
  bolding(metaFrame, 2, 1);
  bolding(metaFrame, 4, 0);


  metaFrame.name = "meta";

}

function assVariations(_variations){
  var variation = "Variations"+"\r"+_variations+"\n"+"\r";
  vFrame =b.text(variation, 238,98,172,371);
  bolding(vFrame, 0, 0);

}

function assMeaningful(_meaningful){
  b.textSize(8);
  var making = "Making it Meaningful"+"\r"+_meaningful;
  makeFrame =b.text(making, 440,98,172,371);
  bolding(makeFrame, 0, 0);
  bolding(makeFrame, 0, 1);
  bolding(makeFrame, 0, 2);
}


b.go();
