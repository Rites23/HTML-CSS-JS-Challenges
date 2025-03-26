// snippet-1
let foo = function (s) {
  return s.slice(1).toUpperCase();
};

let arr = ["mashy", "brando", "thanasi"];
let res = arr.map(foo);
console.log(res);
