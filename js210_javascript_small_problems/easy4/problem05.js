

function interleave(arr1, arr2) {
  var i;
  var newArray = [];

  for (i = 0; i < arr1.length; i += 1) {
    newArray.push(arr1[i], arr2[i]);
  }

  return newArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));