function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum;
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}

// No, this will not return the intended result because of two issues.  1) The
// sum variable needs to be assigned to 0 in the beginning, and it is undefined
// 2) the sum is not explicitely returned, so that the result variable will equal
// undefined * undefined, which should result in NaN