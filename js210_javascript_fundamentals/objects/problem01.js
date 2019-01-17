var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// this will produce an error on line 8 since you can't reference an object key
// with something other than a string.

// after running the code, the error actually comes on line 9, since it thinks
// a is a variable, and no local variable a is defined.