// See http://stackoverflow.com/questions/520611/how-can-i-match-multiple-occurrences-with-a-regex-in-javascript-similar-to-phps


var myText = "Lorem ipsum dolor sit \namet, *consectetur* adipiscing elit, sed \
do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad \
minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
ea commodo consequat. Duis \"aute irure\" dolor in reprehenderit in voluptate \
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
occaecat cupidatat non proident, sunt in culpa qui officia deserunt \
mollit anim id est laborum.";

var myText2 = "Humans are equipped with an exquisite sensitivity to faces. \
From infancy we easily recognize faces, and can detect very subtle shifts in \
facial expressions, often being able to discern the slightest change in mood \
and sincerity in ways that remain impossible for computers. From faces we \
also are readily able to identify family resemblances, or \"strangers\" in \
crowds, and we are transfixed by the ways in which the lines on a face can \
reveal a person's life history. Kyle McDonald writes that \"faces are so \
important that the impairment of our face-processing ability is seen as a \
disorder, called *prosopagnosia*, while unconsciously seeing faces where \
there are none is an almost universal kind of *pareidolia*.\" \n\
\n\
This assignment draws inspiration from the \"Chernoff Face\" data \
visualization technique, which leverages this sensitivity by using \
facial features to represent multivariate data. In Chernoff Faces, \
features such as eyes, ears, mouth and nose represent data according \
to their shape, size, placement and orientation. Whereas Chernoff (1973) \
used 18 variables to *synthesize* a face, Paul Ekman’s \"Facial Action \
Coding System\" uses 46 dimensions to *analyze* a facial expression, each \
corresponding to the action of a different facial muscle.";

var indicesOfWordsToItalicize = [];

function setup() {
  createCanvas(600, 400);

  myText2 = computeWordsToItalicize(myText2);
  print(indicesOfWordsToItalicize);
  //[99,114,166,179]
}


//==================================================================
function computeWordsToItalicizeInParagraphs (someText) {
  // NOTE: This has the side-effect of stripping out the escape codes (*) that
  // indicate italicization (as in, " *words to italicize* ") from someText

  // Initialize the (global) array of indices of words to italicize.
  indicesOfWordsToItalicize = [];

  // Find all matches: of phrases that occur between asterisks: 
  var myRegExForStuffBetweenAsterisks = /\*([^*]*)\*/g;
  var results = someText.match(myRegExForStuffBetweenAsterisks);

  if (results === null) {
    // There are no results.
    return someText;
    
  } else {

    // Find the indices of the words that are between asterisks
    var nResults = results.length;
    for (var i = 0; i < nResults; i++) {

      // Clean up the i'th result: remove asterisks and trim.
      var cleanedResulti = results[i].substring(1, results[i].length - 1);
      if (typeof cleanedResulti === 'string'){

        cleanedResulti = cleanedResulti.trim(); // p5.js
        // cleanedResulti = b.trim(cleanedResulti); // basil.js

        // Strip out the asterisks from the string that was passed in
        someText = someText.replace(results[i], cleanedResulti);

        // Find the character at which this particular match occurs, in the original
        var charOfResulti = someText.indexOf(cleanedResulti);
        var portionOfOriginalTextBeforeResulti = someText.substring(0, charOfResulti);
        
        // Find the last newline character just prior to that point. 
        var indexOfImmediatelyPriorNewline = portionOfOriginalTextBeforeResulti.lastIndexOf("\n");
        var paragraphBeforeResulti = someText.substring(indexOfImmediatelyPriorNewline+1, charOfResulti);

        // Find the number of words up to that point. 
        var nWordsInParagraphBeforeResulti = paragraphBeforeResulti.split(" ").length - 1;
        var nWordsInCleanedResulti = cleanedResulti.split(" ").length;
        var nParagraphsBeforeResulti = portionOfOriginalTextBeforeResulti.split("\n").length - 1;

        // Accrue the indices (in the current paragraph) of the individual result words.
        println(i + "\t" + cleanedResulti + "\t" + nParagraphsBeforeResulti);
        for (var j = 0; j < nWordsInCleanedResulti; j++) {
          var tuple = [nParagraphsBeforeResulti, nWordsInParagraphBeforeResulti + j];
          indicesOfWordsToItalicize.push(tuple);
        }
      }
    }
  }
  
  return someText;
}


//==================================================================
function computeWordsToItalicize(someText) {
  // NOTE: This has the side-effect of stripping out the escape codes (*) that
  // indicate italicization (as in, " *words to italicize* ") from someText
  
  // Get rid of a troublesome pattern that causes omitted results in basil.js.
  someText.replace("\n\n", "\n \n");

  // Initialize the (global) array of indices of words to italicize.
  indicesOfWordsToItalicize = [];

  // Find all matches: of phrases that occur between asterisks: 
  var myRegExForStuffBetweenAsterisks = /\*([^*]*)\*/g;
  var results = someText.match(myRegExForStuffBetweenAsterisks);

  if (results === null) {
    // There are no results.
    return someText;
    
  } else {

    // Find the indices of the words that are between asterisks
    var nResults = results.length;
    for (var i = 0; i < nResults; i++) {

      // Clean up the i'th result: remove asterisks and trim.
      var cleanedResulti = results[i].substring(1, results[i].length - 1);
      if (typeof cleanedResulti === 'string'){

        // Select the correct line below depending on the environment:
        cleanedResulti = cleanedResulti.trim(); // p5.js
        // cleanedResulti = b.trim(cleanedResulti); // basil.js

        // Strip out the asterisks from the string that was passed in
        someText = someText.replace(results[i], cleanedResulti);

        // Find the character at which this particular match occurs. 
        var charOfResulti = someText.indexOf(cleanedResulti);

        // Find the number of words up to that point. 
        var portionOfMyTextBeforeResulti = someText.substring(0, charOfResulti);
        var nWordsBeforeResulti = portionOfMyTextBeforeResulti.split(" ").length - 1;
        var nWordsInCleanedResulti = cleanedResulti.split(" ").length;

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




//==================================================================
function draw() {
  background(255);
  fill(0);
  noStroke(0);
  text(myText2, 20, 20, 400, 400);
}