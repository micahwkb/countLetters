// best method, takes console input

var string = process.argv.slice(2);

if (!string[0]) console.log("Please provide some text!");
else console.log(countLetters(string));

function countLetters(string) {
  var countStats = new Object();
  string.join("").split("").forEach(function(char) {
    if (countStats[char]) countStats[char]++;
    else countStats[char] = 1;
  });
  return countStats;
}

// console.log(countLetters(string));

// improved version of below, a bit cleaner, fewer variables etc
/*

function countLetters(string) {
  var countStats = new Object();
  string.replace(/\s/, ""); // remove spaces
  for (var i = 0; i < string.length; i++) {
    var letter = string.charAt(i);
    if (countStats[letter]) countStats[letter] += 1;
    else countStats[letter] = 1;
  }
  return countStats;
}

console.log(countLetters("testy test"));
console.log(countLetters("lighthouse's in the house lighthouse in the house"));

*/


// first attempt, works well but doesn't accept console input
/*

function countLetters(string) {
  var countStats = new Object();
  var concatStr = string.split(" ").join(""); // remove spaces
  // return concatStr;
  // return typeof concatStr;
  for (var i = 0; i < concatStr.length; i++) {
    var letter = concatStr.charAt(i);
    if (countStats[letter]) countStats[letter] += 1;
    else countStats[letter] = 1;
  }
  return countStats;
}

console.log(countLetters("testy test"));
console.log(countLetters("lighthouse in the house lighthouse in the house"));
*/