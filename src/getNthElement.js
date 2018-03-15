/**
 * Write a function called “getNthElement”.

Given an array and an integer, “getNthElement” returns the
element at the given integer, within the given array.

Notes:
* If the array has a length of 0, it should return ‘undefined’.


 */

 var getNthElement = (arr, n) => {
   return arr.length === 0 ? undefined : arr[n];
 };
 
