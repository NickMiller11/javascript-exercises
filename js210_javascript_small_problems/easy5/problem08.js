// input - two numbers
// output - array

// rules:
// - return an array that contains the same number of numbers as the count argument,
// - the value of each element should be a multiple of the starting element
// - count will always be greater than or equal to 0
// - if count is 0, return an empty array

// algorithm:
// - declare a variable and assign to 1
// - declare a variable and assign to an array literal
// - create a while loop - while the variable is less than or equal to count
//   - push the product of the variable and startNum to the array
//   - increment the variable by 1
// - return the array

function sequence(count, startNum) {
  var i = 1;
  var newArray = [];

  while (i <= count) {
    newArray.push(i * startNum);
    i += 1;
  }

  return newArray;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

// The `sequence` function is invoked on lines 30-33, passing in two numbers as
// arguments.  Execution continues on line 18 where the `sequence` function and two
// parameter variables are declared.  The two parameter variables are assigned to the
// two numbers passed in as arguments.  On line 19, the variable `i` is declared
// and assigned to the number 1.  On line 20, the variable `newArray` is declared
// and assigned to an array literal.  Execution continues on line 22 where a while
// loop is invoked, which will repeately execute lines 23 and 24 while `i` is less
// than or equal to the `count` variable.  On line 23, the product of `i` and `startNum`
// is passed in as an argument to the array push method, which is called on variable
// `newArray`.  On line 24, `i` is incremented by 1.  These two lines continue until
// the while loop exits and execution continues on line 27.  The `newArray` variable
// is returned.  This return value is logged to the console on lines 30-33.