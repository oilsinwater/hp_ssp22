const object1 = {};

/** you  */
Object.defineProperty(object1, 'property1', {
    value : 42,
    writable : false,
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42

/** If a descriptor has neither of value, writable, get and set
 * keys, it is treated as a data descriptor. If a descriptor
 * has both value or writable and get or set keys, an exception
 * is thrown.
 * Bear in mind that these attributes are not necessarily the
 * descriptors' own properties. Inherited properties will be 
 * considered as well. In order to ensure these defaults are 
 * preserved, you might freeze the Object.prototype upfront,
 * specify all options explicitly, or point to null with 
 * Object.create(null). */

// using __proto__
var obj = {}
var descriptor = Object.create(null); // no inherited properties
// note enumerable, not configurable, not writable as defaults
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);

// being explicit
Object.defineProperty(obj, 'key', {
    enumerable : false,
    configurable : false,
    writable : false,
    value : 'static'
});

// recycling same object
function withValue(value) {
    var d = withValue.d || (
        withValue.d = {
            enumerable : false,
            writable : false,
            configurable : false,
            value : null,
        }
    );
    d.value = value;
    return d;
}
/// ... and ...
Object.defineProperty(obj, 'key', withValue('static'));

/** If freeze is available, prevents adding or removing 
 * the object properties (value, get, set, enumerable, writable
 * configurable)
 */

(Object.freeze || Object)(Object.prototype);

// Creating Property 

var o = {}; // creates an object

/** example of an object property added with a defineProperty
 * with a data property descriptor
 */
Object.defineProperty(o, 'a', {
    value : 37,
    writable : true,
    enumerable : true,
    configurable : true,
});
// 'a' property exists in the 'o' object and its value is 37

/** example of an object property added 
 * with defineProperty with an accessor property descriptor
 */
var bValue = 38;
Object.defineProperty(o, 'b', {
    /** Using shorthand method names (ES2015 feature).
     * This is equivalent to: 
     * get: function() { return bValue; },
     * set: function(newValue) {bValue = newValue; },
     */
    get() { return bValue; },
    set(newValue) { bValue = newValue; },
    enumerable : true,
    configurable : true
});

o.b; // 38
console.log(o.b);

/** 'b' property exists in the 'o' object and its value is 38
 * The value of o.b is now always identical to bValue
 * unless o.b is undefined
  */

  // You cannot try to mix both:
 // Object.defineProperty (o, 'conflict', {
 //     value : 0x9f91102,
 //     get() { return 0xdeadbeef; }
 // });
  
 /** Throws a TypeError: value appears
   * only in data descriptors, 
   * get() appears only in accessor descriptors
   */

// Modifying a property

var o = {}; // Creates a new object

Object.defineProperty(o, 'a', {
    value : 37,
    writable : false
});

console.log(o.a); // logs 37
o.a = 25; /** No error thrown--it would be in strict mode
even if the value had been the same */
console.log(o.a); // logs 37. The assignment didn't work.

// strict mode
(function() {
    'use strict';
    var o = {};
    Object.defineProperty(o, 'b', {
        value : 2,
        writable : false        
    });
    //o.b = 3; // throws TypeError: "b" is read-only
    return o.b; // returns 2 without the line above
}());

// Enumerable attribute 
/** The enumerable property attribute defines whether the
 * property shows up in a for...in loop and Object.keys()or not. 
 * */

 var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3
}); // enumerable defaults to false
o.d = 4; // enumerable defaults to true
         // when creating a property by setting it

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false

// Configurable attribute
/** The configurable attribute controls at the same time
 * whether the property can be deleted from the object and
 * whether its attributes (other than value and writable)
 * can be changed. */

 /**
 var o = {};
Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
});

Object.defineProperty(o, 'a', {
  configurable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  enumerable: true
}); // throws a TypeError
Object.defineProperty(o, 'a', {
  set() {}
}); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, 'a', {
  get() { return 1; }
}); // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, 'a', {
  value: 12
}); // throws a TypeError

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
*/

// Adding properties

/** It is important to consider the way default values
 * of attributes are applied. There is often a difference
 * between simply using dot notation to assign a value and
 * using Object.defineProperty(), as shown in the example below. */

 var o = {};

 o.a = 1;
 // is equivalent to:
 Object.defineProperty(o, "a", {
   value: 1,
   writable: true,
   configurable: true,
   enumerable: true
 });

 // On the other hand,
 Object.defineProperty(o, "a", { value: 1 });
 // is equivalent to:
 Object.defineProperty(o, "a", {
   value: 1,
   writable: false,
   configurable: false,
   enumerable: false
 });

 // Custom Setters and Getters
 /** The example below shows how to implement a self-archiving object.
  * When temperature property is set, the archive array gets a log entry.
  */

  function Archiver() {
      var temperature = null;
      var archive = [];

      Object.defineProperty(this, 'temperature', {
          get() {
              console.log('get!');
              return temperature;
          },
          set(value) {
              temperature = value;
              archive.push({ val: temperature });
          }
      });

      this.getArchive = function() {
          return archive; 
      };
  }

  var arc = new Archiver ();
  arc.temperature; // 'get!'
  arc.temperature = 11;
  arc.temperature = 13;
  arc.getArchive(); // [{ val : 11 }, { val : 13 }]

  // in the example below, a getter always returns the same value

var pattern = {
    get() {
        return 'I always return this string, ' + 
        'whatever you have assigned';
    },
    set() {
        this.myname = 'this is my name string';
    }
};

function TestDefineSetAndGet() {
    Object.defineProperty(this, 'myproperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';
console.log(instance.myproperty);
// I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string

// Inheritance of properties

/** If an accessor property is inherited, its get and set
 * methods will be called when the property is accessed and
 * modified on descendant objects. If these methods use a
 * variable to store the value, this value will be shared by
 * all objects. */

 function myclass() {
 }

 var value;
 Object.defineProperty(myclass.prototype, 'x', {
     get() {
         return value;
     },
     set(x) {
         value = x;
     }
 });

 var a = new myclass();
 var b = new myclass();
 a.x = 1;
 console.log(b.x); // 1

 /** This can be fixed by storing the value in another property.
  * In get and set methods, this points to the object which is used to
  * access or modify the property.
 */


 function myclass() {
}

Object.defineProperty(myclass.prototype, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  }
});

var a = new myclass();
var b = new myclass();
a.x = 1;
console.log(b.x); // undefined

/** Unlike accessor properties, value properties are always set on the object
 * itself, not on a prototype. However, if a non-writable value property is inherited,
 * it still prevents from modifying the property on the object.
 */

/**
function myclass() {
}

myclass.prototype.x = 1;
Object.defineProperty(myclass.prototype, "y", {
  writable: false,
  value: 1
});

var a = new myclass();
a.x = 2;
console.log(a.x); // 2
console.log(myclass.prototype.x); // 1
a.y = 2; // Ignored, throws TypeError in strict mode
console.log(a.y); // 1
console.log(myclass.prototype.y); // 1
*/

