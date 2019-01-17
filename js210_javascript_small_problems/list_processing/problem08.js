// Write a function that takes a grocery list (a two-dimensional array) with
// each element containing a fruit and a quantity, and returns a one-dimensional
// array of fruits, in which each fruit appears a number of times equal to its quantity.
//
// Example:

// input - array of subarrays
// output - array of strings
//
// rules:
// - return an array of strings where there are the same number of strings as the
//   digit they appear with in the input subarray
//
// algorithm:
// - use map to change the subarray to what I need it to be
// - use reduce to concat each subarray

function buyFruit(groceryList) {

  return groceryList.map(function (subArr) {
    return repeater(subArr);
  }).reduce(function (finalArray, subArray) {
    return finalArray.concat(subArray);
  }, [])
}

function repeater(subArray) {
  var item = [];
  var i;

  for (i = 1; i <= subArray[1]; i += 1) {
    item.push(subArray[0]);
  }

  return item;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
