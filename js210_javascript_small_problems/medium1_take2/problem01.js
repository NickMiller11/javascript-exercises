/*
Write a function that rotates an array by moving the first element to the
end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

input - array
output - array

rules:
- move the first element of the input array to the last index position of the array
- do not modify the input array
- return an empty array if the input array is empty
- return undefined if the argument is not an array or not provided

data structure:
- we'll use an array since we need to build a new array

algorithm:
- create a guard clause to return undefined for any invalid input
  - if the input returns false for #isArray
  - (possible) clause to return an empty array for an array input
- declare a variable for the new array
- assign the new array to a concatination of:
  - the value at input array index length - 1
  - the value of input array index 0 through index length - 2 using slice
- return the new array
*/

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) {
    return undefined;
  } else if (inputArray.length === 0) {
    return inputArray;
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
console.log(rotateArray('a'));                       // undefined
console.log(rotateArray({'a': 1}));                  // undefined
console.log(rotateArray(NaN));                       // undefined
console.log(rotateArray(undefined));                 // undefined

// the input array is not mutated
var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]