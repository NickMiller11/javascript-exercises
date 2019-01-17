// input - an array and a value of unknown type
// output - new array

// rules:
// - the elements should be in the same order as they appear in the arguments
// - the function should copy any object references from arguments into the
//   new array
// - the function should copy the values of primitives

// algorithm:
// - create a variable for new array, set equal to array1 parameter
// - create an index variable
// - if secondArgument isArray
//   - iterate through array and push value to new array
// - else
//   - push value to new array
// - return new array

// function concat(array1, secondArgument) {
//   var newArr = array1;
//   var i;

//   if (Array.isArray(secondArgument)) {
//     for (i = 0; i < secondArgument.length; i += 1) {
//       newArr.push(secondArgument[i]);
//     }
//   } else {
//     newArr.push(secondArgument);
//   }

//   return newArr;
// }

// after checking the code solution, it appears #push is not the answer here
// what I really want to do is add these values to the new array by assigning
// the newArr[newArr.length] to the value.  The overall code structure was
// correct though, in terms of checking if the second argument is an array or
// not.  Make sure to add notes after this to clarify adding a value or reference

function concat(array1, secondArgument) {
  var newArr = array1;
  var i;

  if (Array.isArray(secondArgument)) {
    for (i = 0; i < secondArgument.length; i += 1) {
      newArr[newArr.length] = secondArgument[i];
    }
  } else {
    newArr[newArr.length] = secondArgument;
  }

  return newArr;
}


console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([1, 2], 3));
console.log(concat([2, 3], ['two', 'three']));
console.log(concat([2, 3], 'four'));

var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
console.log(newArray);
console.log(newArray[1]);
obj.a = 'two';
console.log(newArray);
console.log(newArray[1]);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3);
console.log(arr3[1]);
obj.b = 'three';
console.log(arr3);
console.log(arr3[1]);

arr3[5].b = 3;
console.log(obj);

