/*
Write a function that rotates the last n digits of a number.
For the rotation, rotate by one digit to the left, moving the first digit to the end.

input - two numbers
output - a modified version of the first number input

rules:
- rotate the first input number
- rotation should start at the -n index (if first num was array) until the end
- return a new number (since numbers are immutable)

examples:
- if the second input is 2, our numbers will be 7, 3, 5, 2 + last two are rotated
- if the second input is 4, our number will be:
  - the first two are the same
  - followed by the last three digits
  - and the digit at position 3 is at the end
- if we were putting this in terms of slicing, we would want
slice(0, length - input 2) + slice(length - input 2 + 1 until end) + slice(length - input 2, length - input 2 + 1)


questions:
- what should happen if a 0 is the second number?
- what should happen if a number less than 0 or more than the number of digits
  in the first input is the second number?
- what should we return if either the first number or second number is not a number
  data type?
- how should we handle missing input?

Since we don't know how to handle some of the other cases, I'm not going to write
any additional test cases

data structure:
- since we'll be manipulating this number based on digit positions, we'll use an
  array for our data structure

algorithm:
- convert the number to a string and split it
- concat and return the following:
  - slice(0, len - in2)
  - slice(len - in2 + 1)
  - slice(len - in2, len - in2 + 1)
*/

function rotateRightmostDigits(inputNum, rotateNum) {
  var digits = inputNum.toString().split('');
  var lenMinusRotateNum = digits.length - rotateNum;
  var first = digits.slice(0, lenMinusRotateNum);
  var middle = digits.slice(lenMinusRotateNum + 1);
  var last = digits.slice(lenMinusRotateNum, lenMinusRotateNum + 1)

  return parseInt(first.concat(middle, last).join(''), 10);
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917