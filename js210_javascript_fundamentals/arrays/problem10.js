function areArraysEqual(array1, array2) {
  var i;

  if (array1.length !== array2.length) {
    return false;
  }

  array1.sort();
  array2.sort();

  for (i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));
console.log(areArraysEqual([1, 1, 2, 2], [4, 3, 2, 1]));
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));
console.log(areArraysEqual([1, 1, 1], [1, 1]));
console.log(areArraysEqual([1, 1], [1, 1]));