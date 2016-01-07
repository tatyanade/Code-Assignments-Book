// Basil.js generator for "Exercises" pages// Tega Brain & Golan Levin, 2015-2016// References:// http://basiljs.ch/reference/// http://basiljs.ch/wp-content/uploads/2013/03/basiljs_b_typo_cheatsheet_v0_2.pdf// http://basiljs.ch/download/#includepath "~/Documents/;%USERPROFILE%Documents";#include "basiljs/bundle/basil.js";// to load an external json file usevar jsonString = b.loadString("data-exercises.json");//PAGESvar pages=5;/*26;*/ //how many pages? Pages in addition to the 1 the template.var assStartPage =1; //start assignments on what page?var titleFrame, varFrame, desFrame, briefFrame, metaFrame, makeFrame, aspFrame, addRefFrame;//FORMATTING VARIABLESvar colSpacing=20;var colWidth= (576-2*colSpacing)/3;var colTop = 100;var exHeading ="";  //heading variable//-------------------------------------------------------------------var defaultImg;var indicesOfWordsToItalicize = [];var pCounter=assStartPage; //start page variablevar iH = 80; //image heightvar iS = 20; //image spacevar dH = iH; //height of description box//column coordinatesvar eCounter=0; // counter to determine which column we are invar cx = 36;var cy = 77;//==========================================================function setup(){  // Should we be doing more stuff here? loading, initializing etc?  // TO DO: Would be nice to detect if INDD document already exists}//==========================================================function draw() {  b.textFont("Atlas Grotesk","Regular"); // set default font  // parse JSON  var jsonData = b.JSON.decode( jsonString );  var jLength = objLength(jsonData);  b.println("jsonLength:"+jLength);  //to auto generate doc length based on descrp  //pages = assStartPage + (jLength*4)-1;  //==========================================================  //Assignment brief page  for (var i = 0; i < jLength; i++) {    b.page(pCounter);    if(eCounter>3){ //change to second column coordinates      cx=339;      dy=eCounter-4;    }else{ //we are in column one      cx=36;      dy=eCounter;    }    //TITLE BOX    var heading = jsonData[i].heading;  //get heading    if(heading==exHeading){ //if same heading, stay on same page      writeExercise(jsonData[i].exercisetitle, jsonData[i].descriptions, jsonData[i].imagename, jsonData[i].codes);    }else{ //else if we have a new heading, then take a new page      b.println("New page: "+heading);      b.addPage();      pCounter=pCounter+1; //page counter      eCounter=0; //exercise counter back to 0      cx=36;      dy=eCounter;      //PAGE HEADING      exercisePageHeading(heading, 36, 36); //write heading      writeExercise(jsonData[i].exercisetitle, jsonData[i].descriptions, jsonData[i].imagename, jsonData[i].codes);      b.println("ecounter:"+eCounter);      exHeading=heading;      b.println("exHeading:"+exHeading);    }  }};//==========================================================//FORMATTINGfunction italicizeWordsInFrame(whichFrame, startParagraphIndex){  for (var j=0; j<(indicesOfWordsToItalicize.length); j++){    var aWord = indicesOfWordsToItalicize[j];    italicizing(whichFrame, startParagraphIndex, aWord);  }}function italicizing(tFrame, pNumber, wNumber){  var paraV = b.paragraphs(tFrame);  var wordsV = b.words(paraV[pNumber]);  b.typo(wordsV[wNumber], "fontStyle", "Regular Italic");}function bolding(tFrame, pNumber, wNumber){  var paraV = b.paragraphs(tFrame);  var wordsV = b.words(paraV[pNumber]);  b.typo(wordsV[wNumber], "fontStyle", "Bold");}function iBolding(tFrame, pNumber, wNumber){  var paraV = b.paragraphs(tFrame);  var wordsV = b.words(paraV[pNumber]);  b.typo(wordsV[wNumber], "fontStyle", "Bold Italic");}function typesetURLs (theFrame, theString){  // Set the URLs in a light-colored thin font.  // Extract the URLs  var urlRegex = /http(.*?)\n/g;  var extractedURLs = theString.match(urlRegex);  if (extractedURLs !== null) {    var allTheCharactersInThisFrame = b.characters(theFrame);    var nURLs = extractedURLs.length;    // For each URL    for (var i = 0; i < nURLs; i++) {      // Get the start and end character indices      var aURL = extractedURLs[i];      var startCharIndex = theString.indexOf(aURL);      var endCharIndex = startCharIndex + aURL.length;      // For each of those characters, color it.      for(var j = startCharIndex; j < endCharIndex; j++){        b.typo(allTheCharactersInThisFrame[j], "fontStyle", "Thin Italic");        b.typo(allTheCharactersInThisFrame[j], 'fillColor', b.color(96,96,96));      }    }  }}//==================================================================// Usage:// 1. myText = computeWordsToItalicize(myText);// 2. then loop through the indicesOfWordsToItalicize arrayfunction computeWordsToItalicize(someText) {  // NOTE: This function has the beneficial side-effect of stripping out the escape codes  // (*) that indicate italicization (as in, " *words to italicize* ") from someText  // Initialize the (global) array of indices of words to italicize.  indicesOfWordsToItalicize = [];  // Get rid of a troublesome pattern that causes omitted results in basil.js.  someText = someText.replace("\n\n", "\n \n");  // Find all matches: of phrases that occur between asterisks:  var myRegExForStuffBetweenAsterisks = /\*([^*]*)\*/g;  var results = someText.match(myRegExForStuffBetweenAsterisks);  if (results === null) {    // There are no words to italicize.    return someText;  } else {    // Find the indices of the words that are between asterisks    var nResults = results.length;    for (var i = 0; i < nResults; i++) {      // Clean up the i'th result: remove asterisks and trim.      var cleanedResulti = results[i].substring(1, results[i].length - 1);      if (typeof cleanedResulti === 'string'){        // Select the correct line below depending on the environment:        // cleanedResulti = cleanedResulti.trim(); // trim() for p5.js        cleanedResulti = b.trim(cleanedResulti);   // trim() for basil.js        // Strip out the asterisks from the string that was passed in        someText = someText.replace(results[i], cleanedResulti);        // Find the character at which this particular match occurs.        var charOfResulti = someText.indexOf(cleanedResulti);        // Find the number of words up to that point.        var portionOfMyTextBeforeResulti = someText.substring(0, charOfResulti);        var nWordsBeforeResulti = getNumberOfWordsInString (portionOfMyTextBeforeResulti);        var nWordsInCleanedResulti = getNumberOfWordsInString (cleanedResulti);        // Accrue the indices (in the original text) of the individual result words.        // print(i + ".\t" + nWordsInCleanedResulti + "\t|" + cleanedResulti + "|\t" + nWordsInResulti);        for (var j = 0; j < nWordsInCleanedResulti; j++) {          indicesOfWordsToItalicize.push(nWordsBeforeResulti + j);        }      }    }  }  return someText;}//CONTENT------------------------------------------function isEmpty(str) {  // Order matters for these tests!  return (!str || (0 === str.length));}function getNumberOfWordsInString(inputStr){  // Note: We use a regex, because split()ting on " "  // ( i.e.: myStr.split(" ").length ) doesn't catch all breaks!  var arrayOfWordsInString = inputStr.match(/\S+/g);  return (arrayOfWordsInString.length);}// It would be nice to get an extendscript dropshadow on the Title.// Unfortunately, Basil.js does not expose this functionality, but it does seem possible.// See the following links:// http://tomkrcha.com/?p=3779// http://www.tonton-pixel.com/blog/tutorials/layer-styles-quick-tutorial/// Also see // b.inspect(metaFrame, 2);//// There appears to be a way to make a dropshadow if an Object Style is saved.// https://delfeld.wordpress.com/2012/12/19/ai-script-example//*// "myTextStyle" has to exist in the inDesign document.var myTextStyle = doc.graphicStyles.getByName ("myTextStyle");maintext = lyr.textFrames.add();maintext.name = "text, main";myTextStyle.applyTo( maintext ); // copy previously created style:*/function assTitle1(_titles, _x, _y, _titlegray){  if (!isEmpty(_titles)){    b.textSize(24);    b.textFont("Atlas Grotesk","Medium");    b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.CENTER_ALIGN);    b.fill(_titlegray);    titleFrame = b.text(_titles, _x,_y,576,27.6);    titleFrame.name = "title";  }}function exTitle(_heading,_x,_y){  if (!isEmpty(_heading)){    // Note: we do this FIRST in order to strip out the markup tags.    _heading = computeWordsToItalicize(_heading);    //_codes = computeWordsToItalicize(_codes);    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Bold");    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    b.fill (0,0,0);    titleFrame =b.text(_heading, _x,_y,274.5-iH-5,11);    titleFrame.name = "description";    b.typo(titleFrame, 'hyphenation', true);    // italicizeWordsInFrame (desFrame, 1);  }}function writeExercise(_titles, _description, _image, _codes){  exTitle(_titles,cx, cy+(dy*(iH+iS)));  if(!isEmpty(_codes)){    //_codes = computeWordsToItalicize(_codes);  }  b.textSize(8);  b.textLeading(12);  b.textFont("Atlas Grotesk","Regular");  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);  b.fill (0,0,0);  //DESCRIPTION BOX  exDescription(_description, cx+iH+5, cy+(dy*(iH+iS))+11, _codes);  //IMAGES  var exImage = "defaults/default_60x60.jpg";  if(_image){    b.println("Image:"+_image);    exImage=_image;  }  b.noFill();  b.stroke(100);  b.strokeWeight(0.5);  b.image(exImage, cx, cy+(dy*(iH+iS))+11, iH, iH);  eCounter=eCounter+1;  b.noStroke();}function exercisePageHeading(_titles, _x, _y){  if (!isEmpty(_titles)){    b.textSize(24);    b.textFont("Atlas Grotesk","Medium");    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);    b.fill(0,0,0);    titleFrame = b.text(_titles, _x,_y,576,27.6);    titleFrame.name = "title";  }}function exDescription(_description, _x,_y, _codes){  if (!isEmpty(_description)){    // Note: we do this FIRST in order to strip out the markup tags.    _description = computeWordsToItalicize(_description +"\n"+_codes);    //_codes = computeWordsToItalicize(_codes);    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Regular");    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    b.fill (0,0,0);    // //  var brief = briefHeading+"\r"+_brief+"\n"+"\r";    desFrame =b.text(_description, _x,_y,288-iH-colSpacing/2-5,dH);    //  bolding(desFrame, 0, 0);    desFrame.name = "description";    b.typo(desFrame, 'hyphenation', true);    // italicizeWordsInFrame (desFrame, 1);    // if(desFrame.overflows){    //   b.itemSize(desFrame,274.5-iH-5,(iH*2)-12-2);    //   eCounter++;    //    // }  }}function addCodes(_box,_codes){  b.typo(_box,'contents',_codes);}function exBrief(_brief){  if (!isEmpty(_brief)){    // Note: we do this FIRST in order to strip out the markup tags.    _brief = computeWordsToItalicize(_brief);    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Regular");    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    b.fill (0,0,0);    var brief = briefHeading+"\r"+_brief+"\n"+"\r";    briefFrame =b.text(_brief, 36,colTop,colWidth,250);    //  bolding(briefFrame, 0, 0);    briefFrame.name = "brief";    b.typo(briefFrame, 'hyphenation', false);    italicizeWordsInFrame (briefFrame, 1);  }}function assMeta(_level, _stemTags, _artsTags, _learning){  // Note: \r, (not \n) is used to distinguish new paragraphs by Basil.js.  b.textSize(7);  b.textLeading(9);  b.textFont("Atlas Grotesk","Regular");  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.BOTTOM_ALIGN);  var metaText = levelHeading + _level + "\r"; //+"\r"+"STEM tags: "+_stemTags+"\r"+"Arts tags: "+_artsTags+"\r"+"Learning Objectives - Students will: "+"\n"+_learning;  metaText += stemHeading + _stemTags + "\r";  metaText += artsHeading + _artsTags + "\r";  metaText += learnHeading + "\r" + _learning + "\n\r";  metaLeastDy = 100;  metaFrame = b.text(metaText, 36,colTop+metaLeastDy,colWidth,(fullHeight-colTop)-metaLeastDy);  b.typo(metaFrame, "fontStyle", "Light Italic");  b.typo(metaFrame, 'hyphenation', true);  iBolding(metaFrame, 0, 0); // bold levelHeading  iBolding(metaFrame, 1, 0); // bold stemHeading  iBolding(metaFrame, 1, 1);  iBolding(metaFrame, 2, 0); // bold artsHeading  iBolding(metaFrame, 2, 1);  iBolding(metaFrame, 3, 0); // bold learnHeading  iBolding(metaFrame, 3, 1);  metaFrame.name = "meta";  b.typo(metaFrame,"leftIndent", 10);  b.typo(metaFrame,"rightIndent", 10);  var nMetaTextLines = b.lines(metaFrame).length;  var metaBoxHeight = (nMetaTextLines + 2) * b.textLeading();  // Make a solid frame of 0.5 thickness  b.rectMode( b.CORNER ); // default  b.noFill();  b.stroke(0,0,0);  b.strokeWeight(1);  b.rect(36,fullHeight,colWidth,0-metaBoxHeight);  b.fill(0,0,0);  b.stroke(0);}function assVariations(_variations, _advancedstudents){  b.textSize(8);  b.textLeading(12);  b.textFont("Atlas Grotesk","Regular");  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);  var outputString = "";  var nVariationWords = 0;  if (!isEmpty(_variations)){    outputString += variationsHeading + "\n" + _variations;    // nVariationWords = outputString.split(" ").length;    nVariationWords = getNumberOfWordsInString (outputString);  }  if (!isEmpty(_advancedstudents)){    outputString += "\n \n" + advancedHeading + "\n" + _advancedstudents + "\n";  }  // Note: we do this FIRST in order to strip out the markup tags.  outputString = computeWordsToItalicize(outputString);  if ((!isEmpty(_variations)) || (!isEmpty(_advancedstudents))){    varFrame = b.text(outputString, 36+colWidth+colSpacing,colTop,colWidth,fullHeight-colTop);  } else {    // We must *create* the frame, even if the string is empty, because the    // b.linkTextFrames(varFrame,makeFrame) under some circumstances.    varFrame = b.text(" ", 36+colWidth+colSpacing,colTop,colWidth,fullHeight-colTop);  }  if (!isEmpty(_variations)){    bolding(varFrame, 0, 0);    bolding(varFrame, 0, 1);    bolding(varFrame, 0, 2);  }  if (!isEmpty(_advancedstudents)){    bolding(varFrame, 0, nVariationWords+0);    bolding(varFrame, 0, nVariationWords+1);  }  b.typo(varFrame, 'hyphenation', true);  italicizeWordsInFrame (varFrame, 0);}function assMeaningful(_meaningful){  if (!isEmpty(_meaningful)){    // Note: we do this FIRST in order to strip out the markup tags.    _meaningful = computeWordsToItalicize(_meaningful);    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Regular");    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    var making = meaningfulHeading +"\r"+_meaningful;    makeFrame = b.text(making, 36+ colWidth*2+colSpacing*2,colTop,colWidth,fullHeight-colTop);    bolding(makeFrame, 0, 0);    bolding(makeFrame, 0, 1);    bolding(makeFrame, 0, 2);    b.typo(makeFrame, 'hyphenation', true);    italicizeWordsInFrame (makeFrame, 1);  }}function assAspiration(_aspiration){  if (!isEmpty(_aspiration)){    _aspiration = computeWordsToItalicize(_aspiration); // Do this first.    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Regular");    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    var aspirationString = aspirationHeading+"\r"+_aspiration+"\n";    aspFrame =b.text(aspirationString, 36,colTop,colWidth,fullHeight-colTop);    bolding(aspFrame, 0, 0);    bolding(aspFrame, 0, 1);    b.typo(aspFrame, 'hyphenation', false);    italicizeWordsInFrame (aspFrame, 1);    typesetURLs (aspFrame, aspirationString);  }}function assAdditionalReferences (_references){  if (!isEmpty(_references)){    _references = computeWordsToItalicize(_references); // Do this first.    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Regular");    b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    var theReferencesStrings = referenceHeading +"\r"+_references+"\n";    addRefFrame =b.text(theReferencesStrings, 36+colWidth+colSpacing,colTop,colWidth,fullHeight-colTop);    bolding(addRefFrame, 0, 0);    bolding(addRefFrame, 0, 1);    b.typo(addRefFrame, 'hyphenation', false);    italicizeWordsInFrame (addRefFrame, 1);    typesetURLs (addRefFrame, theReferencesStrings);  }}function objLength(obj){  var i=0;  for (var x in obj){    if(obj.hasOwnProperty(x)){      i++;    }  }  return i;}//===================================// DO IT!b.go();// GRAVEYARD:// function setup() {//   // parse JSON//   var jsonData = b.JSON.decode( jsonString );//   // run this on an empty document with only one page//   b.textFont('Arial', ['Italic'])//   b.textSize(24);//   b.text(jsonData.titles, 36,3, 576, 3);////   b.text(jsonData.address.city, 0,50, b.width, 50);//   b.text(jsonData.phoneNumber[0].number, 0,100, b.width, 50);////   // convert an object to a JSON-string//   b.println( b.JSON.encode(jsonData) );// }