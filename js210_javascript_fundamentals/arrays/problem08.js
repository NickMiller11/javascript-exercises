// input - array, two integers
// output - new array

// rules:
// - return a new array starting from the begin index up to, but not including, end index
// - do not mutate the original array
// - if begin or end is greater than the length of the array, set it to the length
//   of the array

// algorithm:
// - iterate through the input array starting from the begin index
// - while the index variable is less than the end index
//   - push values to the new array
// return the new array

function slice(array, begin, end) {
  var i;
  var newArr = [];

  if (begin > array.length) {
    begin = array.length;
  } else if (end > array.length) {
    end = array.length;
  }

  for (i = begin; i < end; i += 1) {
    newArr.push(array[i]);
  }

  return newArr;
}

// console.log(slice([1, 2, 3], 1, 2));
// console.log(slice([1, 2, 3], 2, 0));
// console.log(slice([1, 2, 3], 5, 1));
// console.log(slice([1, 2, 3], 0, 5));

// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));
// console.log(arr);

// input - 1 array, 2 integers, and 0 or more values
// output - new array

// rules:
// - remove deleteCount number of elements from the array, beginning at the start index
// - if optional elements are provided, insert them into the array beginning at
//   the start index
// - return a new array containing the deleted elements
// - return an empty array if no elements are deleted
// - mutate the original array
// - if the value of start is greater than the array length, set it to equal the array length
// - if the value of deleteCount is larger than the number of elements between the
//   start index and end of array, set it equal to the difference between start index
//   and end of array
// - if no elements are provided, splice only deletes elements from the array

// THOUGHTS - whew, the splice one kinda kicked my butt.  I'm going to move on for
// now, but this might be a good one to revisit before a test

function splice(array, start, deleteCount, element1, elementN) {
  var deletedItems = [];
  var i;
  var j;

  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  for (i = start, j = 3; i < start + deleteCount; i += 1, j += 1) {
    deletedItems.push(array[i]);

    if (arguments[j]) {
      array[i] = arguments[j];
    } else {
      array[i] = array[i + 1];
    }
  }


  array.length = array.length - deleteCount + (arguments.length - 3);
  return deletedItems;
}

console.log(splice([1, 2, 3], 1, 2));
console.log(splice([1, 2, 3], 1, 3));
console.log(splice([1, 2, 3], 1, 0));
console.log(splice([1, 2, 3], 0, 1));
console.log(splice([1, 2, 3], 1, 0, 'a'));

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));
console.log(arr);

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));
console.log(arr);

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));
console.log(splice(arr, 1, 0, 'a'));
console.log(arr);

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));
console.log(arr);
