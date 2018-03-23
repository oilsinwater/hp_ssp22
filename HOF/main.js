// ~ HOF Basic requirements ~ 
const numbers = [1, 2, 3, 4, 5];

// *** Rewrite Functions ***

var square = function(x) {
  return x * x;
};
square(3);

// 1.
// function cube(x) {
//   return x * x * x;
// }

var cube = function(x) { 
  return x * x * x;
};
cube(3);

// 2.
// function fullName(first, last) {
//   return first + " " + last;
// }

var fullName = function(first, last) {
  return first + " " + last;
}
fullName('First', 'Last');

// 3.
// function power(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }
//   return base * power(base, exp - 1);
// }

var power = function(base, exp){
    if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
power(3, 3);

// 4.
// function sumCubes(numbers) {
//   var total = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     total = total + cube(numbers[i]);
//   }
//   return total;
// }

var sumCubes = function(numbers) {
    var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}
sumCubes(numbers);
// *** Iterating over Arrays using each ***

//1. Write each as seen below in your main.js File.

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
    }
  }
  

//2. Finish the implementation of sumSquares using each:
// function sumSquares(numbers) {
//   var total = 0;
//   //...
//   return total;
// }
 
var sumSquares = function(numbers) {
  var total = 0;
  each(numbers, function(num) {
    total = total + num + num;
  });

  return total;
}

sumSquares(numbers);
 
// 3. Rewrite sumCubes using each:

// function sumCubes(numbers) {
//   var total = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     total = total + cube(numbers[i]);
//   }
//   return total;
// }

var sumCubesAgain = function(numbers) {
  let total = 0;
  each(numbers, function(num) {
    total = total + Math.pow(num, 3);
  }); 
  return total;
}
sumCubesAgain(numbers);

//// 4. Write a function called product that calculates the product of an array
//// of numbers using a for loop; then, refactor it to use each.

// Part I
// function product(numbers) {
//   var total = 1;
//   for (var i = 0; i < numbers.length; i++) {
//     total = total * numbers[i];
//   }
//   return total;
// }
// product(numbers);

// Part II 
const product = function(numbers) {
  let total = 1;
  each(numbers, function(num) {
    total = total * num;
  });
  return total;
}
product(numbers);



// 5. Write a function called cubeAll that cubes each number in an array,
// and returns an array of the numbers cubed using a for loop; then, refactor it to use each.

// Part I
// function cubeAll(numbers) {
//   var total = [];
//   for (var i = 0; i < numbers.length; i++) {
//     total.push(numbers[i] * numbers[i] + numbers[i]);
//   }
//   return total;
// };

// Part II
var cubeAll = function (numbers){
  var total = [];
  each(numbers, function(num) {
    total.push(num * num * num);
  });
  return total;
}
cubeAll(numbers);

// 6. Write a function called odds that accepts an array as a parameter and
// returns an array of just the odd numbers. If you wrote it using each, great! 
// If you used anything else, refactor it to use a for loop.

//    Using each:
// var odds = function(numbers) {
//   let onlyOdds = [];
//   each(numbers, function(num) {
//     num % 2 === 1 ? onlyOdds.push(num) : undefined;
//   });
//   return onlyOdds;
// }
// odds(numbers);

// refactored with for loop
function odds(numbers) {
  let onlyOdds = [];
  for (let num = 0; num < numbers.length; num++) {
    num % 2 === 1 ? onlyOdds.push(numbers[num]) : undefined;
  }
  return onlyOdds;
}
odds(numbers);

// *** Sumations ***
// 1. Write a function sumByAllElementsMultipliedByFour
// that takes an array as aPPPP∏∏ argument and returns the sum of all elements 
// multiplied by four.

// var sumByAllElementsMultipliedByFour = function(numbers) {

// }