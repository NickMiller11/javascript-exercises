// Write a function that takes an array of numbers, and returns the sum
// of the sums of each leading subsequence for that array. You may assume
// that the array always contains at least one number.
//
// Examples:

// input - array of numbers
// output - number
//
// rules:
// - return a number that is the sum of each number and the numbers preceding it
//
// algorith:
// - use #map to replace each number with the sum of the slice from 0 to index + 1
// - use reduce to sum everything up

function sumOfSums(numberArray) {
  return numberArray.map(function (number, idx) {
    return numberArray.slice(0, idx + 1).reduce(function (sum, digit) {
        return sum + digit;
    });
  }).reduce(function (sum, partialSum) {
    return sum + partialSum;
  });
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
