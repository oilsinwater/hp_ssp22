// Write a function called “removeNumbersLargerThan”.

// Given a number and an object, “removeNumbersLargerThan” removes any 
// properties whose values are numbers greater than the given number.

// var obj = {
//   a: 8,
//   b: 2,
//   c: 'montana'
// }
// removeNumbersLargerThan(5, obj);
// console.log(obj); // --> { b: 2, c: 'montana' }


// function removeNumbersLargerThan(num, obj) {

// }

// need to remember that when querying values in an object that 
// I'm iterating over the object

var removeNumbersLargerThan = (num, obj) => {
    for (let prop in obj) {
        if (obj[prop] > num) {
            delete obj[prop];
        }
    }
}

