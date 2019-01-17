var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// The strict equality operator returns true only if the variables point to
// the same object, not just objects with the same properties.

// You can refactor the code like below:

var person = { name: 'Victor' };
var otherPerson = person

console.log(person === otherPerson);