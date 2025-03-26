// snippet-4
let doggos = [
  { name: "bella", type: "canine", age: 4, breed: "yorkshire terrier" },
  { name: "manny", type: "canine", age: 2, breed: "pug" },
  { name: "yoshi", type: "canine", age: 3, breed: "german shepherd" },
  { name: "blossom", type: "canine", age: 3, breed: "german shepherd" },
];

let result1 = doggos.every(function (ele) {
  return ele.type === "canine";
});

console.log(result1);

let result2 = doggos.every(function (ele) {
  return ele.breed === "german shepherd";
});

console.log(result2);

let result3 = doggos.some(function (ele) {
  return ele.breed === "german shepherd";
});

console.log(result3);

let isOld = function (person) {
  return person.age > 5;
};

let result4 = doggos.some(isOld);

console.log(result4);
