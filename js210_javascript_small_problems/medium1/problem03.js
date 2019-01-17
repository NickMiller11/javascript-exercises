// Take the number 735291 and rotate it by one digit to the left, getting 352917.
// Next, keep the first digit fixed in place and rotate the remaining digits to
// get 329175. Keep the first two digits fixed in place and rotate again to get
// 321759. Keep the first three digits fixed in place and rotate again to get 321597.
// Finally, keep the first four digits fixed in place and rotate the final two
// digits to get 321579. The resulting number is called the maximum rotation of
// the original number.

// Write a function that takes an integer as an argument, and returns the maximum
// rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.

/*
input - number
output - number

rules:
- rotate the input number n times, where n is the number of digits in the number
- the number should be rotated starting with the leftmost digit.
  - next, the leftmost digit should be held in place, and the next n - 1 digits are rotated
  - this continues until all digits are held in place

algorithm:
- we want it to rotate like normal first, so we would pass in the number and 0
  so that it rotates all numbers as second part.
- next, we want to rotate all but the leftmost number, so we would pass in 1

*/

function maxRotation(number) {
  var numberArray = number.toString().split('');

  for (var i = numberArray.length; i > 1 ; i--) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

function rotateRightmostDigits(number, rotateDigit) {
  var numberArray = number.toString().split('');
  var segmentLength = numberArray.length - rotateDigit
  var firstPart;
  var secondPart;

  firstPart = numberArray.slice(0, segmentLength);
  secondPart = rotateArray(numberArray.slice(segmentLength));

  return Number(firstPart.concat(secondPart).join(''), 10);
}



function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    return;
  }

  if (inputArray.length === 0) {
    return [];
  }

  return inputArray.slice(1).concat(inputArray[0]);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845