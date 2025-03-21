// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr
