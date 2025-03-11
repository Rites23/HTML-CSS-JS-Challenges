


let elementQuantities = function (obj) {
  let result = [];  

  
  Object.entries(obj).forEach(([key, value]) => {
   
    result = result.concat(Array(value).fill(key));
  });

  
  return result;
};

let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1));  // Expected Output: ["cat", "cat", "cat", "bird", "dog", "dog"]

let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); // ['blue', 'blue', 'blue', 'brown']