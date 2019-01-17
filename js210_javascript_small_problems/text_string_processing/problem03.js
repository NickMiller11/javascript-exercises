// Write a function that takes a string and returns an object containing three
// properties: one representing the number of characters in the string that are
// lowercase letters, one representing the number of characters that are uppercase
// letters, and one representing the number of characters that are neither.

// input - string
// output - object
//
// rules:
// - return an object that counts lowercase, uppercase, and characters that are neither
//
// algorithm:
// - declare a variable and set equal to an object literal
// - split the string and use forEach to iterate through array
// - use if conditional to add one to each category

// my original solution - didn't meet the requirements

// function letterCaseCount(string) {
//   var stringArray = string.split('');
//   var returnObject = {};
//
//   stringArray.forEach(function (char) {
//     if (char.match(/[a-z]/)) {
//       returnObject.lowercase = returnObject.lowercase || 0;
//       returnObject.lowercase += 1;
//     } else if (char.match(/[A-Z]/)) {
//       returnObject.uppercase = returnObject.uppercase || 0;
//       returnObject.uppercase += 1;
//     } else {
//       returnObject.neither = returnObject.neither || 0;
//       returnObject.neither += 1;
//     }
//   });
//
//   return returnObject;
// }

function letterCaseCount(string) {
  var lowercaseChar = string.match(/[a-z]/g) || [];
  var uppercaseChar = string.match(/[A-Z]/g) || [];
  var neitherChar = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChar.length,
    uppercase: uppercaseChar.length,
    neither: neitherChar.length,
  }
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
