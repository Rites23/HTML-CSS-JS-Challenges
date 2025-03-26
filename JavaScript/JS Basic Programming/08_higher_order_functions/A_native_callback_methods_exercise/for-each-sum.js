// Write a function `forEachSum` that accepts an array of numbers as an argument and returns the total
// sum of all numbers.
// Your function must utilize the native Array#forEach method.

function forEachSum(arr) {
  let total = 0;
  arr.forEach(function (num) {
    total += num;
  });
  return total;
}

console.log(forEachSum([10, 3, 5])); // 18
console.log(forEachSum([-6, 7, 9, 4])); // 14
console.log(forEachSum([])); // 0
