// input - array
// output - integer

// rules:
// - return the average of all values in the input array
// - the return value should be rounded down to the nearest integer

function average(arr) {
  var sum;
  var average;

  sum = arr.reduce(function (value, total) {
    return value + total;
  });

  var average = Math.floor(sum / arr.length);
  return average;
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));