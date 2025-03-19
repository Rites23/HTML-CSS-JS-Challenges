// Write a function `censorSentence(sentence, targetWords)` that accepts a sentence string and an array
// of target words as arguments. The function should return a new sentence where any target words
// have all of their characters replaced with '*'s.

function censorSentence(sentence, targetWords) {
  targetWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");
    const replacement = "*".repeat(word.length);
    sentence = sentence.replace(regex, replacement);
  });

  return sentence;
}

console.log(censorSentence("where the heck is my celery", ["heck", "celery"]));
// 'where the **** is my ******'

console.log(
  censorSentence("why you little sweetheart", ["sweetheart", "salad"])
);
// 'why you little **********'
