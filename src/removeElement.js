// Write a function called “removeElement”.

// Given an array of elements, and a “discarder” parameter, 
// “removeElement” returns an array containing the items in
// the given array that do not match the “discarder” parameter.

// Notes:
// * If all the elements match, it should return an empty array.
// * If an empty array is passed in, it should return an empty array.

// var output = removeElement([1, 2, 3, 2, 1], 2);
// console.log(output); // --> [1, 3, 1]

const output = removeElement([1, 2, 3, 4, 1, 2, 1], 2);

function removeElement(arr, discarder) {
  let filteredArr = arr.filter(function(elem) {
      return elem !== discarder // returns elements that are not the discarder
  });
  return filteredArr;
}

console.log(output); // --> [ 1, 3, 4, 1, 1 ]
