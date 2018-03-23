
// Write a function called “removeNumberValues”.

// Given an object, “removeNumberValues” removes any properties whose values are numbers.

// var obj = {
//   a: 2,
//   b: 'remaining',
//   c: 4
// };
// removeNumberValues(obj);
// console.log(obj); // --> { b: 'remaining' }

function removeNumberValues(obj) {
 for (let prop in obj) {
     if (typeof obj[prop] ===  'number') {
         delete obj[prop];
     }
 }
 return obj;
}

