// ~ HOF Basic requirements ~ 
const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const names = [ 'June Douglas', 'April Hwang', 'Jack Marceo', 'Lee Black', 'Jo Te', 'Bobbie Blue Bland', 'Cater Mei', 'Amparo Torrez']
const words = [ 'the', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog' ]

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

function lowercaseAll(arr) {
  let lowerCase = [];
  each (arr, function(str) {
    lowerCase.push(str.toLowerCase());
  });
  return lowerCase;
}
console.log(lowercaseAll(names));
// "HelLo", "WorLD".toLowerCase(); // => "hello, world"


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

//6. Complete the invocations of map below to produce the desired output (you'll need to replace ??? with a function):
map(["hello", "world"], function(x) {
  return x.toUpperCase();
}); // => ["HELLO", "WORLD"]

map(["HelLo", "WorLD"], function(x) {
  return x.toLowerCase();
}); // => ["hello", "world"]

map(["the", "quick", "brown", "fox", "jumped"], function(x) {
  return x.length}); // => [3, 5, 5, 3, 6]

var people = [
  { name: "Alyssa P. Hacker", age: 26 },
  { name: "Ben Bitdiddle", age: 34 },
  { name: "Eva Lu Ator", age: 19 },
  { name: "Lem E. Tweakit", age: 40 }
];

map(people, function (x) {
  return x.name;
}); // => ["Alyssa P. Hacker", "Ben Bitdiddle", "Eva Lu Ator", "Lem E. Tweakit"]

map(people, function(x) {
  return x.name + ' is ' + x.age;
});
// => ["Alyssa P. Hacker is 26", "Ben Bitdiddle is 34", "Eva Lu Ator is 19", "Lem E. Tweakit is 40"]


// ** Finding Patterns: Filtering **

// 1. Write a function called evens that takes an array of numbers as a parameter,
// and returns an array of only the even numbers in the parameter.

function evens(arr) {
    let result = [];
    each(arr, function(num) {
      num % 2 === 0 ? result.push(num) : undefined;
    });
    return result;
  }

console.log(evens(numbers));

// 2. Write a function called multiplesOfThree that takes an array of numbers as a
// parameter, and returns an array of only the numbers that are multiples of three.

function multiplesOfThree(arr) {
  let result = [];
  each(arr, function(num) {
      num % 3 === 0 ? result.push(num) : undefined;
  });
  return result;
}

console.log(multiplesOfThree(numbers));


// 3. Write a function called positives that takes an array of numbers 
// as a parameter, and returns an array of only the numbers that are positive.

function positives(arr) {
  let result = [];
  each(arr, function(num) {
    Math.sign(num) ? result.push(num) : undefined;
  })
  return result;
}
console.log(positives(numbers));

// 4. Write a function called evenLength that takes an array 
// of strings and returns an array of only the strings with an even length.

function evenLength(arr) {
  let result = [];
  each(arr, function(word) {
    if(word.length % 2 === 0) {
      result.push(word);
    }
  });
  return result;
}

console.log(evenLength(words));

// 5. At this point, you should notice a pattern; write a function called filter 
// that takes two parameters: an array and a function that, when invoked with an 
// argument, will return true or false. filter should return a new array of only 
// the elements for which the function returns true:

// function filter(array, f) {
//   // ...
// }
// filter([1, 2, 3, 4], function(x) {
//   return x % 2 === 0; // x is even?
// }); // => [2, 4]

function filter(arr, f) {
   let result = [];
   each(arr, function(num) {
    if(f(num)) {
      result.push(num);
    };
  });
  return result;
}


filter([1, 2, 3, 4], function(x) {
  return x % 2 === 0; // x is even?
}); // => [2, 4]

// 6. Use filter to write/rewrite:
// * odds
// * positives
// * negatives
// * evenLength
// * largerThanSix (given an array of numbers, returns those larger than 6)

// * odd
function odd(arr) {
  return filter(arr, function(x) {
    return x % 2 !== 0;
  });
}
console.log(odd(numbers));

// * positive
function positive(arr) {
  return filter(arr, function(x) {
    return Math.sign(x);
  })
}
console.log(positive(numbers));

// * negatives
function negatives(arr) {
  return filter(arr, function(x) {
    return x <= 0;
  });
}
console.log(negatives(numbers));

// * evenLengths
function evenLengths(arr) {
  return filter(arr, function(x) {
    return x.length % 2 === 0;
  });
}
console.log(evenLengths(words));

// * largerThanSix
function largerThanSix(arr) {
  return filter(arr, function(x) {
    return x > 6;
  });
}
console.log(largerThanSix(numbers));

// 7. Using filter, write a function startsWithChar that accepts two parameters:
// an array of strings, and a character (e.g. "a"), and returns an array of only
// the strings that start with that character:
// function startsWithChar(strings, character) {
//   // ...
// }
// var words = "the quick brown fox jumps over the lazy dog".split(" ");
// startsWithChar(words, "q"); // => ["quick"]
// startsWithChar(words, "t"); // => ["the", "the"]

function startsWithChar(arr, character) {
  return filter(arr, function(x) {
    return x[0] === character;
  });
}
var phrase = "the quick brown fox jumps over the lazy dog".split(" ");
startsWithChar(phrase, "q"); // => ["quick"]
console.log(startsWithChar(phrase, 'q'));
startsWithChar(phrase, "t"); // => ["the", "the"]
console.log(startsWithChar(phrase, "t"));