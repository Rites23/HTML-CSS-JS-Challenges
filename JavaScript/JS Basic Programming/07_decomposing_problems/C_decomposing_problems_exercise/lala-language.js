// Write a function `lalaLanguage` that accepts a sentence string as an argument. The function should
// return a new sentence where words longer that 3 characters are modified. Modified words should have
// each vowel followed by 'l' and the same vowel repeated again. See the examples.

function lalaLanguage(sentence) {
    return sentence.split(" ").map(word => {
        if (word.length > 3) {
            return word.replace(/[aeiou]/gi, match => match + 'l' + match);
        }
        return word;
    }).join(" ");
}

console.log(lalaLanguage("this is pretty strange")); // 'thilis is preletty stralangele'
console.log(lalaLanguage("can you speak our language")); // 'can you spelealak our lalangulualagele'
