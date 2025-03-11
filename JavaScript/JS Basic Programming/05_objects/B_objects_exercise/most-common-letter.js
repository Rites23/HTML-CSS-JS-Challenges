// Write a function `mostCommonLetter` that accepts a string as an argument. The function should return
// the character that appears most frequently in the string. You can assume that there are no ties.

let mostCommonLetter = function (str) {
  let letterCount = {};
  let maxCount = 0;
  let mostCommon = "";

  for (let char of str) {
    letterCount[char] = (letterCount[char] || 0) + 1;

    if (letterCount[char] > maxCount) {
      maxCount = letterCount[char];
      mostCommon = char;
    }
  }

  return mostCommon;
};

console.log(mostCommonLetter("building")); // 'i'
console.log(mostCommonLetter("shoestring")); // 's'
console.log(mostCommonLetter("preparedness")); // 'e'
