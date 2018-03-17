/** Write a function called “addObjectProperty”.

Given two objects and a key, “addObjectProperty”
sets a new property on the 1st object at the given key.
The value of that new property is the entire 2nd object. */


function addObjectProperty(obj1, key, obj2) {
    obj1[key] = obj2;
    return obj1;
}

