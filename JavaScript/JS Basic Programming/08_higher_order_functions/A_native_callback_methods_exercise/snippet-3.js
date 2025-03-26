// snippet-3
let isEven = function (n) {
  return n % 2 === 0;
};

let isOdd = function (n) {
  return !isEven(n);
};

let nums1 = [42, 3, 8, 9];
console.log(nums1.filter(isEven));
console.log(nums1.map(isOdd));
