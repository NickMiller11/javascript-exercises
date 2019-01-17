// In JavaScript, comparing two objects either with == or === checks for object identity.
// In other words, the comparison evaluates to true if it's the same object on either side of
// == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects
// have the same key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns true or false
// depending on whether the objects have the same key/value pairs.

// --> My Answer

function objectsEqual(obj1, obj2) {
  var i;
  var Obj1Keys = Object.keys(obj1);
  var Obj2Keys = Object.keys(obj2);
  var equal = true;

  if (Obj1Keys.length !== Obj2Keys.length) {
    return false;
  }

  for (i = 0; i < Obj1Keys.length; i += 1) {
    if (obj1[Obj1Keys[i]] !== obj2[Obj1Keys[i]] ||
        obj1[Obj2Keys[i]] !== obj2[Obj2Keys[i]]) {
      equal = false;
      break;
    }
  }

  return equal;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1})); // false

// --> LS Answer

function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  var aKeys = Object.getOwnPropertyNames(a).sort();
  var bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every(function(key, index) {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  var aKeys = Object.getOwnPropertyNames(a).sort();
  var key;
  var i;

  return aKeys.every(function(key) {
    return a[key] === b[key];
  });
}