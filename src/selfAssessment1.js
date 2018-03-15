// Self Assessment 1
// Programming Prompts:
// 1) Write a function lesserNum which takes in two integer arguments, 
// and returns the lesser of the two. If they’re equal, return either.

// function lesserNum(num1, num2) {
//   // YOUR CODE HERE
// }
// You should be able to call it like so:

// lesserNum(19, 4); //4
// lesserNum(3, 26); //3
// lesserNum(-10, -10); //-10
// 2) Write a function countBy which takes in two number arguments:
// factor and count, and populates an array with numbers starting from
// 0, and counting by factor. The parameter count represents how many 
// times the factor will count by. Assume that the 2nd argument will always be >= 0.

// function countBy (factor, count) {
//   // YOUR CODE HERE
// }
// Your function’s results would look like:

// countBy(4, 3); //[0, 4, 8, 12]
// countBy(5, 2); //[0, 5, 10]
// countBy(7, 7); //[0, 7, 14, 21, 28, 35, 42, 49]
// countBy(10, 0); //[0]

// 3) Write a function titleCase which takes in a string, and returns a title-cased string.

// function titleCase(str) {
//   // YOUR CODE HERE
// }
// Your function’s results would look like:

// titleCase('peter piper'); //"Peter Piper"
// titleCase('teXt mEssAge'); //"Text Message"
// titleCase('more to me than meets the eye'); //"More To Me Than Meets The Eye"
// Hint: Explore the string method toUpperCase on MDN.

// 4) Given an object with this structure:

// var person = {
//   name: {
//     first: "Richard",
//     last: "Loeb"
//   },
//   birthDay: {
//     month: "July",
//     day: 12,
//     year: 1957
//   }
// }
// Write a function getNameAndBirthday which returns the name and birthday in one line:

// getNameAndBirthday(person); //"Richard Loeb: July 12, 1957"
// Hint: Pay attention to the extra characters in the sample output.

// 5) Someone who recorded these people’s names and birthdays wasn’t meticulous with their data entry, and input information with inconsistent capitalizations.

// var anotherPerson = {
//   name: {
//     first: "kylA",
//     last: "liVingSton"
//   },
//   birthDay: {
//     month: "octobeR",
//     day: 20,
//     year: 1961
//   }
// }
// Write a function ‘renderInfoNeatly’ which takes in a person object similar to the previous example, and returns the person’s name and birthday with proper casing.

// renderInfoNeatly(anotherPerson); //"Kyla Livingston: October 20, 1961"
// 6) Write a function getPeopleBornIn which takes in a string month and an array, and returns a new array of people and their birthday information who were all born in the given month.

// A sample input array would look like:

// var staff = [
//   {name: {first: "Alyssa", last: "Hacker"}, birthday: {month: "June", day: 5, year: 1987}},
//   {name: {first: "Ben", last: "Bitdiddle"}, birthday: {month: "August", day: 19, year: 1984}},
//   {name: {first: "Eva", last: "Ator"}, birthday: {month: "March", day: 29, year: 1980}},
//   {name: {first: "Lem", last: "Tweakit"}, birthday: {month: "August", day: 11, year: 1989}},
//   {name: {first: "Louis", last: "Reasoner"}, birthday: {month: "November", day: 17, year: 1992}}
// ];
// A call to your function getPeopleBornIn(staff, 'August');

// Would return:

// ["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"]

// 1) Write a function lesserNum which takes in two integer arguments, 
// and returns the lesser of the two. If they’re equal, return either.

// function lesserNum(num1, num2) {
//   // YOUR CODE HERE
// }
// You should be able to call it like so:

// lesserNum(19, 4); //4
// lesserNum(3, 26); //3
// lesserNum(-10, -10); //-10

function lesserNum(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else if (num2 > num1) {
        return num1;
    } else { if (num1 === num2) {
        return num1 || num2;
    }}
}



// 2) Write a function countBy which takes in two number arguments:
// factor and count, and populates an array with numbers starting from
// 0, and counting by factor. The parameter count represents how many 
// times the factor will count by. Assume that the 2nd argument will always be >= 0.

// function countBy (factor, count) {
//   // YOUR CODE HERE
// }
// Your function’s results would look like:

// countBy(4, 3); //[0, 4, 8, 12]
// countBy(5, 2); //[0, 5, 10]
// countBy(7, 7); //[0, 7, 14, 21, 28, 35, 42, 49]
// countBy(10, 0); //[0]

function countBy (factor, count) {
  for (count >= 0; factor++) {
      return 
  }
 

}