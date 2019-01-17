// Write a function that takes one argument, a positive integer, and returns
// the sum of its digits. Do this using list processing techniques.
//
// Examples:

// input - positive number
// output - positive number
//
// rules:
// - return the sum of the digits of the input number
// - use list processing techniques
//
// algorithm:
// - change the number into a string and split it into an array
// - use map to change each digit string back into a number
// - use reduce to add up all the numbers and return the sum

function sum(number) {
  return String(number).split('').map(function (digitString) {
    return parseInt(digitString, 10);
  }).reduce(function (sum, digit) {
    return sum + digit;
  });
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
