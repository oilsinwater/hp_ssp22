// Write a function called “isEitherEvenAndLessThan9”.

// Given two numbers, ‘isEitherEvenAndLessThan9’ returns
// whether at least one of them is even, and, both of them
// are less than 9.

// var output = isEitherEvenAndLessThan9(2, 4);
// console.log(output); // --> true

// var output = isEitherEvenAndLessThan9(72, 2);
// console.log(output); // --> false

// function isEitherEvenAndLessThan9(num1, num2) {
//   if (num1 % 2 === 0 || num2 % 2 === 0) {
//     return true;
//   } else if (num1 <= 9 && num2 <= 9) {
//     return true;
//   } else if (num1 % 2 === 0 && num2 % 2 === 0) {
//     return false;
//   } else if (num1 > 9 || num2 > 9) {
//     return false;
//   } else if (num1 % 2 || num2 % 2) {
//     return false;
//   } else {
//     return false;
//   }
// }

// Given two numbers, ‘isEitherEvenOrAreBoth7’ returns
// whether at least one of them is even, or, both of them are 7.

// function isEitherEvenOrAreBoth7(num1, num2) {
//   return num1 % 2 === 0 || num2 % 2 === 0 || (num1 === 7 && num2 === 7);
// }


// function isEitherEvenAndLessThan9 (num1, num2) {
//     if ((num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9)) {
//         return true;
//     }
//     return false;
// }


var isEitherEvenAndLessThan9 = (num1, num2) => {
    return (num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9);
}