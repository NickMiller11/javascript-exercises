// input - integer
// output - array

// rules:
// - return an array that contains each digit in the input number

// algorithm:
// - convert the input number to a string
// - iterate over the string and push each value to an array

function digitList(num) {
  var i;
  var stringNum = String(num);
  var newArray = [];

  for (i = 0; i < stringNum.length; i += 1) {
    newArray.push(parseInt(stringNum[i], 10));
  }

  return newArray;
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));