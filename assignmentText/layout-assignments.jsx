// Basil.js generator for "Assignment" pages
// Tega Brain & Golan Levin, 2015-2017

// References:
// http://basiljs.ch/download/
// http://basiljs.ch/reference/
// http://basiljs.ch/wp-content/uploads/2013/03/basiljs_b_typo_cheatsheet_v0_2.pdf
#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

// See b.loadString("data-assignments.json") in setup(), where it belongs.
// Warnings are thrown if variables dependent on b. are initialized outside of setup.
var jsonString;

// Note: using advice from the following to check for null:
// http://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in

//PAGES
//var pages=14;/*26;*/ //how many pages? Pages in addition to the 1 the template.
var pageCount=0;
var assStartPage =1; //start assignments on what page?
var titleFrame, varFrame, desFrame, briefFrame, metaFrame, makeFrame, aspFrame, aspFrame2, addRefFrame, addRefFrame2;

//PAGE COUNTER
var pCounter=assStartPage; //start page variable
var jsonData;
var jLength=0;

//FORMATTING VARIABLES
var colSpacing = 20;
var colWidth   = (576-2*colSpacing)/3;
var colTop     = 100;
var halfInch   = 36;
var addrefx    = halfInch+colWidth+colSpacing;

var briefHeading      = "Brief";
var advancedHeading   = "Advanced Students";
var variationsHeading = "Variations & Suggestions";
var meaningfulHeading = "Making it Meaningful";
var aspirationHeading = "Noteworthy Examples";
var referenceHeading  = "Additional References";

var levelHeading = "Level: ";
var stemHeading  = "STEM Topics: ";
var artsHeading  = "Arts Topics: ";
var learnHeading = "Learning Objectives - Students will: ";

var bVerbose = true;

var graphSpace = 6;

//-------------------------------------------------------------------
/*
IMAGE LAYOUTS (Do not delete):
default_fullpage_666x522.jpg
default_onethird_282x136.jpg
default_quarter_282x210.jpg
default_shorthalf_576x210.jpg
default_tallhalf_282x432.jpg
default_twothirds_282x284.jpg
*/

// Point (1/72 in.) dimensions for default images:
var fullHeight = 468;
var wfull = 666;
var hfull = 522;
var wquar = 282;
var hquar = 210;
var wtall = wquar;
var htall = 432;
var wshor = 576;
var hshor = hquar;
var wthr1 = wquar;
var hthr1 = 136;
var wthr2 = wquar;
var hthr2 = 284;

// Point dimensions for image locations:
var Ax = 684;
var Cx = Ax;
var Ex = Ax;
var Gx = Ax;
var Bx = 978;
var Dx = Bx;
var Fx = Bx;
var Hx = Bx;
var xfull = 639;

var Ay = halfInch;
var By = Ay;
var Cy = 184;
var Dy = Cy;
var Ey = 258;
var Fy = Ey;
var Gy = 332;
var Hy = Gy;
var yfull = -9;


// Layout templates for the illustration pages:
var imageLayouts = [
  [
    [xfull, yfull, wfull, hfull]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Bx, By, wquar, hquar],
    [Ex, Ey, wshor, hshor]
  ],
  [
    [Ax, Ay, wshor, hshor],
    [Ex, Ey, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wshor, hshor],
    [Ex, Ey, wshor, hshor]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr1, hthr1],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr1, hthr1],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr2, hthr2],
    [Bx, By, wthr2, hthr2],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr2, hthr2],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr2, hthr2]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr1, hthr1],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr1, hthr1],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr2, hthr2]
  ],
  [
    [Ax, Ay, wtall, htall],
    [Bx, By, wthr2, hthr2],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr2, hthr2],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wthr2, hthr2],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wtall, htall]
  ],
  [
    [Ax, Ay, wthr2, hthr2],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr1, hthr1],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr1, hthr1],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wthr2, hthr2],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr1, hthr1],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr1, hthr1],
    [Hx, Hy, wthr1, hthr1]
  ],
  [
    [Ax, Ay, wthr1, hthr1],
    [Cx, Cy, wthr2, hthr2],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wthr1, hthr1],
    [Dx, Dy, wthr2, hthr2]
  ],
  [
    [Ax, Ay, wthr2, hthr2],
    [Gx, Gy, wthr1, hthr1],
    [Bx, By, wquar, hquar],
    [Fx, Fy, wquar, hquar]
  ],
  [
    [Ax, Ay, wquar, hquar],
    [Ex, Ey, wquar, hquar],
    [Bx, By, wthr2, hthr2],
    [Hx, Hy, wthr1, hthr1]
  ],
];


