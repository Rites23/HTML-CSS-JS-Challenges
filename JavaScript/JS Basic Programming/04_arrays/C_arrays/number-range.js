// Write a function `numberRange(min, max, step)` that accepts three numbers as arguments, `min`,
// `max`, and `step`. The function should return all numbers between `min` and `max` at `step` intervals.
// `min` and `max` are inclusive.

let numberRange = function (min, max, step) {
    let numbers = [];
    
    for (let i = min; i <= max; i += step) {
        numbers.push(i);
    }
    
    return numbers;
}

console.log(numberRange(10, 40, 5)); // [10, 15, 20, 25, 30, 35, 40]
console.log(numberRange(14, 24, 3)); // [14, 17, 20, 23]
console.log(numberRange(8, 35, 6)); // [8, 14, 20, 26, 32]
