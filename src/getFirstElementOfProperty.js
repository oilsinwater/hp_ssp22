// Write a function called “getFirstElementOfProperty”.

// Given an object and a key, “getFirstElementOfProperty” returns the first
// element of the array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return
// undefined.
// * If there is no property at the key, it should return undefined.

// var obj = {
//   key: [1, 2, 4]
// };
// var output = getFirstElementOfProperty(obj, 'key');
// console.log(output); // --> 1

// function getFirstElementOfProperty(obj, key) {
//     if ( obj[key] === [] || obj === {} || typeof obj[key] !== 'object') {
//         return undefined;
//     } else {
//         return obj[key][0];
//     }
// }

const obj = {
    key: [ 11, 2, 3, 4, 5, 6 ]
};


const getFirstElementOfProperty = (obj, key) => 
  !Array.isArray(obj[key]) ? undefined : obj[key][0];


const output = getFirstElementOfProperty(obj, "key");
console.log(output); // --> 1