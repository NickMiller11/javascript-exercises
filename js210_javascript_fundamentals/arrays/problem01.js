var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// [1, 2, 3] is logged to the console on line 5, because the #pop method mutates
// the array.  myArray and myOtherArray are both pointing to the same object, so
// the mutated object will be returned

// [1, 2, 3] is logged to the console on line 8, because while myArray is reassigned
// to another array object, myOtherArray is still pointing to the original array.