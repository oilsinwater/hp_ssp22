// *** EXERCISES - MAP ***

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
}

// ** Basic Requirements **
// 1. We can rewrite the ages function from the warmup using map like this:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 }
];

function ages(people) {
  return map(people, function(person) {
    return person.age;
  });
}

ages(people);
console.log(ages(people));

// Rewrite the functions firstNames, lastNames and fullNames using map as shown above.

function firstNames(people) {
  return map(people, function(person) {
    return person.name.first;
  });
}

firstNames(people);
console.log(firstNames(people));

function lastNames(people) {
  return map(people, function(person) {
    return person.name.last;
  });
}

lastNames(people);
console.log(lastNames(people));

function fullNames(people) {
  return map(people, function(person) {
    return (
      person.name.first + " " + person.name.middle + " " + person.name.last
    );
  });
}

fullNames(people);
console.log(fullNames(people));

// 2. Given the function abs that computes the absolute value, finish the invocation of  map that should compute the absolute value of each number in its array argument.

function abs(x) {
  if (x >= 0) {
    return x;
  }
  return -x;
}

map([1, -2, 37, -100, -8, 5], function(x) {
  return abs(x);
}); // => [1, 2, 37, 100, 8, 5]

console.log(
  map([1, -2, 37, -100, -8, 5], function(x) {
    return abs(x);
  })
);

// HINT: To test this, it may be easiest to paste all of the above into a console

// 3. We're going to write a function maximums that, given an array of arrays of numbers as an argument, returns a new array containing the maximum number of each inner array.

// That's a bit of a mouthful, so let's break it down; our argument would look like this:
var sampleInput = [
  // it's an array of arrays of numbers
  [1, 3, 2],
  [4, 23, 100],
  [7, 6, 3, -2]
];

// Part One: Let's start by writing a function max that, when given an array of numbers computes the maximum number in that array. You will want to use each for this.

function max(numbers) {
  var result = [];
  each(numbers, function(num, i) {
    if (num > result) {
      result = num; // setting the result value...
    }
  });
  return result;
}

max([3, 14, 1979, 10002, 23.3439, 1000320032.2231]); // => 1000320032.2231
max([4, 23, 100]); // => 100

// Part Two: Now that you have a function that computes the the maximum number in an array of numbers, use map to transform each array in the sampleInput into its maximum by completing the maximums function:

function maximums(arrays) {
  return map(arrays, function(num, i) {
    return max(num);
  });
}

maximums(sampleInput); // => [3, 100, 7]

// More Practice
// 1. Complete the function exponentials that accepts an array of numbers as a parameter, and raises each number n to the nth power, e.g:

function exponentials(numbers) {
  return map(numbers, function(num, i) {
    return Math.pow(num, num);
  });
}

exponentials([1, 2, 3, 4]); // => [1, 2*2, 3*3*3, 4*4*4*4] => [1, 4, 27, 256]
exponentials([3, 2, 5]); // => [27, 4, 3125]

// 2. First, write a function reverse that accepts a string as a parameter and returns a reversed version of that string (you'll want to use a for loop for this). Then, use reverse to write a function called reverseWords that accepts a string as an argument, and returns a string with all of its words reversed. You'll want to use split and join in both of these functions.

function reverseWords(string) {
  //create an array for the result of the reversed string
  let result = [];
  // create an array that holds the value of splitting the input string
  let arr = string.split("");
  // start iterating at less than the input length, continue as long as its larger than 0, and increment by subtracting z from the sum of subracting itself (for reverse)
  for (let z = arr.length - 1; z >= 0; z--) {
    result.push(arr[z]); // pushes the resulting value of arr to the result
  }
  return result.join(""); // join the resulting string and return
}

"hello".split(""); // => ["h", "e", "l", "l", "o"]
["h", "e", "l", "l", "o"].join(""); // => "hello"

"hello world".split(" "); // => ["hello", "world"]
// ["hello", "world"].join(" "); // => "hello world"

reverseWords(
  "The necessity of integrated practice for a community fof learning is key for organizational governance"
); // => "ecnanrevog lanoitazinagro rof yek si gninrael fof ytinummoc a rof ecitcarp detargetni fo ytissecen ehT"

// Note that reverseWords should reverse each word individually, not the entire string.

// 3. We often want to transform an array of objects by looking up the value found under a specific key in each object; for instance, consider the problem of finding the ages of all the people in the people array like we did in the first exercise. Write a function called pluck that takes an array of objects and a string representing a key as parameters, and returns an array of all the values found under each object using the key, e.g.:

function pluck(arr, str) {
  return map(arr, function(elem) {
    return elem[str];
  });
}

pluck(people, "age"); // => [26, 34, 40, 45, 21]

// Your implementation should use map.

// 4. Let's say that we have a string representing a CSV (comma-separated values) file that looks like this:

