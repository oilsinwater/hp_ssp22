// Write a function called “computeAverageOfNumbers”.

// Given an array of numbers, “computeAverageOfNumbers” returns their average.

// Notes:
// * If given an empty array, it should return 0.

// var input = [1,2,3,4,5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3

const nums = [1, 2, 3, 4, 5];

const computeAverageOfNumbers = nums =>
  nums.length !== 0 ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;

const output = computeAverageOfNumbers(nums);
console.log(output);
