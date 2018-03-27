// getElementsLessThan100AtProperty*
// Write a function called “getElementsLessThan100AtProperty”.

// Given an object and a key, “getElementsLessThan100AtProperty” returns an array
// containing all the elements of the array located at the given key that are less than 100.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements less than 100, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// var obj = {
//   key: [1000, 20, 50, 500]
// };
// var output = getElementsLessThan100AtProperty(obj, 'key');
// console.log(output); // --> [20, 50]

// function getElementsLessThan100AtProperty(obj, key) {
//   // your code here
//   /* START SOLUTION */
//   /* END SOLUTION */
// }

const obj = {
    key: [ 1000, 20, 50, 500 ]
};


function getElementsLessThan100AtProperty(obj, key) {
    let lessThan100Property = [];
    for (let prop in obj[key]) {
        if (obj[key][prop] < 100) {
            lessThan100Property.push(obj[key][prop]);
        }
    }
    return lessThan100Property;
}

const output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);

// const getElementsLessThan100AtProperty = (obj, key) => {
//     let lessThan100Property = [];
//     for (let prop in obj[key]) {
//       obj[key][prop] < 100 ? lessThan100Property.push(obj[prop][key]) : undefined;
//     }
//     return lessThan100Property
// }
 