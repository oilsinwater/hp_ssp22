// Write a function called “getAverageOfElementsAtProperty”.

// Given an object and a key, “getAverageOfElementsAtProperty” returns the
// average of all the elements in the array located at the given key.

// Notes:
// * If the array at the given key is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

const obj = {
    key: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
};

function getAverageOfElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key]) || obj[key].length === 0) {
    return 0;
  } else {
    return obj[key].reduce((a, b) => a + b, 0) / obj[key].length;
  }
}
const output = getAverageOfElementsAtProperty(obj, "key");
console.log(output);
