// Write a function `letterMap` that accepts a string and an object as arguments. The function should
// return a version of the string where characters that appear as keys in object are replaced with
// their corresponding values.

let letterMap = function (str, letterObj) {
  let newStr = "";

  for (let char of str) {
    if (letterObj[char]) {
      newStr += letterObj[char];
    } else {
      newStr += char;
    }
  }

  return newStr;
};

console.log(letterMap("symbolic", { y: "i", o: "a", c: "k" })); // 'simbalik'
console.log(letterMap("colossal", { o: "x", s: "p" })); // 'cxlxppal'
console.log(letterMap("miniscule", { u: "t", i: "f", e: "q" })); // 'mfnfsctlq'
