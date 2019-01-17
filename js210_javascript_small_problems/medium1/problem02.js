// Write a function that rotates the last n digits of a number.
// For the rotation, rotate by one digit to the left, moving the first digit to the end.

/*
input - two numbers
output - a rotated first number

rules:
- return a number where the digit at the second number index is rotate
  to the end of the number and all other numbers originally to the right of it
  are moved up one place.

algorithm:
- convert to an array
- slice the first part up to the affected digit
- concat with the result of passing in an argument to the rotateArray function
  - argument is a slice of the original array from second input number
- convert back to number
*/

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


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917