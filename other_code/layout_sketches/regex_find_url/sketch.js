// Find all the URLs that precede a newline. 
// Simple URL detector, as they go...
var urlRegex = /http(.*?)\n/g;

var testStr = "\"Aperiodic Tiling\". In Wikipedia. https://en.wikipedia.org/wiki/Aperiodic_tiling. \n \
Bailey. David. *David Bailey's World of Escher-like Tessellations*. http://www.tess-elation.co.uk/\n \
Grünbaum, B., & Shephard, G. C. (1987). *Tilings and patterns*. Freeman.\n \
Jones, O. (1868). *The grammar of ornament*. B. Quaritch. \n \
Schattschneider, D. \"The Mathematical Side of M. C. Escher,\" in *AMS Notices* 57: 706-718, 2010. http://www.ams.org/journals/notices/201006/rtx100600706p.pdf.\n \
\"Texture Synthesis\". In Wikipedia. https://en.wikipedia.org/wiki/Texture_synthesis\n \
\"Wallpaper Collection\", Historic New England, http://www.historicnewengland.org/collections-archives-exhibitions/collections-access/highlights/wallpaper.\n \
\"Wallpaper Groups\". In Wikipedia. https://en.wikipedia.org/wiki/Wallpaper_group.\n \
\nAlso see works by: Casey Reas, Marius Watz, Lia, Jonathan McCabe, Mitchell Whitelaw, Tina Frank, \
Joshua Davis, Dave Bollinger, Holger Lippmann.";


function setup() {
  createCanvas(700, 300);
}

function draw() {
  var extractedURLs = testStr.match(urlRegex);
  if (extractedURLs !== null) {
    var nURLs = extractedURLs.length;
    for (var i = 0; i < nURLs; i++) {
      text(i + "\t" + extractedURLs[i], 10, 20 + i * 25);
    }
  }
  noLoop();
}