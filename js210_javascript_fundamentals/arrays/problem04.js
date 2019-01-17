function concat() {
  var i;
  var j;
  var newArr = [];

  for (i = 0; i < arguments.length; i += 1) {
    if (Array.isArray(arguments[i])) {
      for (j = 0; j < arguments[i].length; j += 1) {
        newArr[newArr.length] = arguments[i][j];
      }
    } else {
      newArr[newArr.length] = arguments[i];
    }
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], 'a', ['one', 'two']));
console.log(concat([1, 2], ['three'], 4));