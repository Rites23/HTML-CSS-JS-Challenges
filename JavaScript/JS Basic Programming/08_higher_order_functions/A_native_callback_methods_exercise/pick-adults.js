// Write a function `pickAdults` that accepts an array of person objects and returns the objects that
// have an age of at least 18.
// Your function must utilize the native Array#filter method.

function pickAdults(people) {
    return people.filter(function (person) {
        return person.age >= 18;
    });
    }

let people = [
  { name: "alice", age: 22 },
  { name: "bob", age: 37 },
  { name: "pam", age: 16 },
  { name: "jim", age: 18 },
];
console.log(pickAdults(people));
// [ { name: 'alice', age: 22 }, { name: 'bob', age: 37 }, { name: 'jim', age: 18 } ]

let people2 = [
  { name: "betty", age: 23 },
  { name: "ben", age: 15 },
  { name: "yansi", age: 21 },
];
console.log(pickAdults(people2));
// [ { name: 'betty', age: 23 }, { name: 'yansi', age: 21 } ]
