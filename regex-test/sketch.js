// See http://stackoverflow.com/questions/520611/how-can-i-match-multiple-occurrences-with-a-regex-in-javascript-similar-to-phps


var myText = "Lorem ipsum dolor sit \namet, * consectetur * adipiscing elit, sed \
do eiusmod *tempor incididunt* ut labore et dolore magna aliqua. Ut enim ad \
minim veniam, quis *nostrud exercitation* ullamco laboris nisi ut aliquip ex \
ea commodo consequat. Duis \"aute irure\" dolor in reprehenderit in voluptate \
velit esse cillum dolore eu *fugiat nulla pariatur*. Excepteur sint \
occaecat cupidatat non proident, sunt in *culpa* qui officia deserunt \
mollit anim id est laborum.";

var indicesOfWordsToItalicize = [];

function setup() {
  createCanvas(600, 400);

  myText = computeWordsToItalicize(myText);
  print(indicesOfWordsToItalicize);
}


//==================================================================
function computeWordsToItalicize(someText) {
  // NOTE: This has the side-effect of stripping out the escape codes (*) that
  // indicate italicization (as in, " *words to italicize* ") from someText

  // Initialize the (global) array of indices of words to italicize.
  indicesOfWordsToItalicize = [];

  // Find all matches: of phrases that occur between asterisks: 
  var myRegExForStuffBetweenAsterisks = /\*([^*]*)\*/g;
  var results = someText.match(myRegExForStuffBetweenAsterisks);

  // Find the indices of the words that are between asterisks
  var nResults = results.length;
  for (var i = 0; i < nResults; i++) {

    // Clean up the i'th result: remove asterisks and trim.
    var cleanedResulti = results[i].substring(1, results[i].length - 1);
    cleanedResulti = cleanedResulti.trim();

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

  return someText;
}


//==================================================================
function draw() {
  background(255);
  fill(0);
  noStroke(0);
  text(myText, 20, 20, 400, 400);
}