// function pop(arr) {
//   var poppedValue = arr[arr.length - 1];
//   arr.splice(arr.length - 1, 1);
//   return poppedValue;
// }

function pop(arr) {
  var poppedValue = arr[arr.length - 1];
  len = arr.length;

  if (len === 0) {
    return undefined;
  } else {
    arr.length = len - 1;
  }

  return poppedValue;
}

var array = [1, 2, 3];
console.log(pop(array));
console.log(array);
console.log(pop([]));
console.log(pop([1, 2, ['a', 'b', 'c']]));

function push(arr) {
  var i;

  for (i = 1; i < arguments.length; i += 1) {
    arr[arr.length] = arguments[i];
  }

  return arr.length;
}

var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));
console.log(array);
console.log(push([1, 2,], ['a', 'b']));
console.log(push([], 1));
console.log(push([]));



