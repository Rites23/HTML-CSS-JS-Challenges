// Write a function `wordReplace` that accepts a sentence string and an object as arguments. The
// function should return a new sentence where words that are keys of the object are replaced with
// their corresponding values.

let wordReplace = function (sentence, wordObj) {
  let words = sentence.split(" ");
  let result = words.map((word) => wordObj[word] || word);
  return result.join(" ");
};

console.log(
  wordReplace("I never take naps during the day", {
    never: "always",
    day: "weekend",
  })
);
// 'I always take naps during the weekend'

console.log(wordReplace("the park is closed", { closed: "open", the: "a" }));
// 'a park is open'

console.log(wordReplace("I do what I want", { I: "we", cat: "dog" }));
// 'we do what we want'
