// input - number
// output - array

// rules:
// - return an array the contains all numbers between 1 and the argument (inclusive)
// - array values must be in ascending order

// algorithm:
// - declare a variable and assign to array literal
// - declare a variable for index
// - create a for loop, set i to 1 and while i is less than or equal to num
//   - push i to new array
// - return new array

function sequence(num) {
 var newArray = [];
 var i = 1;

 while (i <= num) {
   newArray.push(i);
   i += 1;
 }

 return newArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

// The `sequence` function is invoked on lines 27 - 29, passing in a number as the
// argument.  Execution continues on line 15 where the `sequence` function is
// declared and the parameter variable `num` is assigned to the function argument.
// On line 16, the variable `newArray` is declared and assigned to an array literal.
// On line 17, the variable `i` is declared and assigned to the number 1.  A while
// loop is invoked on line 19, which will continue while the variable `i` is less
// than or equal to the `num` variable.  Lines 20 and 21 are executed during each loop.
// On line 20, the array method push is invoked, passing in the variable `i` as an
// argument.  This method adds i as the last value of `newArray`.  Variable `i` is
// then reassigned to its current value plus 1.  Once the while loop has completed,
// execution continues on line 24 where the newArray is explicitely returned. Console.log,
// on line 27-29, logs the return value of the `sequence` function to the console.