var defaultImg;
var imageArray =[];
var imageBorderArray =[];
var indicesOfWordsToItalicize = [];


//==========================================================
function setup(){

  // Load & parse the JSON exported from the Google spreadsheet.
  jsonString = b.loadString("data-assignments.json");
  jsonData   = b.JSON.decode( jsonString );
  jLength    = objLength(jsonData);

  if (bVerbose) {b.println("jLength:"+jLength);}
  b.page(pCounter);
  b.textFont("Atlas Grotesk","Regular"); // set default font


}


//==========================================================
function draw() {

  if (bVerbose) {b.println(jsonData);}

  //images
  imageArray = new Array(jLength);
  imageBorderArray = new Array(jLength);
  for(var j =0; j<imageArray.length;j++){
    imageArray[j]="defaults/default_fullpage_666x522.jpg";
    if (bVerbose) {b.println(imageArray[j]);}
  }

  //to auto generate doc length based on json
  pages = (jLength*4);
  if (bVerbose) {b.println("pages: "+pages);}

  // add new pages
  for (var i = 1; i < pages; i++) {
    b.addPage();

    //RESET EVERYTHING
    pCounter=pCounter+1; //page counter
    if (bVerbose) {b.println("pageCounter:"+pCounter);}
  }

  //-------------------------------------------------------
  //Assignment title page add image
  for (var i = 0; i < (pCounter/4); i++) {
    b.page((i*4)+assStartPage);
    //ADD PAGE

    // Get the i'th full-page image, using the default image if N/A
    var fullImage = "defaults/default_fullpage_666x522.jpg";
    if(jsonData[i].fullpageimage != null){
      fullImage = jsonData[i].fullpageimage;
      if (bVerbose) {b.println("fullImage = " + fullImage);}
    }

    // Render the full-page image.
    b.pushMatrix();
    b.translate(0-b.width, 0);
    var fullImageArray = [fullImage];
    drawImageLayout (0, fullImageArray,[0]);
    b.popMatrix();

    // Render the main title, which overlays the full-page image.
    // (Fetch the gray level of the title text color from the JSON.)
    var titleTextGrayLevel = 128;
    if (jsonData[i].titlegray != null){
      titleTextGrayLevel = jsonData[i].titlegray;
    }
    assTitle1(jsonData[i].titles, halfInch, 441, titleTextGrayLevel);
    if (bVerbose) {b.println("New page: "+jsonData[i].titles);}
  }


  //-------------------------------------------------------
  // Assignment brief page
  for (var i = 0; i < (pCounter/4); i++) {
    b.page((i*4+1)+assStartPage);

    //TITLE
    if (bVerbose) {b.println("Rendering Assignment: " + jsonData[i].titles);}
    assTitle2(jsonData[i].titles, halfInch, halfInch);

    //DESCRIPTION
    if (bVerbose) {b.println("--- Description");}
    assDescription(jsonData[i].shortdescription);

    //BRIEF
    if (bVerbose) {b.println("--- Brief");}
    assBrief(jsonData[i].brief);

    //META DATA
    if (bVerbose) {b.println("--- Meta");}
    assMeta(jsonData[i].tagsstem,
            jsonData[i].tagsarts,
            jsonData[i].learningobjectives);

    //VARIATIONS & ADVANCED STUDENTS
    if (bVerbose) {b.println("--- Variations & Advanced");}
    assVariations(jsonData[i].variations, jsonData[i].advancedstudents);

    //MAKING IT MEANINGFUL.
    if (bVerbose) {b.println("--- Meaningful");}
    var meaningfulText = jsonData[i].makingitmeaningful;
    if (!isEmpty(meaningfulText)) {
      var bDoHyphenation = false;
      if (jsonData[i].hyphenatemim != null){
        bDoHyphenation = (jsonData[i].hyphenatemim === 1);
      }
      assMeaningful(meaningfulText, bDoHyphenation);
    }

    // If the "Making it Meaningful" text is VERY long,
    // advance its visual position, by linking it
    // into the bottom of the text frame for "Variations".
    //     if (bVerbose) {b.println("--- Meaningful (Linking 1)");}
    //     if (!isEmpty(meaningfulText)){
    //       var nMeaningfulWords = getNumberOfWordsInString (meaningfulText);
    //       if (nMeaningfulWords > 200){
    //         if (bVerbose) {b.println("--- Meaningful (Linking 2)");}
    //         b.linkTextFrames(varFrame,makeFrame);
    //       }
    //     }

    if (bVerbose) {b.println("--- End: " + jsonData[i].titles);}
  }


  //==========================================================
  //Assignment image pages
  for (var i = 0; i < (pCounter/4); i++) {
    b.page((i*4+2)+assStartPage);

    var imagesString = jsonData[i].image;
    if (imagesString != null){

      var stringArray= b.split(imagesString,"\n");
      for(var n=0;n<stringArray.length;n++){
        imageArray[n]= b.trim (stringArray[n]);
      }
      var imagesborderString = jsonData[i].imageborders;
      if (imagesborderString != null){
        var stringArray2= b.split(imagesborderString,"\n");
        for(var n=0;n<stringArray2.length;n++){
          imageBorderArray[n]= parseInt(b.trim(stringArray2[n]));
        }
      }

      // Render the images of aspirational projects for this Assignment.
      b.pushMatrix();
      b.translate(0-b.width, 0);
      if (bVerbose){b.println("imageBorderArray:"+imageBorderArray);}

      if (jsonData[i].layout !== null){
        drawImageLayout (jsonData[i].layout, imageArray, imageBorderArray);
      }
      b.popMatrix();
    }
  }

 
  //==========================================================
  //Image reference page
  for (var i = 0; i < (pCounter/4); i++) {
    b.page((i*4+3)+assStartPage);

    // Draw the miniature version of the aspirational-image frames (rects and text only):
    drawSmallImageLayoutFrames(jsonData[i].layout);

    // b.stroke(0,0,0);
    // b.fill(0,0,0);


    // IMAGE CAPTIONS FOR NOTEWORTHY EXAMPLE IMAGES
    assAspiration(jsonData[i].aspirationcaptions);
    
    // ADDITIONAL REFERENCES
    assAdditionalReferences(jsonData[i].additionalreferences);

  }
  

};

