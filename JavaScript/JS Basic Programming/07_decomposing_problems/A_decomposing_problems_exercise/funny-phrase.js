// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

function funnyPhrase(sentence) {
  return sentence
    .split(" ")
    .map((word, index) => {
      return index % 2 === 1
        ? word.replace(/[aeiou]/gi, (match) => match + match)
        : word;
    })
    .join(" ");
}

console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'
