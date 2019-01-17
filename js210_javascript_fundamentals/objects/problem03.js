var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);

// this will log array2 with the same values as array1 is defined with.  #push
// doesn't copy the reference, just the value, so even if the values for array1
// are changed, it will not change the values on array2

// correct! This is specifically because strings are immutable objects.  If we had
// added and mutated an object literal, then it would have been reflected in array2