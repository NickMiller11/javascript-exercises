// input - number
// output - negative number

// rules:
// - if the number is a negative number, return as is
// - if the number is a positive number, return it as a negative number

// algorithm:
// - use abs to change the input into a positive number and multiply by -1


// function negative(num) {
//   return Math.abs(num) * -1
// }

function negative(num) {
  return num < 0 ? num : num * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// The function is invoked on lines 16 - 18, passing in a positive or negative number
// as the function argument.  Execution continues on line 12 where the function is declared.
// The parameter variable is assigned to the argument value.  On line 13, the Math.abs
// method is called, passing in the `num` parameter as an argument, the result of which
// is multiplied by -1 and returned.  Console.log on each line logs the return value
// of each method invocation to the console.