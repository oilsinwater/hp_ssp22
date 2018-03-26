// Write a function called “keep”.

// Given an array and a keeper element, “keep” returns an array
// containing the items that match the given keeper element.

// Notes:
// * If no elements match, “keep” should return an empty array.

// var output = keep([1, 2, 3, 2, 1], 2) 
// console.log(output); --> [2, 2]

const output = keep([1, 2, 3, 2, 1, 2], 2);

function keep(arr, keeper) {
  let filteredArr = arr.filter(function(elem) {
      return elem === keeper; // returns elements that match the keeper
  });
  return filteredArr;
}

console.log(output); // --> [2, 2, 2]
