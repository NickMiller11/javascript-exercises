var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// This will log 10 because the operation is modifying the value at
// that specific index, not modifying the parameter itself.