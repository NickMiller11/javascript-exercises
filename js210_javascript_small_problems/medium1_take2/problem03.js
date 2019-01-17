/*
Take the number 735291 and rotate it by one digit to the left, getting 352917.
Next, keep the first digit fixed in place and rotate the remaining digits
to get 329175. Keep the first two digits fixed in place and rotate again to get
321759. Keep the first three digits fixed in place and rotate again to get 321597.
Finally, keep the first four digits fixed in place and rotate the final two
digits to get 321579. The resulting number is called the maximum rotation of the
original number.

Write a function that takes an integer as an argument, and returns the maximum
rotation of that integer. You can (and probably should) use the rotateRightmostDigits
function from the previous exercise.

input - number
output - number rotated maximum number of times

rules:
- rotate the number length - 1 times to get the max rotation
  - the first rotation rotates the first number to the end
  - the next rotation holds the first number and rotates the second number to the end
  - continue the pattern until the last two digits are the only ones rotated

data structure:
- we'll use an array again since we'll be manipulating position

algorithm:
- create a variable for the length of the input number
- iterate down from num length to 1, passing in each digit to the rotateRightmostDigits
  function, reassigning the input number to the return value of that function
- return the rotated num value
*/

function maxRotation(inputNum) {
  var len = inputNum.toString().split('').length;
  var i;

  for (i = len; i > 0; i -= 1) {
    inputNum = rotateRightmostDigits(inputNum, i);
  }

  return inputNum;
}

function rotateRightmostDigits(inputNum, rotateNum) {
  var digits = inputNum.toString().split('');
  var lenMinusRotateNum = digits.length - rotateNum;
  var first = digits.slice(0, lenMinusRotateNum);
  var middle = digits.slice(lenMinusRotateNum + 1);
  var last = digits.slice(lenMinusRotateNum, lenMinusRotateNum + 1)

  return parseInt(first.concat(middle, last).join(''), 10);
}



console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845