//==========================================================
//FORMATTING
function italicizeWordsInFrame(whichFrame, startParagraphIndex){
  for (var j=0; j<(indicesOfWordsToItalicize.length); j++){
    var aWord = indicesOfWordsToItalicize[j];
    italicizing(whichFrame, startParagraphIndex, aWord);
  }
}

function italicizing(tFrame, pNumber, wNumber){
  var paraV = b.paragraphs(tFrame);
  if (paraV != null){
    var wordsV = b.words(paraV[pNumber]);
    if (wordsV != null){
      if (wordsV[wNumber] != null){
        b.typo(wordsV[wNumber], "fontStyle", "Regular Italic");
      }
    }
  }
}

function bolding(tFrame, pNumber, wNumber){
  var paraV = b.paragraphs(tFrame);
  if (paraV != null){
    var wordsV = b.words(paraV[pNumber]);
    if (wordsV != null){
      if (wordsV[wNumber] != null){
        b.typo(wordsV[wNumber], "fontStyle", "Bold");
      }
    }
  }
}

function iBolding(tFrame, pNumber, wNumber){
  var paraV = b.paragraphs(tFrame);
  if (paraV != null){
    var wordsV = b.words(paraV[pNumber]);
    if (wordsV != null){
      if (wordsV[wNumber] != null){
        b.typo(wordsV[wNumber], "fontStyle", "Bold Italic");
      }
    }
  }
}


