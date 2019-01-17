// Write a function that rotates an array by moving the first element to the
// end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.

// Review the test cases below, then implement the solution accordingly.

/*
input - array of values
ouput - array of values

rules:
- return an array of values where the first value of the input array is at the end
  and all other values are one index lower in position.
- if the input is not an array, return undefined
- if the input is an empty array, return an empty array

algorithm:
- create a guard clause for inputs that are not arrays or are empty arrays
- transform the array using map and set equal to new variable
  - if the index is 0, store the value in a temporary variable
  - else if index === length - 1, return temp var
  - return the value at index + 1
- change index of temp variable value to length - 1
- return the new array
*/

// function rotateArray(inputArray) {
//   var rotated = [];
//   var zeroIndex;

//   if (inputArray === undefined || !Array.isArray(inputArray)) {
//     return undefined;
//   }

//   if (inputArray.length === 1) {
//     return inputArray;
//   }

//   rotated = inputArray.map(function (value, index) {
//     if (index === 0) {
//       zeroIndex = inputArray[index];
//       return inputArray[index + 1];
//     } else if (index === inputArray.length - 1) {
//       return zeroIndex;
//     } else {
//       return inputArray[index + 1];
//     }
//   });

//   return rotated;
// }

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    return;
  }

  if (inputArray.length === 0) {
    return [];
  }

  return inputArray.slice(1).concat(inputArray[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]