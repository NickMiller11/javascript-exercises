var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // logs 3
console.log(Object.keys(array).length); // logs 4

array[-2] = 'Watermelon';
console.log(array.length); // logs 3
console.log(Object.keys(array).length); // logs 5

// The length property returns an integer that is one higher than the index of the
// last array element.  Values added to the array with a key other than a positive integer
// are not considered array elements and therefore will not be included in the length
// That being said, they will be included if retreiving the keys of the array, therefore
// the length of this array increases each time a value is added, array element or not.