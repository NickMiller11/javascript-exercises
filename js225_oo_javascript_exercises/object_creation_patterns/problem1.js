/*
Implement an ancestors method that returns the prototype chain (ancestors) of a
calling object as an array of object names. Here's an example output:

input: object
output: array

rules:
- return the prototype chain of the calling object as an array
- include up to and including Object.prototype
- do not include current object

algorithm:
create a new array
create variable for current object and set to this
create a variable for ancestor and set to Object.getPrototypeOf(this)

while ancestor does not equal null
  if the ancestor is an object literal
    push 'Object.prototype' into the array
  else
    push the name property value into the array

  set current object to equal ancestor
  set ancestor to equal Object.getPrototypeOf(current object);

return array

*/


// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';



foo.ancestors = function() {
  var returnArray = [];
  var currentObj = this;
  var ancestorObj = Object.getPrototypeOf(currentObj);

  while (ancestorObj) {
    if (ancestorObj === Object.prototype) {
      returnArray.push('Object.prototype');
    } else {
      returnArray.push(ancestorObj.name);
    }

    currentObj = ancestorObj;
    ancestorObj = Object.getPrototypeOf(currentObj);
  }

  return returnArray;
};


console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
