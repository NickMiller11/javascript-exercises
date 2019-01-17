// input - integer
// output - integer

// rules:
// - return a number where the order of the digits is reversed

// algorithm:
// - convert the input number to a string
// - split the string into an array
// - reverse the array
// - join the array into a string
// - convert the string to a number and return it

function reverseNumber(num) {
  var numString = String(num);
  var numArray = numString.split('');
  numArray = numArray.reverse();
  numString = numArray.join('');
  return parseInt(numString, 10);
}


console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1

// The program starts with the function `reverseNumber` being invoked on lines 23-27.
// An integer is pass in as the function's argument.  Exeuction of the program
// continues on line 14 with the function declaration, with the number argument
// being assigned to the parameter variable `num`. A variable called `numString` is
// declared on line 15 and set to the value of num after it has been converted into
// a string. A variable called `numArray` is declared on line 16 and set to the value
// of the variable `numString` after it has been split into an array with the split method.
// On line 17, numArray is set to itself after the reverse method has been called on it.
// Execution continues on line 18 where the variable `numString` is set to the value
// of numArray after it has been joined into a string.  `numString` is then converted
// into a number using the parseInt method with a radix of 10 on line 19 and returned.