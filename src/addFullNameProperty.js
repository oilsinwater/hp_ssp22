/** Write a function called “addFullNameProperty”.

Given an object that has a “firstName” property
and a “lastName” property, “addFullNameProperty”
adds a “fullName” property whose value is a string
with the first name and last name separated by a space.

 */

 /**
function addFullNameProperty(person, firstName, lastName) {
  person = {
    firstName : "",
    lastName : "",
    fullName : function () {
      return this.firstName + " " + this.lastName;
    }
  };
  return person.fullName();
} */



var addFullNameProperty = (person, firstName, lastName) => {
  person.fullName = person.firstName + " " + person.lastName;
  return person.fullName;
};