// "Alyssa,P.,Hacker,26\nBen,,Bitdiddle,34\nEva,Lu,Ator,40\nLem,E.,Tweakit,45\nLouis,,Reasoner,21"
// And we want to parse it into an array people objects like we showed in the warmup, e.g.:
// var people = [
//   {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
//   {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
//   {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
//   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
//   {name: {first: "Louis", last: "Reasoner"}, age: 21}
// ];
// Using map and split, write a function parseCSV that accepts a CSV string as a parameter and outputs an array of people objects with the exact format as shown above.

const csvPeople =
  "Alyssa,P.,Hacker,26\nBen,,Bitdiddle,34\nEva,Lu,Ator,40\nLem,E.,Tweakit,45\nLouis,,Reasoner,21";

function parseCSV(str) {
  let strSplit = str.split("\n"); // create a new array split by new line
  return map(strSplit, function(elem) {
    let obj = {};
    let res = elem.split(",");
    obj.name = {};
    obj.name.first = res[0];
    if (res[1] != "") {
      obj.name.middle = res[1];
    }
    obj.name.last = res[2];
    obj.age = res[3];
    return obj;
  });
}

parseCSV(csvPeople);

// ** Advanced **

// 1. Disclaimer: This problem is very difficult! Write a function called map2 that accepts two arrays and a function as arguments, and constructs a new array by invoking its function argument on the elements of both arrays, e.g.:

const array1 = [1, 2, 3, 4];
const array2 = [2, 4, 6, 8];
const array3 = [2, 1, 1, 2];

function product(a, b) {
  return a * b;
}

product(4, 2);
console.log(product(4, 2));

function productPlus(a, b, c) {
  return a * b + c;
}
productPlus(4, 2, 1);
console.log(productPlus(4, 2, 1));

function each2(coll1, coll2, f) {
  if (Array.isArray(coll1) && Array.isArray(coll2)) {
    for (var i = 0; i < coll1.length; i++) {
      f(coll1[i], coll2[i], i);
    }
  } else {
    for (var key in coll1) {
      f(coll1[key], key);
    }
  }
}

// one solution
// function map2(arr1, arr2, f) {
//     let res = [];
//     if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
//         res = {};
//     }
//     each2 (arr1, arr2, function(elem1, elem2, key) {
//         res.push(f(elem1, elem2, key));
//     });
//     return res;
// }

var map2 = (arr1, arr2, callback) => {
  return arr1.map(function(elem, i) {
    return callback(elem, arr2[i]);
  });
};

map2([1, 2, 3], [4, 5, 6], product); // => [4, 10, 18]

// Now, write a function called mapN that accepts an arbitrary number of arrays and a n-ary function as arguments, and constructs a new array by combining the elements of all the arrays, e.g.:

var mapN = function(...arr) {
  return arr.map(function(elem, i) {
    return callback(elem, arr[i]);
  });
};

//mapN([1, 2, 3], [4, 5, 6], [2, 2, 2], productPlus);
// // => [6, 12, 20]

// mapN([1, 2, 3], function(x) { return x * x; }) // => [1, 4, 9]
// You'll need to read about the arguments keyword and apply to complete this function.

// *** EXERCISES - MAP OBJECT ****

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

// ** Basic Requirements **

// The incrementValues function from yesterday can be written much more elegantly using map. Rewrite that function using our new and improved version of map.

// For convenience, the prompt is reproduced below:

// 1. Write a function called incrementValues that accepts an object as a parameter, and outputs an object with all of its numeric values incremented by one. You'll want to use the updated version of map for this, and you will need to check the type of each value to determine whether or not it should be incremented.

var kid = {
  name: "Jacobi",
  age: 123,
  favoriteColor: "purple"
};

function incrementValues(obj) {
  return map(obj, function(elem) {
    return typeof elem === "number" ? elem + 1 : elem;
  });
}

incrementValues(kid);
console.log(incrementValues(kid));

// 2. Write a function called uppercaseValues that, given an object as a parameter, returns a new object with all of its string values converted to uppercase. You'll want to make use of .toUpperCase() for this:

var greetings = {
  a: "hello",
  b: "aloha",
  c: "A pleasure to meet you"
};

function uppercaseValues(obj) {
  return map(obj, function(str, key) {
    return typeof str === "string" ? str.toUpperCase() : str;
  });
}

uppercaseValues(greetings);
console.log(uppercaseValues(greetings));

// Also, ensure that you only attempt to convert strings to uppercase -- you may want to use typeof for this.

// 3. Write a function called countNestedKeys that, given an object where all values are also objects, returns an object that contains the count of keys in each nested object, e.g.

function countNestedKeys(object) {
  return map(object, function(elem) {
    return typeof elem === "object" ? Object.keys(elem).length : elem;
  });
}

countNestedKeys({ a: { b: 1, c: 7 }, f: { h: 22, g: 12, i: 24 } });
// // => {a: 2, f: 3}
