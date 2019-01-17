var numCollection = [];
var numCollectionStr;
var num1 = prompt('Enter the 1st number:');
var num2 = prompt('Enter the 2nd number:');
var num3 = prompt('Enter the 3rd number:');
var num4 = prompt('Enter the 4th number:');
var num5 = prompt('Enter the 5th number:');

numCollection.push(num1);
numCollection.push(num2);
numCollection.push(num3);
numCollection.push(num4);
numCollection.push(num5);

var lastNum = prompt('Enter the last number:');

numCollectionStr = '[' + numCollection.join(', ') + ']';

if (numCollection.indexOf(lastNum) !== -1) {
  console.log('The number ' + lastNum + ' appears in '
              + numCollectionStr  + '.');
} else {
  console.log('The number ' + lastNum + ' does not appear in '
              + numCollectionStr  + '.');
}

// I completed this mostly on my own, I just didn't know how to make the
// array appear as an array.  Before I looked at the answer, I decided to
// artificially create one by joining the array and putting brackets on the ends

// For the further exploration section, we could iterate through the array and
// compare each value against the last number, breaking and returning a different
// string if it matches compared to if it doesn't match.  Most of the above solution
// would work, we would just need to tweak the if conditional to accept that logic.