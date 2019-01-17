// input - array
// output - string

// rules:
// - multiply all of the integers in the input array together and divide by number
//   of elements
// - return the output as a string
// - the output should be rounded to three decimal places

// algorithm:
// - declare a variable for average and calculate average for elements
// - round the average to 3 decimal places
// - return the rounded average as a string


function showMultiplicativeAverage(arr) {
  var product = arr.reduce(function (total, amount) {
    return total * amount;
  });

  var average = Math.round((product / arr.length) * 1000) / 1000;

  return String(average);

}

console.log(showMultiplicativeAverage([3, 5]));
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));