// input - two arrays
// output - one array

// rules:
// - return an array with values from both arrays, but not duplicating any values

// algorithm:
// - declare a variable for the return array and set equal to an empty array
// - iterate through each array
//   - check to see if the current value has an index of -1
//     - if not, add it
//     - if so, continue
// - return the new array

function checkAndAdd(inputArr, returnedArray) {
  var i;

  for (i = 0; i < inputArr.length; i += 1) {
    if (returnedArray.indexOf(inputArr[i]) === -1) {
      returnedArray.push(inputArr[i])
    }
  }

  return returnedArray;
}


function union(arr1, arr2) {
  var returnedArray = [];

  returnedArray = checkAndAdd(arr1, returnedArray);
  returnedArray = checkAndAdd(arr2, returnedArray);

  return returnedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));
