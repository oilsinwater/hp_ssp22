// Write a function called “getElementsGreaterThan10AtProperty”.

// Given an object and a key, “getElementsGreaterThan10AtProperty” returns an
// array containing the elements within the array, located at the given key,
// that are greater than 10.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements greater than 10, it should return
// an empty array.
// * If the property at the given key is not an array, it should return 
// an empty array.
// * If there is no property at the key, it should return an empty array.

// var obj = {
//   key: [1, 20, 30]
// };
// var output = getElementsGreaterThan10AtProperty(obj, 'key');
// console.log(output); // --> [20, 30]

let obj = {
    key: [ 1, 23, 456, 7890 ]
};

function getElementsGreaterThan10AtProperty(obj, key) {
  let elementsGreaterThan10 = []; 

  for(let element in obj[key]) {
      obj[key][element] > 10 ? elementsGreaterThan10.push(obj[key][element]) : [];
  }
  return elementsGreaterThan10;
}

const output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);