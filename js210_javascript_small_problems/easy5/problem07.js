// input - string
// output - string

// rules:
// - return a string that is the last word of the input string, followed by a
//   comma and a space, then the first word of the input string.

// algorithm:
// - declare a new variable and assign to the input string split by a space
// - declare a new variable, and set to a string value that is the value at index
//   1, followed by the comma and space, then the value at index 0
// - return the new string


// function swapName(fullName) {
//   var nameArray = fullName.split(' ');
//   return nameArray[1] + ', ' + nameArray[0];
// }

function swapName(fullName) {
  var nameArray = fullName.split(' ');
  var lastName = nameArray.slice(-1);
  var firstNames = nameArray.slice(0, -1).join(' ');

  return lastName + ', ' + firstNames;
}

console.log(swapName('Joe Michael Roberts'));    // "Roberts, Joe"

// Execution starts on line 28 where the `swapName` function is invoked, passing in
// a string as the function argument.  Execution continues on line 20 where the
// function is declared and the parameter variable `fullName` is declared and assigned
// to the argument value.  On line 21, the variable `nameArray` is declared and assigned
// to the return value of the split method being called on `fullName`, passing in a
// space as the argument to separate the value that fullName is assigned to by spaces.
// The variable `lastName` is declared on line 22 and assigned to the return value
// of calling the slice method on nameArray, with -1 as an argument to the method.
// This method returns an array containing the last value of the variable `nameArray`.
// The firstNames variable is declared on line 23 and assigned to the return value
// of calling slice on nameArray with 0 and -1 as arguments to represent the
// starting and ending indexes respectively.  The join method is then called on the
// return value of this method, with a whitespace character being passed in as an
// argument to the join method to convert all values in nameArray except the last value
// into a string separated by a whitespace. On line 25, a string consisting of the
// variable `lastName` concatinated to a comma and space, concatinated to the
// variable `firstNames` is returned by the function.  This return value is then logged
// to the console on line 28.
