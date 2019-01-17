/*
Write a function that computes the difference between the square of the sum
of the first n positive integers and the sum of the squares of the first n
positive integers.

input - number
output - number

rules:
- return the difference between two numbers (both factorials!)
  - the square of the sum of the first n positive numbers
  - the sum of the squares of the first n positive numbers

helper method to calculate factorial
reduce method
square - Math.pow(num, 2)

algorithm:
- pass input number into our factorial helper method, return an array
- calculate the square of the sum of the first n positive numbers
  - find sum by reducing array
  - calculate square of sum
- calculate the sum of the squares of the first n positive numbers
  - reduce the array
    - square each value, add to previous total
- find the difference

- factorial helper method
  - create a variable i for counter
  - create a new array
  - while i is less than the number passed into the function
    - push i to new array
    - increment i
  - return array

*/

function sumSquareDifference(num) {
  var numArray = factorials(num);
  var squareOfSums;
  var sumOfSquares;

  squareOfSums = numArray.reduce(function (total, digit) {
    return total + digit;
  });

  squareOfSums = Math.pow(squareOfSums, 2);

  sumOfSquares = numArray.reduce(function (total, digit) {
    return total + Math.pow(digit, 2);
  });

  return squareOfSums - sumOfSquares;
}

function factorials(num) {
  var factorialArray = [];
  var i;

  for (i = 1; i <= num; i += 1) {
    factorialArray.push(i);
  }

  return factorialArray;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150