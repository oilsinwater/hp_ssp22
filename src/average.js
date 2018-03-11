/** Write a function called “average”.

Given two numbers, “average” returns their average.

var output = average(4, 6);
console.log(output); // --> 5 */

var average = (x, y) => {
  count = [ x, y ];
  return (x + y) / count.length
}