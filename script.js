function charCount2(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9].test(char)/) {
      obj[char] > 0 ? obj[char]++ : (obj[char] = 1);
    }
  }
  return obj;
}
console.log(charCount2("Aaa"));
