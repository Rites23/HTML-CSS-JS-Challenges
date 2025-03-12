// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

function removeFirstVowel(str) {
  return str.replace(/[aeiouAEIOU]/, "");
}

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'
