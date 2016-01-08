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
var pageCount=0;

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
    b.addPage();
    pageCount++;
    b.page(pageCount);
    question1(jsonData[i].titles, 36, 410);
    b.addPage();
    pageCount++;



    //==========================================================
    //TEXT PAGE
    b.page(pageCount);
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

//FORMATTING
function italicizeWordsInFrame(whichFrame, startParagraphIndex){
  for (var j=0; j<(indicesOfWordsToItalicize.length); j++){
    var aWord = indicesOfWordsToItalicize[j];
    italicizing(whichFrame, startParagraphIndex, aWord);
  }
}
function italicizeBoldWordsInFrame(whichFrame, startParagraphIndex){
  for (var j=0; j<(indicesOfWordsToItalicize.length); j++){
    var aWord = indicesOfWordsToItalicize[j];
    iBolding(whichFrame, startParagraphIndex, aWord);
  }
}

function italicizing(tFrame, pNumber, wNumber){
  var paraV = b.paragraphs(tFrame);
  var wordsV = b.words(paraV[pNumber]);
  b.typo(wordsV[wNumber], "fontStyle", "Regular Italic");
}


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


function typesetURLs (theFrame, theString){
  // Set the URLs in a light-colored thin font.

  // Extract the URLs
  var urlRegex = /http(.*?)\n/g;
  var extractedURLs = theString.match(urlRegex);
  if (extractedURLs !== null) {

    var allTheCharactersInThisFrame = b.characters(theFrame);
    var nURLs = extractedURLs.length;

    // For each URL
    for (var i = 0; i < nURLs; i++) {

      // Get the start and end character indices
      var aURL = extractedURLs[i];
      var startCharIndex = theString.indexOf(aURL);
      var endCharIndex = startCharIndex + aURL.length;

      // For each of those characters, color it.
      for(var j = startCharIndex; j < endCharIndex; j++){
        b.typo(allTheCharactersInThisFrame[j], "fontStyle", "Thin Italic");
        b.typo(allTheCharactersInThisFrame[j], 'fillColor', b.color(96,96,96));
      }
    }
  }
}

//==================================================================
// Usage:
// 1. myText = computeWordsToItalicize(myText);
// 2. then loop through the indicesOfWordsToItalicize array
function computeWordsToItalicize(someText) {
  // NOTE: This function has the beneficial side-effect of stripping out the escape codes
  // (*) that indicate italicization (as in, " *words to italicize* ") from someText

  // Initialize the (global) array of indices of words to italicize.
  indicesOfWordsToItalicize = [];

  // Get rid of a troublesome pattern that causes omitted results in basil.js.
  someText = someText.replace("\n\n", "\n \n");

  // Find all matches: of phrases that occur between asterisks:
  var myRegExForStuffBetweenAsterisks = /\*([^*]*)\*/g;
  var results = someText.match(myRegExForStuffBetweenAsterisks);

  if (results === null) {
    // There are no words to italicize.
    return someText;

  } else {

    // Find the indices of the words that are between asterisks
    var nResults = results.length;
    for (var i = 0; i < nResults; i++) {

      // Clean up the i'th result: remove asterisks and trim.
      var cleanedResulti = results[i].substring(1, results[i].length - 1);
      if (typeof cleanedResulti === 'string'){

        // Select the correct line below depending on the environment:
        // cleanedResulti = cleanedResulti.trim(); // trim() for p5.js
        cleanedResulti = b.trim(cleanedResulti);   // trim() for basil.js

        // Strip out the asterisks from the string that was passed in
        someText = someText.replace(results[i], cleanedResulti);

        // Find the character at which this particular match occurs.
        var charOfResulti = someText.indexOf(cleanedResulti);

        // Find the number of words up to that point.
        var portionOfMyTextBeforeResulti = someText.substring(0, charOfResulti);
        var nWordsBeforeResulti = getNumberOfWordsInString (portionOfMyTextBeforeResulti);
        var nWordsInCleanedResulti = getNumberOfWordsInString (cleanedResulti);

        // Accrue the indices (in the original text) of the individual result words.
        // print(i + ".\t" + nWordsInCleanedResulti + "\t|" + cleanedResulti + "|\t" + nWordsInResulti);
        for (var j = 0; j < nWordsInCleanedResulti; j++) {
          indicesOfWordsToItalicize.push(nWordsBeforeResulti + j);
        }
      }
    }
  }

  return someText;
}



//CONTENT------------------------------------------

function isEmpty(str) {
  // Order matters for these tests!
  return (!str || (0 === str.length));
}

function getNumberOfWordsInString(inputStr){
  // Note: We use a regex, because split()ting on " "
  // ( i.e.: myStr.split(" ").length ) doesn't catch all breaks!
  var arrayOfWordsInString = inputStr.match(/\S+/g);
  return (arrayOfWordsInString.length);
}


// It would be nice to get an extendscript dropshadow on the Title.
// Unfortunately, Basil.js does not expose this functionality, but it does seem possible.
// See the following links:
// http://tomkrcha.com/?p=3779
// http://www.tonton-pixel.com/blog/tutorials/layer-styles-quick-tutorial/
// Also see // b.inspect(metaFrame, 2);
//
// There appears to be a way to make a dropshadow if an Object Style is saved.
// https://delfeld.wordpress.com/2012/12/19/ai-script-example/
/*
// "myTextStyle" has to exist in the inDesign document.
var myTextStyle = doc.graphicStyles.getByName ("myTextStyle");
maintext = lyr.textFrames.add();
maintext.name = "text, main";
myTextStyle.applyTo( maintext ); // copy previously created style:
*/


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
  //b.println(_brief);
  if (!isEmpty(_brief)){
    // Note: we do this FIRST in order to strip out the markup tags.
    _brief = computeWordsToItalicize(_brief);
    //_codes = computeWordsToItalicize(_codes);
    b.textSize(8);
    b.textLeading(12);
    b.textFont("Atlas Grotesk","Regular");
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
    b.fill (0,0,0);

    var y=questionSpaceBelow+_questionBoxY+questionBoxHeight;
    var h=432-questionBoxHeight-questionSpaceBelow-questionSpaceAbove-27;
    aFrame =b.text(_brief, 36,y,colWidth,h);


    bFrame =b.text("", colWidth+colSpacing+36,y,colWidth,h);

    cFrame =b.text("", colWidth+colSpacing+colWidth+colSpacing+36,y,colWidth,h);
    b.linkTextFrames(aFrame,bFrame);
    b.linkTextFrames(bFrame,cFrame);

    //  bolding(bFrame, 0, 0);

    // iFormat(aFrame);
    // iFormat(bFrame);
    // iFormat(cFrame);

    italicizeBoldWordsInFrame (aFrame, 0);
    italicizeBoldWordsInFrame (bFrame, 0);
    italicizeBoldWordsInFrame (cFrame, 0);
  }

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





}



function addPage(_frame){
  b.addPage(); //add new page
  pageCount++;
  b.page(pageCount); //go to new page
  textBoxes(_frame); //add text boxes

  // b.addPage();
  // pageCount++;

}
//==================================================================
// Usage:
// 1. myText = computeWordsToItalicize(myText);
// 2. then loop through the indicesOfWordsToItalicize array
function computeWordsToItalicize(someText) {
  // NOTE: This function has the beneficial side-effect of stripping out the escape codes
  // (*) that indicate italicization (as in, " *words to italicize* ") from someText

  // Initialize the (global) array of indices of words to italicize.
  indicesOfWordsToItalicize = [];

  // Get rid of a troublesome pattern that causes omitted results in basil.js.
  someText = someText.replace("\n\n", "\n \n");

  // Find all matches: of phrases that occur between asterisks:
  var myRegExForStuffBetweenAsterisks = /\*([^*]*)\*/g;
  var results = someText.match(myRegExForStuffBetweenAsterisks);

  if (results === null) {
    // There are no words to italicize.
    return someText;

  } else {

    // Find the indices of the words that are between asterisks
    var nResults = results.length;
    for (var i = 0; i < nResults; i++) {

      // Clean up the i'th result: remove asterisks and trim.
      var cleanedResulti = results[i].substring(1, results[i].length - 1);
      if (typeof cleanedResulti === 'string'){

        // Select the correct line below depending on the environment:
        // cleanedResulti = cleanedResulti.trim(); // trim() for p5.js
        cleanedResulti = b.trim(cleanedResulti);   // trim() for basil.js

        // Strip out the asterisks from the string that was passed in
        someText = someText.replace(results[i], cleanedResulti);

        // Find the character at which this particular match occurs.
        var charOfResulti = someText.indexOf(cleanedResulti);
    b.println("charOfResulti"+charOfResulti);
        // Find the number of words up to that point.
        var portionOfMyTextBeforeResulti;
        var nWordsBeforeResulti;
        if(charOfResulti==0){
          nWordsBeforeResulti=0;
        }else{
          // Find the number of words up to that point.
          var portionOfMyTextBeforeResulti = someText.substring(0, charOfResulti);
          b.println("portionOfMyTextBeforeResulti:"+portionOfMyTextBeforeResulti);
          var nWordsBeforeResulti = getNumberOfWordsInString (portionOfMyTextBeforeResulti);
          b.println("nWordsBeforeResulti:"+nWordsBeforeResulti);
        }



        var nWordsInCleanedResulti = getNumberOfWordsInString (cleanedResulti);
        b.println("nWordsInCleanedResulti:"+nWordsInCleanedResulti);
        // Accrue the indices (in the original text) of the individual result words.
        // print(i + ".\t" + nWordsInCleanedResulti + "\t|" + cleanedResulti + "|\t" + nWordsInResulti);
        for (var j = 0; j < nWordsInCleanedResulti; j++) {
          indicesOfWordsToItalicize.push(nWordsBeforeResulti + j);
        }
      }
    }
  }

  return someText;
}



//CONTENT------------------------------------------

function isEmpty(str) {
  // Order matters for these tests!
  return (!str || (0 === str.length));
}

function getNumberOfWordsInString(inputStr){
  // Note: We use a regex, because split()ting on " "
  // ( i.e.: myStr.split(" ").length ) doesn't catch all breaks!
  var arrayOfWordsInString = inputStr.match(/\S+/g);
  return (arrayOfWordsInString.length);
}


// It would be nice to get an extendscript dropshadow on the Title.
// Unfortunately, Basil.js does not expose this functionality, but it does seem possible.
// See the following links:
// http://tomkrcha.com/?p=3779
// http://www.tonton-pixel.com/blog/tutorials/layer-styles-quick-tutorial/
// Also see // b.inspect(metaFrame, 2);
//
// There appears to be a way to make a dropshadow if an Object Style is saved.
// https://delfeld.wordpress.com/2012/12/19/ai-script-example/
/*
// "myTextStyle" has to exist in the inDesign document.
var myTextStyle = doc.graphicStyles.getByName ("myTextStyle");
maintext = lyr.textFrames.add();
maintext.name = "text, main";
myTextStyle.applyTo( maintext ); // copy previously created style:
*/


b.go();
