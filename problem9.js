// function which takes in a string and returns the counts of each character in the string:

function charCount(str) {
  var charObj = {};

  for (let i = 0; i < str.length; i++) {
    var char = str[i]; //We can use toLowerCase() method to count only lowercase letters.

    if (charObj[char] > 0) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  return charObj;
}

console.log(charCount("Anand"));
