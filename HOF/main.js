// ~ HOF Basic requirements ~ 
const numbers = [1, 2, 3, 4, 5];
const names = [ 'June Douglas', 'April Hwang', 'Jack Marceo', 'Lee Black', 'Jo Te', 'Bobbie Blue Bland', 'Cater Mei', 'Amparo Torrez']

// *** Rewrite Functions ***

var square = function(x) {
  return x * x;
};
square(3);
console.log(square(234));

// 1.
// function cube(x) {
//   return x * x * x;
// }

var cube = function(x) { 
  return x * x * x;
};
cube(3);
console.log(cube(1989));

// 2.
// function fullName(first, last) {
//   return first + " " + last;
// }

var fullName = function(first, last) {
  return first + " " + last;
}
fullName('First', 'Last');
console.log(fullName('First', 'Last'));

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
console.log(power(3, 129));;

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
console.log(sumCubes(numbers));

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
console.log(sumSquares(numbers));
 
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
console.log(sumCubesAgain(numbers));

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
console.log(product(numbers));



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
console.log(cubeAll(numbers));

// 6. Write a function called odds that accepts an array as a parameter and
// returns an array of just the odd numbers. If you wrote it using each, great! 
// If you used anything else, refactor it to use a for loop.

//    Using each:
var odds = function(numbers) {
  let onlyOdds = [];
  each(numbers, function(num) {
    num % 2 === 1 ? onlyOdds.push(num) : undefined;
  });
  return onlyOdds;
}
odds(numbers);
console.log(odds(numbers));

// refactored with for loop
// function odds(numbers) {
//   let onlyOdds = [];
//   for (let num = 0; num < numbers.length; num++) {
//     num % 2 === 1 ? onlyOdds.push(numbers[num]) : undefined;
//   }
//   return onlyOdds;
// }
// odds(numbers);

// *** Sumations ***
// 1. Write a function sumByAllElementsMultipliedByFour
// that takes an array as an argument and returns the sum of all elements 
// multiplied by four.

var sumByAllElementsMultipliedByFour = function(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i] * 4;
    }
    return sum;
}
sumByAllElementsMultipliedByFour(numbers);
console.log(sumByAllElementsMultipliedByFour(numbers))

// Observe that sumByAllElementsMultipliedByFour is a terrible name for a function – 
// you should also notice that sumByAllElementsMultipliedByFour looks a lot like sumCubes
// and sumSquares.

// 2. Write a function sumBy that accepts two arguments: an array of numbers and a function. 
// The function will be invoked upon each element in the array, and its result will be
//  used to compute the sum.

// function sumBy(numbers, f) {
//   // ...
// }
// var numbers = [1, 2, 3, 4];
// sumBy(numbers, square); // => 30
//   //Note: you will have to create a function "square" that returns the square of an input number.
// sumBy(numbers, cube); // => 100
//   //Note: you will have to create a function "cube" that returns the cube of an input number.
// sumBy(numbers, function(number) {
//   return number * 4;
// });
// // => 40

function sumBy(array, f) {
  let sum = 0;
  each(numbers, function(num) {
    sum += f(num);
   });
   return sum;
}
console.log(sumBy(numbers, square));
console.log(sumBy(numbers, cube));

// 3. How can you use sumBy to compute the sum of an array of numbers (just the plain sum)?

function plainSum(num){
  return num;
}
console.log(sumBy(numbers, plainSum));

// 4. Write a function productBy that works like sumBy, but for products.

function productBy(array, f) {
  let total = 1;
  each(numbers, function(num) {
    total += f(total);
  });
  return total;
}
console.log(productBy(numbers, sumSquares));
console.log(productBy(numbers, cubeAll));
console.log(productBy(numbers, plainSum));

/// *** Advanced *** 

// Finding patterns: Mapping

//1. Write a function doubleAll that takes an array of numbers as a parameter and returns an array of
// all those numbers doubled:
// function doubleAll(numbers) {
//   // ...
// }
// doubleAll([1, 3, 10, 4, 7]); // => [2, 6, 20, 8, 14]
function doubleAll(arr) {
  let doubled = [];
  each(arr, function(num, i){ // can add more parameters to the function 
    doubled.push(num * 2);
  });
  return doubled;
}
console.log(doubleAll(numbers));


//2. Write a function halveAll that takes an array of numbers as a parameter and returns an array of all
// of those numbers halved (divided by two).

function halveAll(arr) {
  let half = [];
  each (arr, function(num, i) {
    half.push(num/2);
  });
  return half;
}
console.log(halveAll(numbers));

// var halveAll = function(arr) {
//   return arr.map(function(num) {
//     return num/2
//   });
// };
// console.log(halveAll(numbers));

//3. Write a function uppercaseAll that takes an array of strings as a parameter, and returns an array 
// of all of those strings, but transformed to upper case. You can use toUpperCase to convert a string to upper case.

function uppercaseAll(arr) {
  let upperCase = [];
  each (arr, function(str) {
    upperCase.push(str.toUpperCase());
  });
  return upperCase;
}
console.log(uppercaseAll(names));
// "hello, world".toUpperCase(); // => "HELLO, WORLD"

//4. You should at this point notice a similarity between all of the above functions, as well as the cubeAll
// function from the warmup. These functions all define what we call mappings; that is, they map from one value to another.

// doubleAll maps from an array of numbers to an array of doubled numbers
// [1, 2, 3, 4] => [2, 4, 6, 8]

// halveAll maps from an array of numbers to an array of halved numbers
// [1, 2, 3, 4] => [0.5, 1, 1.5, 2]


// 5.Write a function map that takes two parameters: an array and a function that, when applied to a single element, produces 
// a new element. map should return an array of all elements in the input array transformed using the input function. Your 
// function should work like this:

// function map(array, f) {
//   // ...
// }
// map([1, 2, 3, 4], function(x) {
//   return x * 2;
// });
// // => [2, 4, 6, 8]

function map(arr, f) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    f(arr[i]);
  }
  return newArr;
}

console.log(map([1,2,3,4], function(x){return x * 2;}));