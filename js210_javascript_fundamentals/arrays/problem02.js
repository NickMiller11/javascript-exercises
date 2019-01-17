// var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray;

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);

// Alternative 1

var myArray = [1, 2, 3, 4];
var myOtherArray = slice(0);

// Alternative 2

var myArray = [1, 2, 3, 4];
var myOtherArray = [];
var i;

for (i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
}
