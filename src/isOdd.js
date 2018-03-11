/** Write a function called “isOdd”.
Given a number, “isOdd” returns whether the given number is odd.

var output = isOdd(9);
console.log(output); // --> true */

var isOdd = (num) => {
    return num % 2 == 1 ? true : false;
}