function typesetURLs (theFrame, theString){
  // Set the URLs in a thin, light-colored Italic font.

  // Extract the URLs
  var urlRegex = /http(.*?)\n/g;
  var extractedURLs = theString.match(urlRegex);
  if (extractedURLs !== null) {

    var allTheCharactersInThisFrame = b.characters(theFrame);
    if (allTheCharactersInThisFrame != null){

      var nURLs = extractedURLs.length;
      var urlGrey = b.color(96,96,96);

      // For each URL
      for (var i = 0; i < nURLs; i++) {

        // Get the start and end character indices
        var aURL = extractedURLs[i];
        if (aURL.length > 0){
          var startCharIndex = theString.indexOf(aURL);
          var endCharIndex = startCharIndex + aURL.length;

          // For each of those characters, color it.
          for (var j = startCharIndex; j < endCharIndex; j++){
            var jthCharacterObject = allTheCharactersInThisFrame[j];
            if (jthCharacterObject != null){
              b.typo(jthCharacterObject, "fontStyle", "Light Italic");
              b.typo(jthCharacterObject, 'fillColor', urlGrey);
            }
          }
        }
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
        //b.println("charOfResulti"+charOfResulti);

        // Find the number of words up to that point.
        var portionOfMyTextBeforeResulti;
        var nWordsBeforeResulti;
        if(charOfResulti==0){
          nWordsBeforeResulti=0;
        } else{
          // Find the number of words up to that point.
          var portionOfMyTextBeforeResulti = someText.substring(0, charOfResulti);
          //b.println("portionOfMyTextBeforeResulti:"+portionOfMyTextBeforeResulti);
          var nWordsBeforeResulti = getNumberOfWordsInString (portionOfMyTextBeforeResulti);
        //  b.println("nWordsBeforeResulti:"+nWordsBeforeResulti);
        }

        var nWordsInCleanedResulti = getNumberOfWordsInString (cleanedResulti);
        // b.println("nWordsInCleanedResulti:"+nWordsInCleanedResulti);
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

function assTitle1(_titles, _x, _y, _titlegray){
  if (!isEmpty(_titles)){
    b.textSize(24);
    b.textFont("Atlas Grotesk","Medium");
    b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.CENTER_ALIGN);
    b.fill(_titlegray);
    titleFrame = b.text(_titles, _x,_y, 576,27.6);
    titleFrame.name = "title";
  }
}


function assTitle2(_titles, _x, _y){
  if (!isEmpty(_titles)){
    b.textSize(24);
    b.textFont("Atlas Grotesk","Medium");
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);
    b.fill(0,0,0);
    titleFrame = b.text(_titles, _x,_y,576,27.6);
    titleFrame.name = "title";
  }
}


function assDescription(_description){
  if (!isEmpty(_description)){
    b.textSize(12);
    b.textFont("Atlas Grotesk","Regular");
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
    b.fill(0,0,0);
    desFrame = b.text(_description, 36,68,550,16);
    desFrame.name = "description";

  }
}


function assBrief(_brief){
  if (!isEmpty(_brief)){

    // Note: we do this FIRST in order to strip out the markup tags.
    if(_brief){_brief = _brief.replace("\r", "");}
    _brief = computeWordsToItalicize(_brief);

    b.textSize(8);
    b.textLeading(12);
    b.textFont("Atlas Grotesk","Regular");
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
    b.fill (0,0,0);

    var brief = briefHeading + "\r" + _brief;
    briefFrame = b.text(brief, 36,colTop,colWidth,250);

    bolding(briefFrame, 0, 0);
    briefFrame.name = "brief";

    if (briefFrame != null){
      b.typo(briefFrame, "hyphenation", false);
      //b.typo(briefFrame, "spaceAfter", 6); //need this to put in paragraph spacing eventually but its giving me trouble.
      italicizeWordsInFrame (briefFrame, 1);
    }

  }
}


function assMeta(_stemTags, _artsTags, _learning){
  if ((!isEmpty(_stemTags)) ||
      (!isEmpty(_artsTags)) ||
      (!isEmpty(_learning))) {

    // Note: \r, (not \n) is used by Basil.js to distinguish new paragraphs.
    if(_stemTags){_stemTags = _stemTags.replace("\r", "");}
    if(_artsTags){_artsTags = _artsTags.replace("\r", "");}
    if(_learning){_learning = _learning.replace("\r", "");}

    b.textSize(7);
    b.textLeading(9);
    b.textFont("Atlas Grotesk","Regular");
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.BOTTOM_ALIGN);

    var metaText = "";
    metaText += stemHeading + _stemTags + "\r";
    metaText += artsHeading + _artsTags + "\r";
    metaText += learnHeading + "\n" + _learning;
    metaText += "\n"; // (adds a space below bottom-justified text)

    metaLeastDy = 240;
    metaFrame = b.text(metaText,
      36, colTop+metaLeastDy-5,
      colWidth, (fullHeight-colTop)-metaLeastDy);

    b.typo(metaFrame, "fontStyle", "Light Italic");
    b.typo(metaFrame, "hyphenation", false);
    b.typo(metaFrame, "leftIndent",  10);
    b.typo(metaFrame, "rightIndent", 10);

    // Bold the 0'th and 1'st words in the 0th, 1st, and 2nd
    // paragraphs -- corresponding to the words "STEM Topics:",
    // "Arts Topics:", and "Learning Objectives":
    //
    iBolding(metaFrame, 0, 0); // bold stemHeading
    iBolding(metaFrame, 0, 1);
    iBolding(metaFrame, 1, 0); // bold artsHeading
    iBolding(metaFrame, 1, 1);
    iBolding(metaFrame, 2, 0); // bold learnHeading
    iBolding(metaFrame, 2, 1);

    metaFrame.name = "meta";
    var nMetaTextLines = b.lines(metaFrame).length;
    var metaBoxHeight = (nMetaTextLines + 3) * b.textLeading() - 4;

    // Make a solid frame border.
    b.rectMode( b.CORNER ); // default
    b.noFill();
    b.stroke(0,0,0);
    b.strokeWeight(1);
    b.rect(36,fullHeight,colWidth,0-metaBoxHeight);
    b.fill(0,0,0);
    b.stroke(0);
  }
}


function assVariations(_variations, _advancedstudents){
  if ((!isEmpty(_variations)) || (!isEmpty(_advancedstudents))) {

    if (_variations){_variations = _variations.replace("\r", "");}
    if (_advancedstudents){_advancedstudents = _advancedstudents.replace("\r", "");}

    b.textSize(8);
    b.textLeading(12);
    b.textFont("Atlas Grotesk","Regular");
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);

    var outputString = "";
    var nVariationWords = 0;

    if (!isEmpty(_variations)){
      outputString += variationsHeading + "\n" + _variations;
      // nVariationWords = outputString.split(" ").length;
      nVariationWords = getNumberOfWordsInString (outputString);
    }
    if (!isEmpty(_advancedstudents)){
      outputString += "\n \n" + advancedHeading + "\n" + _advancedstudents + "\n";
    }

    // Note: we do this FIRST in order to strip out the markup tags.
    outputString = computeWordsToItalicize(outputString);

    if ((!isEmpty(_variations)) || (!isEmpty(_advancedstudents))){
      varFrame = b.text(outputString, 36+colWidth+colSpacing,colTop,colWidth,fullHeight-colTop);
    } else {
      // We must *create* the frame, even if the string is empty, because the
      // b.linkTextFrames(varFrame,makeFrame) under some circumstances.
      varFrame = b.text(" ", 36+colWidth+colSpacing,colTop,colWidth,fullHeight-colTop);
    }

    if (!isEmpty(_variations)){
      bolding(varFrame, 0, 0);
      bolding(varFrame, 0, 1);
      bolding(varFrame, 0, 2);
    }
    if (!isEmpty(_advancedstudents)){
      bolding(varFrame, 0, nVariationWords+0);
      bolding(varFrame, 0, nVariationWords+1);
    }

    b.typo(varFrame, "hyphenation", false);
    italicizeWordsInFrame (varFrame, 0);

  }
}


