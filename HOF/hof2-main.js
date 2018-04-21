// **** HOF 2 **** //

var numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

// ***  Exercises - Each Indices ***
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

// ** Basic Requirements **

// 1. Using our new version of each, write a function called indexedExponentials that, when given an array of numbers as an argument, returns a new array of numbers where each number has been raised to the power of its index

function indexedExponentials(array) {
  // create a new array
  let raisedElements = [];
  // iterate over each element in the array, and pass the element and its index to a function

  each(array, function(num, i) {
    // raise each  by the power of its index
    // push the element to an new array
    raisedElements.push(Math.pow(num, i));
  });
  // return the new array
  return raisedElements;
}

indexedExponentials(numbers);
console.log(indexedExponentials(numbers)); // => [ 1, 1, 4, 27, 256, 3125, 46656, 823543, 16777216 ]

// 2. Write a function called evenIndexedOddNumbers that, when given an array of numbers as an argument, returns an array of only the odd numbers with even indices.

function evenIndexedOddNumbers(arr) {
  // creaes a new array of just odds
  var odd = [];
  // iterate with each
  each(arr, function(elem, i) {
    if (i % 2 === 0 && elem % 2 !== 0) {
      odd.push(elem);
    }
  });
  // return the new array
  return odd;
}

evenIndexedOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]); // => [ 1, 3, 67 ]
console.log(evenIndexedOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// 3. Write a function called evenIndexedEvenLengths (yeah, a bit of a mouthful) that accepts an array of
// strings as a parameter, and returns only the strings that are found at an even index that also have
// an even length, e.g.:

var animals = [
  "lion",
  "monkey",
  "aardvaark",
  "cat",
  "dog",
  "elephant",
  "giraffe",
  "unicorn",
  "bear",
  "mule",
  "hawk"
];
var colors = [
  "red",
  "green",
  "purple",
  "blue",
  "yellow",
  "pink",
  "orange",
  "gray",
  "black",
  "white",
  "indigo"
];

function evenIndexedEvenLengths(strings) {
  // create a new array to add elements that meet conditions
  let evens = [];
  each(strings, function(str, i) {
    if (i % 2 === 0 && str.length % 2 === 0) {
      evens.push(str);
    }
  });
  return evens;
}

evenIndexedEvenLengths(animals);
console.log(evenIndexedEvenLengths(animals)); // => [ 'lion', 'bear', 'hawk' ]

evenIndexedEvenLengths(colors);
console.log(evenIndexedEvenLengths(colors)); // => [ 'purple', 'yellow', 'orange', 'indigo' ]

// ** EXERCISES - EACH OBJECTS **

function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

// * Basic Requirements *
//1.  Using our updated version of each, write the following functions:
// A. Values: accepts an object as a parameter, and outputs an array of the object's values.

const person = {
  name: "Joanna Diaz Lumbard",
  age: 20,
  weightLbs: 118,
  heightFt: 5.6,
  gender: "female",
  registeredVoter: { active: true },
  location: "Yonkers, New York",
  jobTitle: "Systems Manager",
  nationality: "Latinx American",
  phoneNumber: ["919-124-2098", "182-192-2831", "510-283-3928"]
};

function values(obj) {
  // return Object.values(obj);
  var output = [];
  each(obj, function(elem, key) {
    output.push(obj[key]);
  });
  return output;
}

values(person);
console.log(values(person));

// B. keys: accepts an object as a parameter, and outputs an array of the object's keys.

function keys(obj) {
  //return Object.keys(obj);
  var output = [];
  each(obj, function(elem, key) {
    output.push(key);
  });
  return output;
}

keys(person);
console.log(keys(person));

// 2. Write a function called keysLongerThan that accepts two parameters -- an object and a number
// -- and returns a new object with only the key/value pairs in the input object whose keys are
// longer than the numeric argument, e.g.:

//  keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3);
// // => {name: "Annyeong", favoriteColor: "blue"}
// keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 4);
// // => {favoriteColor: "blue"}
// Make sure to use the new version of each for this.

function keysLongerThan(obj, num) {
  // create a new object to add keys to
  var output = {};
  // iterate over the original object
  each(obj, function(elem, key) {
    // if the length of the key is longer than the number then
    // add that key: value to the new array
    if (key.length > num) {
      output[key] = elem;
    }
  });
  // return the new array
  return output;
}

//   var output = {};
//   each(object, function(el, key) {
//     if (key.length > number) {
//       output[key] = el;
//     }
//   });
//   return output
// }

keysLongerThan(person, 10);
console.log(keysLongerThan(person, 10));

// 3. Write a function called incrementValues that accepts an object as a parameter, and outputs
// an object with all of its numeric values incremented by one. You'll want to use the updated
// version of each for this, and you will need to check the type of each value to determine whether
// or not it should be incremented.

function incrementValues(obj) {
  //outputs an object with all of its numerical values incremented by 1.
  //check the typeof each value to see that it is a string and a number

  let output = [];
  each(obj, function(elem, key) {
    typeof obj[key] === "number" ? (output[key] = obj[key] + 1) : " ";
  });
  return output;
}

incrementValues(person);
console.log(incrementValues(person));

// *** EXERCISES - FILTER ***

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

function filter(array, predicate) {
  var acc = [];
  each(array, function(element) {
    if (predicate(element)) {
      acc.push(element);
    }
  });
  return acc;
}

// ** Basic Requirements  **
// Use filter to write the following functions:

// 1. Write a function called evens that takes an array of numbers as a parameter, and returns an array of only the even numbers in the parameter.

function evens(arr) {
  return filter(arr, function(elem) {
    // remember to RETURN the filter function
    return elem % 2 === 0;
  });
}

evens(numbers);
console.log(evens(numbers));

// 2. Write a function called multiplesOfThree that takes an array of numbers as a parameter, and returns an array of only the numbers that are multiples of three.

function multiplesOfThree(arr) {
  return filter(arr, function(elem) {
    return elem % 3 === 0;
  });
}
multiplesOfThree(numbers);
console.log(multiplesOfThree(numbers));

// 3. Write a function called positives that takes an array of numbers as a parameter, and returns an array of only the numbers that are positive.

function positives(arr) {
  return filter(arr, function(elem) {
    return elem > 0;
  });
}
positives(numbers);
console.log(positives(numbers));

// Write a function called evenLength that takes an array of strings and returns an array of only the strings with an even length.

const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumped",
  "over",
  "the",
  "lazy",
  "dog"
];

