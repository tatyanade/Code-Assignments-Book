// Basil.js generator for "Interview" pages
// Tega Brain & Golan Levin, 2015-2016

#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// to load an external json file use
var jsonString = b.loadString("data-interview.json");
//PAGES
var pages=6 ; //how many pages? Pages in addition to the 1 the template.
var startPage =1; //start assignments on what page?
var aFrame, bFrame, cFrame;

var i=0; //frame name

//FORMATTING VARIABLES
var colSpacing=20;
var colWidth= (576-2*colSpacing)/3;

var questionBoxHeight;
var questionSpaceAbove =10;
var questionSpaceBelow =10;

function length(object)
{
  var length = 0;
  for (key in object)
  length ++;
  return length
}

function draw() {
  b.textFont("Atlas Grotesk","Regular"); // set default font
  // parse JSON
  var jsonData = b.JSON.decode(jsonString);

  // TO DO: Would be nice to detect if INDD document already exists

  var jLength = 8; //json has 8 questions
  //  b.println("JLENGTH:"+jLength);
  //to auto generate doc length based on json
  //pages = assStartPage + (jLength*4)-1;

  // add new pages
  // for (var i = 1; i < pages; i++) {
  //   b.addPage();
  // };

  //==========================================================
  //Assignment title page

  for (var i = 0; i < jLength; i++) {
    //TITLE PAGE
    //==========================================================
    b.page(startPage);
    question1(jsonData[i].titles, 36, 410);
    b.addPage();
    startPage++;



    //==========================================================
    //TEXT PAGE
    b.page(startPage);
    qtitle(jsonData[i].titles);
    var yofQuestion=question2(jsonData[i].question);
    //answer(data, and y position of text box above)
    answer(jsonData[i].answer, yofQuestion);

    //CHECK IF WE NEED ADDITIONAL PAGES FOR OVERFLOW TEXT
    //==========================================================
    if(cFrame.overflows==true){


      addPage(cFrame);
    }

    iFormat(aFrame);

  }
  app.documents[0].stories.everyItem().hyphenation = false;

};

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

function iFormat(tFrame){


  var linesV = b.lines(tFrame);


  for(var i = 0; i < linesV.length; i++){

    var wordsV = b.words(linesV[i]);

    //  b.println("Length:"+wordsP[0].contents);
    if((wordsV.length==2)||(wordsV.length==3)){



      var charV = b.characters(linesV[i]); //get characters


      // b.println("Length:"+charV.length);
      //b.println("-2:"+charV[charV.length-2].contents);
      //  b.println("-3:"+charV[charV.length-3].contents);
      if(((charV[charV.length-1].contents)==".")||((charV[charV.length-2].contents)==".")||((charV[charV.length-3].contents)==".")){ //if last character is not .

      }else{
        for(var j = 0; j < wordsV.length; j++){
          b.typo(wordsV[j], "fontStyle", "Bold Italic");
        }
      }
    }

  }

}

//CONTENT------------------------------------------

function question1(_titles, _x, _y){
  b.textSize(24);
  b.textLeading(28.8);
  b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.CENTER_ALIGN);
  titleFrame = b.text(_titles, _x,_y,576,58);
  titleFrame.name = "question";
}




function qtitle(_titles){
  b.textSize(24);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);
  titleFrame = b.text(_titles,36,36,576,27);
  titleFrame.name = "title";


}

function question2(_titles){
  var desFrame, desFrame2, desFrame3, desFrame4, desFrame5;

  //variable for y position coord
  var _yy=63+questionSpaceAbove;
  var questionFrameMax = 100;
  b.textSize(12);
  b.textLeading(14.4);
  b.textFont("Atlas Grotesk","Light Italic");
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
  desFrame = b.text(_titles, 36,_yy,576,questionFrameMax);
  //b.typo(desFrame,hyphenation,false);
  desFrame.name = "question";

  var nQuestionTextLines = b.lines(desFrame).length;
  b.println("nQuestionTextLines:"+nQuestionTextLines);
  questionBoxHeight = (nQuestionTextLines ) * b.textLeading();
  b.itemSize(desFrame,576,questionBoxHeight);





  b.textFont("Atlas Grotesk","Regular");
  return _yy;
}


function answer(_brief, _questionBoxY){
  b.textSize(8);
  b.textLeading(12);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);

  var brief = _brief;
  var y=questionSpaceBelow+_questionBoxY+questionBoxHeight;
  var h=432-questionBoxHeight-questionSpaceBelow-questionSpaceAbove-27;
  aFrame =b.text(brief, 36,y,colWidth,h);


  bFrame =b.text(" ", colWidth+colSpacing+36,y,colWidth,h);

  cFrame =b.text(" ", colWidth+colSpacing+colWidth+colSpacing+36,y,colWidth,h);
  b.linkTextFrames(aFrame,bFrame);
  b.linkTextFrames(bFrame,cFrame);

  //  bolding(bFrame, 0, 0);

  iFormat(aFrame);
  iFormat(bFrame);
  iFormat(cFrame);


}

function textBoxes(_linkFrame){

  b.textSize(8);
  b.textLeading(12);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);

  var _frame1 =b.text(" ", 36,36,colWidth,432);
  var _frame2 =b.text(" ", colWidth+colSpacing+36,36,colWidth,432);
  var _frame3 =b.text(" ", colWidth+colSpacing+colWidth+colSpacing+36,36,colWidth,432);
  b.linkTextFrames(_frame1, _frame2);
  b.linkTextFrames(_frame2, _frame3);

  _frame1.name = "frame"+i;
  i++;
  _frame2.name = "frame"+i;
  i++;
  _frame3.name = "frame"+i;
  i++;

  b.linkTextFrames(_linkFrame,_frame1);

  if(_frame3.overflows==true){

    b.println("OverfLOWS!!!!!!!!!!!!!");
    addPage(_frame3);

  }
  iFormat(_frame1);
  iFormat(_frame2);
  iFormat(_frame3);





}



function addPage(_frame){
  b.addPage(); //add new page
  startPage++;
  b.page(startPage); //go to new page
  textBoxes(_frame); //add text boxes

  b.addPage();
  startPage++;

}



b.go();
