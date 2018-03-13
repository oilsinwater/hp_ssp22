
/**Write a function called “isPersonOldEnoughToDrive”.

Given a “person” object, that contains an “age” property,
“isPersonOldEnoughToDrive” returns whether the given person is old
enough to drive.

Notes:
* The legal driving age in the United States is 16. */

function isPersonOldEnoughToDrive(person) {
  return person.age >= 16 ? true : false;
}