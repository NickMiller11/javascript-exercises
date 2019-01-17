// input - array
// output - array containing two sub arrays

// rules:
// - the two subarrays in the return array should each contain half of the input
//   array's values
// - if the input array contains an odd number or elements, put the middle element
//   in the first array

// algorithm:
// - declare variables for the two subarrays
// - declare a middle variable equal to input array length divided by 2, put
//   in math ceil
// - splice the input array
//   - assign first subarray to 0 through middle
//   - assign second subarray to middle
// - add the sub arrays to an array and return it

function halvsies(arr) {
  var subArray1;
  var subArray2;
  var middleIndex = Math.ceil(arr.length / 2);

  subArray1 = arr.slice(0, middleIndex);
  subArray2 = arr.slice(middleIndex);

  return [subArray1, subArray2];

}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));