function assMeaningful(_meaningful, _bDoHyphenation){
  if (!isEmpty(_meaningful)){

    // Note: we do this FIRST in order to strip out the markup tags.
    if (_meaningful){_meaningful = _meaningful.replace("\r", "");}
    _meaningful = computeWordsToItalicize(_meaningful);

    b.textSize(8);
    b.textLeading(12);
    b.textFont("Atlas Grotesk","Regular");
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);

    var making = meaningfulHeading + "\r" +_meaningful;
    makeFrame = b.text(making, 36+colWidth*2+colSpacing*2, colTop,colWidth,fullHeight-colTop);
    bolding(makeFrame, 0, 0);
    bolding(makeFrame, 0, 1);
    bolding(makeFrame, 0, 2);

    // hyphenate 'Making it Meaningful'
    b.typo(makeFrame, "hyphenation", _bDoHyphenation);
    italicizeWordsInFrame (makeFrame, 1);

  }
}


function assAspiration(_aspiration){
  if (!isEmpty(_aspiration)){

    if(_aspiration){_aspiration = _aspiration.replace("\r", "");}
    _aspiration = computeWordsToItalicize(_aspiration); // Do this first.

    //change font size here ******
    b.textSize(7);
    b.textLeading(11);
    b.textFont("Atlas Grotesk","Regular");
    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
    var aspirationString = aspirationHeading+"\r"+_aspiration+"\n";
    aspFrame = b.text(aspirationString, 36,colTop,colWidth,fullHeight-colTop);

    bolding(aspFrame, 0, 0);
    bolding(aspFrame, 0, 1);

    b.typo(aspFrame, "hyphenation", false);
    italicizeWordsInFrame (aspFrame, 1);
    typesetURLs (aspFrame, aspirationString);

  }
}


