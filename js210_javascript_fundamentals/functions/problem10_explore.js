var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// This will log 'string' to the console.  The function definition is hoisted to
// the top, followed by the variable declaration and then variable assignment.
// logValue is assigned to the string variable last so 'string' is output.