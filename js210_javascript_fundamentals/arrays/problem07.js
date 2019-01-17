function shift(arr) {
  var shiftedEl = arr[0];
  arr.splice(0, 1);
  return shiftedEl;
}

function unshift(arr) {
  var i;

  for (i = 1; i < arguments.length; i += 1) {
    arr.splice(0, 0, arguments[i]);
  }

  return arr.length;

}

console.log(shift([1, 2, 3]));
console.log(shift([]));
console.log(shift([[1, 2, 3], 4, 5]));

console.log(unshift([1, 2, 3], 5, 6));
console.log(unshift([1, 2, 3]));
console.log(unshift([4, 5], [1, 2, 3]));

var testArray = [1, 2, 3];
console.log(shift(testArray));
console.log(testArray);
console.log(unshift(testArray, 5));
console.log(testArray);