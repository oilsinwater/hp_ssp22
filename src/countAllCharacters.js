// Write a function called “countAllCharacters”.

// Given a string, “countAllCharacters” returns an object where each 
// key is a character in the given string. The value of each key should be how many
// times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

// var output = countAllCharacters('banana');
// console.log(output); // --> {b: 1, a: 3, n: 2}


function countAllCharacters(str) {
  let char = {};

  for (let key in str) {
    if (!char.hasOwnProperty(str[key])) {
      char[str[key]] = 1;
    } else {
      char[str[key]] += 1;
    }
  }
  return char;
}

const output = countAllCharacters('balamacab'); // { b: 2, a: 4, l: 1, m: 1, c: 1 }
console.log(output);