function evenLength(arr) {
  return filter(arr, function(elem) {
    return elem.length % 2 === 0;
  });
}
evenLength(words);
console.log(evenLength(words));

// ** More Practice **
// Use filter to write the following functions:

// 1. odds: Accepts an array of numbers, and returns the odd ones.
function odds(arr) {
  return filter(arr, function(elem) {
    // remember to RETURN the filter function
    return elem % 2 !== 0;
  });
}
odds(numbers);
console.log(odds(numbers));

// 2. negatives: Like positives, but with negatives!
function negatives(arr) {
  return filter(arr, function(elem) {
    return elem < 0;
  });
}
negatives(numbers);
console.log(negatives(numbers));

// 3. largerThanSix: given an array of numbers, returns those larger than 6.
function largerThanSix(arr) {
  return filter(arr, function(elem) {
    return elem > 6;
  });
}
largerThanSix(numbers);
console.log(largerThanSix(numbers));

// 4. Using filter, write a function startsWithChar that accepts two parameters: an array of strings, and a character (e.g. "a"), and returns an array of only the strings that start with that character:

function startsWithChar(arr, char) {
  return filter(arr, function(elem) {
    return elem[0] === char;
  });
}
startsWithChar(words, "t");
console.log(startsWithChar(words, "t"));

// Extend the filter function to pass the index of each element to the predicate; then, complete the following:

// 5. Write a function called evenIndexedEvenLengths (yeah, a bit of a mouthful) that accepts an array of strings as a parameter, and returns only the strings that are found at an even index that also have an even length, e.g.:

function evenIndexedEvenLengths(strings) {
  return filter(strings, function(string, i) {
    return i % 2 === 0 && string.length % 2 === 0;
  });
}
evenIndexedEvenLengths(colors);
// => ["lion", "doge"]
console.log(evenIndexedEvenLengths(colors));
// => ["purple", "yellow"]

// HINT: You'll need to ensure that your version of filter also passes each elements' index (or key in the case of objects) to the predicate.

// Write a version of filter that works on arrays and objects; then, use your updated version of filter to filter an object with values of mixed types to an object with only numeric values. You should be able to use your modified version of filter as follows:

//   1│
//   2│
//   3│
//   4│filter({a: 1, b: "dog", c: true}, function(value) {
//   return typeof value === "number";
// });
// // => {a: 1}
