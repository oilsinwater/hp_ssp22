/** Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
 */

 function getProperty (obj, name) {
        return obj.hasOwnProperty(name) ? obj.name : undefined;
    } // returns value if exists

    