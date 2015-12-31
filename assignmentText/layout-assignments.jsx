// Basil.js generator for "Assignment" pages// Tega Brain & Golan Levin, 2015-2016#includepath "~/Documents/;%USERPROFILE%Documents";#include "basiljs/bundle/basil.js";// to load an external json file usevar jsonString = b.loadString("data.json");//PAGESvar pages=10;/*26;*/ //how many pages? Pages in addition to the 1 the template.var assStartPage =3; //start assignments on what page?var titleFrame, varFrame, desFrame, bFrame, metaFrame, makeFrame, aspFrame, addRefFrame;//FORMATTING VARIABLESvar colSpacing=20;var colWidth= (576-2*colSpacing)/3;var briefHeading      = "Brief"; var advancedHeading   = "Advanced Students"var variationsHeading = "Variations & Suggestions";var meaningfulHeading = "Making it Meaningful";var aspirationHeading = "Aspirational Examples";var referenceHeading  = "Additional References";//-------------------------------------------------------------------//IMAGE LAYOUTS/*default_fullpage_666x522.jpgdefault_onethird_282x136.jpgdefault_quarter_282x210.jpgdefault_shorthalf_576x210.jpgdefault_tallhalf_282x432.jpgdefault_twothirds_282x284.jpg*/// Point (1/72 in.) dimensions for default images:var wfull = 666;var hfull = 522;var wquar = 282;var hquar = 210;var wtall = wquar;var htall = 432;var wshor = 576;var hshor = hquar;var wthr1 = wquar;var hthr1 = 136;var wthr2 = wquar;var hthr2 = 284;// Point dimensions for image locations:var Ax = 684;var Cx = Ax;var Ex = Ax;var Gx = Ax;var Bx = 978;var Dx = Bx;var Fx = Bx;var Hx = Bx;var xfull = 639;var Ay = 36;var By = Ay;var Cy = 184;var Dy = Cy;var Ey = 258;var Fy = Ey;var Gy = 332;var Hy = Gy;var yfull = -9;// Layout templates for the illustration pages:var imageLayouts = [  [	    [xfull, yfull, wfull, hfull]  ],  [	    [Ax, Ay, wquar, hquar],    [Ex, Ey, wquar, hquar],    [Bx, By, wquar, hquar],    [Fx, Fy, wquar, hquar]  ],  [     [Ax, Ay, wquar, hquar],    [Ex, Ey, wquar, hquar],    [Bx, By, wtall, htall]  ],  [    [Ax, Ay, wtall, htall],    [Bx, By, wquar, hquar],    [Fx, Fy, wquar, hquar]  ],  [    [Ax, Ay, wtall, htall],    [Bx, By, wtall, htall]  ],  [    [Ax, Ay, wquar, hquar],    [Bx, By, wquar, hquar],    [Ex, Ey, wshor, hshor]  ],  [    [Ax, Ay, wshor, hshor],    [Ex, Ey, wquar, hquar],    [Fx, Fy, wquar, hquar]  ],  [    [Ax, Ay, wshor, hshor],    [Ex, Ey, wshor, hshor]  ],  [    [Ax, Ay, wthr1, hthr1],    [Cx, Cy, wthr1, hthr1],    [Gx, Gy, wthr1, hthr1],    [Bx, By, wthr1, hthr1],    [Dx, Dy, wthr1, hthr1],    [Hx, Hy, wthr1, hthr1]  ],  [    [Ax, Ay, wthr1, hthr1],    [Cx, Cy, wthr2, hthr2],    [Bx, By, wthr2, hthr2],    [Hx, Hy, wthr1, hthr1]  ],  [    [Ax, Ay, wthr2, hthr2],    [Gx, Gy, wthr1, hthr1],    [Bx, By, wthr1, hthr1],    [Dx, Dy, wthr2, hthr2]  ],  [    [Ax, Ay, wtall, htall],    [Bx, By, wthr1, hthr1],    [Dx, Dy, wthr1, hthr1],    [Hx, Hy, wthr1, hthr1]  ],  [    [Ax, Ay, wthr1, hthr1],    [Cx, Cy, wthr1, hthr1],    [Gx, Gy, wthr1, hthr1],    [Bx, By, wtall, htall]  ],  [    [Ax, Ay, wtall, htall],    [Bx, By, wthr1, hthr1],    [Dx, Dy, wthr2, hthr2]  ],  [    [Ax, Ay, wtall, htall],    [Bx, By, wthr2, hthr2],    [Hx, Hy, wthr1, hthr1]  ],  [    [Ax, Ay, wthr1, hthr1],    [Cx, Cy, wthr2, hthr2],    [Bx, By, wtall, htall]  ],  [    [Ax, Ay, wthr2, hthr2],    [Gx, Gy, wthr1, hthr1],    [Bx, By, wtall, htall]  ],  [    [Ax, Ay, wthr2, hthr2],    [Gx, Gy, wthr1, hthr1],    [Bx, By, wthr1, hthr1],    [Dx, Dy, wthr1, hthr1],    [Hx, Hy, wthr1, hthr1]  ],  [    [Ax, Ay, wthr1, hthr1],    [Cx, Cy, wthr1, hthr1],    [Gx, Gy, wthr1, hthr1],    [Bx, By, wthr2, hthr2],    [Hx, Hy, wthr1, hthr1]  ],  [    [Ax, Ay, wthr1, hthr1],    [Cx, Cy, wthr1, hthr1],    [Gx, Gy, wthr1, hthr1],    [Bx, By, wquar, hquar],    [Fx, Fy, wquar, hquar]  ],  [    [Ax, Ay, wquar, hquar],    [Ex, Ey, wquar, hquar],    [Bx, By, wthr1, hthr1],    [Dx, Dy, wthr1, hthr1],    [Hx, Hy, wthr1, hthr1]  ],  [    [Ax, Ay, wthr1, hthr1],    [Cx, Cy, wthr2, hthr2],    [Bx, By, wquar, hquar],    [Fx, Fy, wquar, hquar]  ],  [    [Ax, Ay, wquar, hquar],    [Ex, Ey, wquar, hquar],    [Bx, By, wthr1, hthr1],    [Dx, Dy, wthr2, hthr2]  ],  [    [Ax, Ay, wthr2, hthr2],    [Gx, Gy, wthr1, hthr1],    [Bx, By, wquar, hquar],    [Fx, Fy, wquar, hquar]  ],  [    [Ax, Ay, wquar, hquar],    [Ex, Ey, wquar, hquar],    [Bx, By, wthr2, hthr2],    [Hx, Hy, wthr1, hthr1]  ],];var defaultImg;var imageArray =[];function draw() {  b.textFont("Atlas Grotesk","Regular"); // set default font  // parse JSON  var jsonData = b.JSON.decode( jsonString );  //images  imageArray = new Array(5);  for(var j =0; j<imageArray.length;j++){    imageArray[j]="defaults/default_fullpage_666x522.jpg";    b.println(imageArray[j]);  }  //  imageArray = new Array(imagesA[0], imagesA[1], imagesA[2], imagesA[3], imagesA[4], imagesA[5]);  // TODO: Would be nice to detect if INDD document already exists  var jLength = objLength(jsonData);  //to auto generate doc length based on json  //pages = assStartPage + (jLength*4)-1;  // add new pages  for (var i = 1; i < pages; i++) {    b.addPage();  };  //==========================================================  //Assignment title page  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {    b.page((i*4)+assStartPage);    var fullImage = "defaults/default_fullpage_666x522.jpg";    if(jsonData[i].fullpageimage != null){      fullImage=jsonData[i].fullpageimage;      b.println("fullImage = " + fullImage);     }    b.pushMatrix();    b.translate(0-b.width, 0);    var fullImageArray = [fullImage];    drawImageLayout (0, fullImageArray);    b.popMatrix();  };  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {    b.page((i*4)+assStartPage);    assTitle1(jsonData[i].titles, 36, 441, jsonData[i].titlegray);  };  //==========================================================  //Assignment brief page  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {    b.page(((i)*4)+1+assStartPage);    //TITLE    b.println("Rendering Assignment: " + jsonData[i].titles);    assTitle2(jsonData[i].titles, 36, 36);    //DESCRIPTION    // b.println("--- Description");    assDescription(jsonData[i].shortdescription);    //BRIEF    // b.println("--- Brief");    assBrief(jsonData[i].brief);    //META DATA    // b.println("--- Meta");    assMeta(jsonData[i].level,jsonData[i].tagsstem, jsonData[i].tagsarts, jsonData[i].learningobjectives);    //VARIATIONS & ADVANCED STUDENTS    // b.println("--- Variations & Advanced");    assVariations(jsonData[i].variations, jsonData[i].advancedstudents);    //MAKING IT MEANINGFUL.    // b.println("--- Meaningful");    var meaningfulText = jsonData[i].makingitmeaningful;    assMeaningful(meaningfulText);    // If the "Making it Meaningful" text is very long,     // advance its visual position, by linking it     // into the text frame for "Variations".    // b.println("--- Meaningful (Linking 1)");    if (!isEmpty(meaningfulText)){      var nMeaningfulWords = meaningfulText.split(" ").length;      if (nMeaningfulWords > 200){        // b.println("--- Meaningful (Linking 2)");        b.linkTextFrames(varFrame,makeFrame);      }    }    // b.println("--- End: " + jsonData[i].titles);  };  b.textSize(7);  b.textLeading(9);  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);  // for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {  //   b.page(((i)*4)+1+assStartPage);  //   assMeta(jsonData[i].level,jsonData[i].tagsstem, jsonData[i].tagsarts, jsonData[i].learningobjectives);  // };  //==========================================================  //Assignment image pages  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {    b.page((i)*4+2+assStartPage);    //defaultImg = loadImage("default.jpg");    var imagesString = jsonData[i].image;    //b.println("imagesString: "+imagesString);    if (imagesString != null){      var stringArray= b.split(imagesString,"\n");      for(var n=0;n<stringArray.length;n++){        b.println("imagesString:"+stringArray[n]);        imageArray[n]=stringArray[n];      }    }    // Render the images of aspirational projects for this Assignment.    b.pushMatrix();    b.translate(0-b.width, 0);    drawImageLayout (jsonData[i].layout, imageArray);    b.popMatrix();  };  //==========================================================  //Image reference page  for (var i = 0; i < Math.floor(((pages+1)-assStartPage)/4); i++) {    b.page((i)*4+3+assStartPage);    // Draw the miniature version of the aspirational-image frames (rects and text only):    drawSmallImageLayoutFrames(jsonData[i].layout);    //REFERENCE page    b.stroke(0,0,0);    b.fill(0,0,0);    assAspiration(jsonData[i].aspirationcaptions);    assAdditionalReferences (jsonData[i].additionalreferences);  };};// function setup() {//   // parse JSON//   var jsonData = b.JSON.decode( jsonString );//   // run this on an empty document with only one page//   b.textFont('Arial', ['Italic'])//   b.textSize(24);//   b.text(jsonData.titles, 36,3, 576, 3);////   b.text(jsonData.address.city, 0,50, b.width, 50);//   b.text(jsonData.phoneNumber[0].number, 0,100, b.width, 50);////   // convert an object to a JSON-string//   b.println( b.JSON.encode(jsonData) );// }//FORMATTING--------------------------------------function bolding(tFrame, pNumber, wNumber){  var paraV = b.paragraphs(tFrame);  var wordsV = b.words(paraV[pNumber]);  b.typo(wordsV[wNumber], "fontStyle", "Bold");}function iBolding(tFrame, pNumber, wNumber){  var paraV = b.paragraphs(tFrame);  var wordsV = b.words(paraV[pNumber]);  b.typo(wordsV[wNumber], "fontStyle", "Bold Italic");}//CONTENT------------------------------------------function isEmpty(str) {  // Order matters for these tests!  return (!str || (0 === str.length));}// It would be nice to get an extendscript dropshadow on the Title. // Unfortunately, Basil.js does not expose this functionality, but it does seem possible. // See the following links: // http://tomkrcha.com/?p=3779// http://www.tonton-pixel.com/blog/tutorials/layer-styles-quick-tutorial/// Also see // b.inspect(metaFrame, 2);function assTitle1(_titles, _x, _y, _titlegray){  if (!isEmpty(_titles)){    b.textSize(24);    b.textFont("Atlas Grotesk","Medium");     b.textAlign(Justification.RIGHT_ALIGN, VerticalJustification.CENTER_ALIGN);    b.fill(_titlegray);     titleFrame = b.text(_titles, _x,_y,576,27.6);    titleFrame.name = "title";  }}function assTitle2(_titles, _x, _y){  if (!isEmpty(_titles)){    b.textSize(24);    b.textFont("Atlas Grotesk","Medium");     b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.CENTER_ALIGN);    b.fill(0,0,0);     titleFrame = b.text(_titles, _x,_y,576,27.6);    titleFrame.name = "title";  }}function assDescription(description){  if (!isEmpty(description)){    b.textSize(12);    b.textFont("Atlas Grotesk","Regular");     b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    b.fill(0,0,0);     desFrame = b.text(description, 36,68,550,16);    desFrame.name = "description";  }}function assBrief(_brief){  if (!isEmpty(_brief)){    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Regular");     b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    b.fill (0,0,0);     var brief = briefHeading+"\r"+_brief+"\n"+"\r";    bFrame =b.text(brief, 36,100,colWidth,250);    bolding(bFrame, 0, 0);    bFrame.name = "brief";  }}function assMeta(_level, _stemTags, _artsTags, _learning){	// Note: \r, (not \n) is used to distinguish new paragraphs by Basil.js.   b.textSize(7);  b.textLeading(9);  b.textFont("Atlas Grotesk","Regular");   b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.BOTTOM_ALIGN);  var levelHeading = "Level: ";  var stemHeading = "STEM tags: ";  var artsHeading = "Arts tags: ";  var learnHeading = "Learning Objectives - Students will: ";  var metaText = levelHeading + _level + "\r"; //+"\r"+"STEM tags: "+_stemTags+"\r"+"Arts tags: "+_artsTags+"\r"+"Learning Objectives - Students will: "+"\n"+_learning;  metaText += stemHeading + _stemTags + "\r";  metaText += artsHeading + _artsTags + "\r";  metaText += learnHeading + "\r" + _learning + "\n\r";   metaLeastDy = 100;  metaFrame = b.text(metaText, 36,100+metaLeastDy,colWidth,368-metaLeastDy);  b.typo(metaFrame, "fontStyle", "Light Italic");    iBolding(metaFrame, 0, 0); // bold levelHeading  iBolding(metaFrame, 1, 0); // bold stemHeading  iBolding(metaFrame, 1, 1);  iBolding(metaFrame, 2, 0); // bold artsHeading  iBolding(metaFrame, 2, 1);  iBolding(metaFrame, 3, 0); // bold learnHeading  iBolding(metaFrame, 3, 1);  metaFrame.name = "meta";  b.typo(metaFrame,"leftIndent", 10);  b.typo(metaFrame,"rightIndent", 10);  // For more information on these properties, see:   // http://basiljs.ch/wp-content/uploads/2013/03/basiljs_b_typo_cheatsheet_v0_2.pdf  // http://basiljs.ch/download/  var nMetaTextLines = b.lines(metaFrame).length;  var metaBoxHeight = (nMetaTextLines + 2) * b.textLeading();   // Make a solid frame of 0.5 thickness  b.rectMode( b.CORNER ); // default  b.noFill();  b.stroke(0,0,0);  b.strokeWeight(1);  b.rect(36,468,colWidth,0-metaBoxHeight);  b.fill(0,0,0);  b.stroke(0);}function assVariations(_variations, _advancedstudents){  b.textSize(8);  b.textLeading(12);  b.textFont("Atlas Grotesk","Regular");   b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);  var outputString = "";   var nVariationWords = 0;   if (!isEmpty(_variations)){    outputString += variationsHeading + "\n" + _variations;    nVariationWords = outputString.split(" ").length;  }  if (!isEmpty(_advancedstudents)){    outputString += "\n\n" + advancedHeading + "\n" + _advancedstudents + "\n";  }  if ((!isEmpty(_variations)) || (!isEmpty(_advancedstudents))){    varFrame = b.text(outputString, 36+colWidth+colSpacing,100,colWidth,368);  } else {    // We must *create* the frame, even if the string is empty, because the     // b.linkTextFrames(varFrame,makeFrame) under some circumstances.    varFrame = b.text(" ", 36+colWidth+colSpacing,100,colWidth,368);  }  if (!isEmpty(_variations)){    bolding(varFrame, 0, 0);    bolding(varFrame, 0, 1);    bolding(varFrame, 0, 2);  }  if (!isEmpty(_advancedstudents)){    bolding(varFrame, 0, nVariationWords-1);    bolding(varFrame, 0, nVariationWords+0);  }}function assMeaningful(_meaningful){  if (!isEmpty(_meaningful)){    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Regular");     b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    var making = meaningfulHeading +"\r"+_meaningful;    makeFrame = b.text(making, 36+ colWidth*2+colSpacing*2,100,colWidth,368);    bolding(makeFrame, 0, 0);    bolding(makeFrame, 0, 1);    bolding(makeFrame, 0, 2);  }}function assAspiration(_aspiration){  if (!isEmpty(_aspiration)){    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Regular");     b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    var aspiration = aspirationHeading+"\r"+_aspiration;    aspFrame =b.text(aspiration, 36,100,colWidth,368);    bolding(aspFrame, 0, 0);    bolding(aspFrame, 0, 1);  }}function assAdditionalReferences (_references){  if (!isEmpty(_references)){    b.textSize(8);    b.textLeading(12);    b.textFont("Atlas Grotesk","Regular");     b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);    var theReferencesStrings = referenceHeading +"\r"+_references+"\n"+"\r";    addRefFrame =b.text(theReferencesStrings, 36+colWidth+colSpacing,100,colWidth,368);    bolding(addRefFrame, 0, 0);    bolding(addRefFrame, 0, 1);  }}function objLength(obj){  var i=0;  for (var x in obj){    if(obj.hasOwnProperty(x)){      i++;    }  }  return i;}//IMAGE LAYOUT FUNCTIONS//==========================================================// Draw the Aspirational images, arranged according to the layout ID. function drawImageLayout (whichImageLayout, images) {  var nImageLayouts = imageLayouts.length;  if ((whichImageLayout >= 0) && (whichImageLayout < nImageLayouts)) {    var anImageLayout = imageLayouts[whichImageLayout];    var nRectsInLayout = anImageLayout.length;    nRectsInLayout = b.min(nRectsInLayout, 6);    for (var i = 0; i < nRectsInLayout; i++) {      var aRect = anImageLayout[i];      var rx = aRect[0];      var ry = aRect[1];      var rw = aRect[2];      var rh = aRect[3];      b.println(images[i]);      b.noFill();      b.noStroke();      b.image (String(images[i]), rx, ry, rw, rh);    }  }}// Draw the miniature version of the image frames, as a 'key'.function drawSmallImageLayoutFrames (whichImageLayout){  var shrink = 1.0/8.0;   var delta = Ay;  var lineWeight = 0.5;  var numeralSize = 7;  // translate (inset) to top left corner, after margins.  b.pushMatrix();  b.translate(36,Ay);   var nImageLayouts = imageLayouts.length;  if ((whichImageLayout >= 0) && (whichImageLayout < nImageLayouts)) {    var anImageLayout = imageLayouts[whichImageLayout];    var nRectsInLayout = anImageLayout.length;    for (var i = 0; i < nRectsInLayout; i++) {      var aRect = anImageLayout[i];      var rx = aRect[0];      var ry = aRect[1];      var rw = aRect[2];      var rh = aRect[3];      rx = (rx - b.width - delta)*shrink;      ry = (ry - delta)*shrink;      rw = rw * shrink;      rh = rh * shrink;      var numeralDx = 4;      var numeralDy = 5;       drawImageFrameRect (rx, ry, rw, rh, lineWeight);      drawImageFrameNumeral (rx+numeralDx, ry+numeralDy, i+1, numeralSize);    }  }  b.popMatrix(); }// Helper function for drawSmallImageLayoutFrames().function drawImageFrameRect(rx, ry, rw, rh, lineWeight){  b.noFill();  b.stroke(0, 0, 0);  b.strokeWeight (lineWeight);  b.rect(rx, ry, rw, rh);}// Helper function for drawSmallImageLayoutFrames().function drawImageFrameNumeral (nx, ny, num, numeralSize){  b.textSize(7);  b.textLeading(9);  b.textAlign(Justification.LEFT_ALIGN, VerticalJustification.TOP_ALIGN);  b.fill(0,0,0);  b.noStroke();  b.textSize (numeralSize);  b.text(num, nx,ny, 12,10);}//===================================// DO IT!b.go();