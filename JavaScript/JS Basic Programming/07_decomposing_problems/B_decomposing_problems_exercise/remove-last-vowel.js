// Write a function `removeLastVowel` that accepts a string as argument. The function should return
// the string with its last vowel removed. Vowels are the letters a, e, i, o, u

function removeLastVowel(str) {
  const vowels = "aeiouAEIOU";
  let lastVowelIndex = -1;

  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
      lastVowelIndex = i;
      break;
    }
  }

  return lastVowelIndex !== -1
    ? str.slice(0, lastVowelIndex) + str.slice(lastVowelIndex + 1)
    : str;
}


console.log(removeLastVowel("speaker")); // 'speakr'
console.log(removeLastVowel("trading")); // 'tradng'
console.log(removeLastVowel("thunder")); // 'thundr'
console.log(removeLastVowel("myth")); // 'myth'
