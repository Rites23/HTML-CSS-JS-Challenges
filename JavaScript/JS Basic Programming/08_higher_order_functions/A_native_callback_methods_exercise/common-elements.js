// Write a function `commonElements` that accepts two arrays as arguments. The function should
// return a new array containing the elements that are found in both input arrays.
// Your function must utilize the native Array#filter method.

let commonElements = function (arr1, arr2) {
  return arr1.filter(function (el) {
    return arr2.includes(el);
  });
};

console.log(commonElements(["a", "b", "c"], ["c", "a"])); // ['a', 'c']
console.log(commonElements(["cat", "dog", "mouse", "fish"], ["dog", "rat"])); // ['dog']
console.log(commonElements(["skip", "jump"], ["swim", "hop"])); // []