function assAdditionalReferences (_references){
  if (!isEmpty(_references)){

    if(_references){
      _references = _references.replace("\r", "");
      _references = computeWordsToItalicize(_references); // Do this first.

    b.textSize(7);
    b.textLeading(11);
      b.textFont("Atlas Grotesk","Regular");
      b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
      var theReferencesStrings = referenceHeading +"\r"+_references+"\n";
      addRefFrame = b.text(theReferencesStrings, addrefx,colTop,colWidth,fullHeight-colTop);
      bolding(addRefFrame, 0, 0);
      bolding(addRefFrame, 0, 1);

      b.typo(addRefFrame, "hyphenation", false);
      italicizeWordsInFrame (addRefFrame, 1);
      typesetURLs (addRefFrame, theReferencesStrings);

      if (addRefFrame.overflows){
        addRefFrame2 = b.text(" ", addrefx+colWidth+colSpacing,colTop,colWidth,fullHeight-colTop);
        b.linkTextFrames(addRefFrame,addRefFrame2);

        /* // bug appears to be in here, typesetting the overflow frame...
        b.typo(addRefFrame2, "hyphenation", false);
        italicizeWordsInFrame (addRefFrame2, 1);
        typesetURLs (addRefFrame2, theReferencesStrings);
        */
      }
    }

  }
}


