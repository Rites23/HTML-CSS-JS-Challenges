// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

let filterLongWords = function (arr) {
    let shortWords = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 5) {
            shortWords.push(arr[i]);
        }
    }
    return shortWords;
}

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']
