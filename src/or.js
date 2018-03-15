// Write a function called “or”.

// Given 2 boolean expressions, “or” returns true or false,
// corresponding to the ‘||’ operator.
// Notes:
// * Do not use the || operator.
// * Use ! and && operators instead.

// var output = or(true, false);
// console.log(output); // --> true;

function or(expression1, expression2) {
  if (expression1 === true && expression2 === true) {
    return true;
  } else if (expression1 === false && expression2 === false) {
    return false;
  } else if (expression1 !== true && expression2 === true) {
      return true;
  } else if (expression2 !== true && expression1 === true) {
      return true;
  } else {
      return false;
  }
}