function objLength(obj){
  var i=0;
  for (var x in obj){
    if (obj.hasOwnProperty(x)){
      i++;
    }
  }
  return i;
}


//IMAGE LAYOUT FUNCTIONS
//==========================================================
// Draw the Aspirational images, arranged according to the layout ID.
function drawImageLayout (whichImageLayout, images, imageBorders) {

  var nImageLayouts = imageLayouts.length;
  if ((whichImageLayout >= 0) && (whichImageLayout < nImageLayouts)) {

    var anImageLayout = imageLayouts[whichImageLayout];
    var nRectsInLayout = anImageLayout.length;
    nRectsInLayout = b.min(nRectsInLayout, 6);

    for (var i = 0; i < nRectsInLayout; i++) {
      var aRect = anImageLayout[i];
      var rx = aRect[0];
      var ry = aRect[1];
      var rw = aRect[2];
      var rh = aRect[3];
      if (bVerbose){b.println(images[i]);}

      b.noFill();

      //if 1 in array for image border
      if(imageBorders[i] == 1){
        b.strokeWeight(0.5);
        b.stroke(204,204,204);
      } else{
        //put stroke if 0 no stroke
        b.noStroke();
      }

      b.image (String(images[i]), rx, ry, rw, rh);

    }
  }
}


// Draw the miniature version of the image frames, as a 'key'.
function drawSmallImageLayoutFrames (whichImageLayout){
  if (whichImageLayout){ // null test

    var shrink = 1.0/8.0;
    var delta = Ay;
    var lineWeight = 0.5;
    var numeralSize = 7;
    var numeralDx = 4;
    var numeralDy = 5;

    // translate (inset) to top left corner, after margins.
    b.pushMatrix();
    b.translate(36,Ay);

    //--------------
    // Draw the rectangle that represents the "Cover" image.
    var rx = (Ax - b.width - delta)*shrink;
    var ry = (Ay - delta)*shrink;
    var rw = wshor * shrink;
    var rh = htall * shrink;
    drawImageFrameRect (rx,ry, rw,rh, lineWeight);
    drawImageFrameNumeral (rx+numeralDx, ry+numeralDy, 1, numeralSize);

    //--------------
    // Draw the rectangles for the multi-image page
    var xOffset = wshor+(12*4);
    var nImageLayouts = imageLayouts.length;
    if ((whichImageLayout >= 0) && (whichImageLayout < nImageLayouts)) {
      var anImageLayout = imageLayouts[whichImageLayout];
      var nRectsInLayout = anImageLayout.length;

      for (var i = 0; i < nRectsInLayout; i++) {
        var aRect = anImageLayout[i];
        rx = aRect[0];
        ry = aRect[1];
        rw = aRect[2];
        rh = aRect[3];

        rx = (rx + xOffset - b.width - delta)*shrink;
        ry = (ry - delta)*shrink;
        rw = rw * shrink;
        rh = rh * shrink;

        drawImageFrameRect (rx, ry, rw, rh, lineWeight);
        drawImageFrameNumeral (rx+numeralDx, ry+numeralDy, i+2, numeralSize);
      }
    }

    b.popMatrix();
  }
}

// Helper function for drawSmallImageLayoutFrames().
function drawImageFrameRect(rx, ry, rw, rh, lineWeight){
  b.noFill();
  b.stroke(0, 0, 0);
  b.strokeWeight (lineWeight);
  b.rect(rx, ry, rw, rh);
}

// Helper function for drawSmallImageLayoutFrames().
function drawImageFrameNumeral (nx, ny, num, numeralSize){
  b.textSize(7);
  b.textLeading(9);
  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);
  b.fill(0,0,0);
  b.noStroke();
  b.textSize (numeralSize);
  b.text(num, nx,ny, 12,10);
}

//===================================
// DO IT! (*quietly!*)
b.go (b.MODESILENT);



// GRAVEYARD:
// Sample Basil.js program to load & render JSON.
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
