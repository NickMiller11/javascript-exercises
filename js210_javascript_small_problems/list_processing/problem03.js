// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.
//
// You may assume that neither argument will be an empty array.
//
// Example:

// input - two arrays of numbers
// output - one array of numbers
//
// rules:
// - return an array that contains products of all combinations of number pairs
//   between the two arrays
// - return the array sorted in ascending numerical order
//
// algorithm:
// - #forEach of the first arrays
// - #forEach of the second arrays
// - push into a new array
// - sort by number order

function multiplyAllPairs(arr1, arr2) {
  var products = [];

  arr1.forEach(function (num1) {
    arr2.forEach(function(num2) {
      products.push(num1 * num2);
    });
  });

  return products.sort(function (a, b) {
    return a - b;
  });
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
