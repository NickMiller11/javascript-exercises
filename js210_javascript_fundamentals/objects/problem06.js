var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;
  var count;

  for (i = -2, count = 0; i < array.length; i += 1, count += 1) {
    sum += array[i];
  }

  return sum / count;
}

console.log(average(myArray));

// This will return 10, because even though sum does add up correctly to 20,
// we will be dividing the sum by 2 since that is the array's length.