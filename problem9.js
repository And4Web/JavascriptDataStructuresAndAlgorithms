// function which takes in a string and returns the counts of each character in the string:
// solution 1: easiest one:

function charCount1(str) {
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

console.log(charCount1("Anand"));

// solution 2: using RegEx and for-of:

function charCount2(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9].test(char)/) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
console.log(charCount2("Anand"));
