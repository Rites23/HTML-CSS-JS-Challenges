// Write a function `twoSum(numbers, target)` that accepts an array of numbers and a target number
// as an argument. The function should return a boolean indicating whether or not there exists a pair
// of distinct elements in the array that sum to the target.

function twoSum(numbers, target) {
  let seen = new Set();
  for (let num of numbers) {
    let complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

console.log(twoSum([2, 3, 5, 9], 7)); // true
console.log(twoSum([2, 3, 5, 9], 4)); // false
console.log(twoSum([6, 3, 4], 10)); // true
console.log(twoSum([6, 5, 1], 10)); // false
