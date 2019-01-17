var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// This will log 7 because although var a is being passed into the
// myValue function as an argument, the operations are being
// performed on var b, not var a.