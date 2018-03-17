
// Write a function called “extend”.

// Given two objects, “extend” adds properties from the 2nd object to the 1st object.

// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key, 
// ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.

// var obj1 = {
//   a: 1,
//   b: 2
// };
// var obj2 = {
//   b: 4,
//   c: 3
// };

// extend(obj1, obj2);

// console.log(obj1); // --> {a: 1, b: 2, c: 3}
// console.log(obj2); // --> {b: 4, c: 3}

// add any keys that are not in obj1
// if obj1 has a given key that is in obj2 ignore it and don't overwrite
// the property value (don't modify obj2)



// var extend = (obj1, obj2) => {
//     obj1 === {a : 1, b : 2, c : 3};
//     obj2 === {b : 4, c : 5, d : 3};

//     let keys = Object.keys(obj2);
    
//     for (var i = 0; i < keys.length; i++) {
//         if(!(keys[i] in obj1)) {
//              obj1[keys[i]] = obj2[keys[i]];
//         }
//     }
// }

// function extend (obj1, obj2) {
//     for (var key in obj2) {
//         if (!obj1.hasOwnProperty(key)) {
//             obj1[key] = obj2[key];
//         }
//     }
// }

var extend = (obj1, obj2) => {
    for (let key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            obj1[key] = obj2[key];
        }
    }
}