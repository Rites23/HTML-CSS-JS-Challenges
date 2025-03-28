// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

function shortenLongWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length > 4) {
        return word.replace(/[aeiouAEIOU]/g, "");
      }
      return word;
    })
    .join(" ");
}

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'
