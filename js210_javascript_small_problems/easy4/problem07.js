// input - two arrays
// output - one array

// rules:
// - return an array that contains the products of elements at a specific index
//   from both arrays

function multiplyList(arr1, arr2) {
  var i;
  var newArray = [];

  for (i = 0; i < arr1.length; i += 1) {
    newArray.push(arr1[i] * arr2[i]);
  }

  return newArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));