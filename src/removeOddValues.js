// Write a function called “removeOddValues”.

// Given an object, “removeOddValues” removes any properties 
// whose values are odd numbers.

// var obj = {
//   a: 2,
//   b: 3,
//   c: 4
// };
// removeOddValues(obj);
// console.log(obj); // --> { a: 2, c: 4 }
var removeOddValues = obj => {
  for (let prop in obj) {
    if (obj[prop] % 2 === 1) {
      delete obj[prop];
    }
  }
  return obj;
};

