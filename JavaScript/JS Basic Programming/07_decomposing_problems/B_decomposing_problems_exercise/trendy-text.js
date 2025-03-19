// Write a function `trendyText` that accepts a sentence string as an argument. The function should
// return the sentence where the last vowel of every word is removed.

function trendyText(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      let lastVowelIndex = -1;
      for (let i = word.length - 1; i >= 0; i--) {
        if ("aeiouAEIOU".includes(word[i])) {
          lastVowelIndex = i;
          break;
        }
      }
      return lastVowelIndex !== -1
        ? word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1)
        : word;
    })
    .join(" ");
}

console.log(trendyText("the concert will be epic")); // 'th concrt wll be epc'
console.log(trendyText("breakfast food is wonderful")); // 'breakfst fod s wonderfl'
console.log(trendyText("the weather will improve hopefully")); // 'th weathr wll improv hopeflly'
