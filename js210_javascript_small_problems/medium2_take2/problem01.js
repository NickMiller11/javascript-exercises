/*
Write a function that takes a string, and returns an object
containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character.

input - string
output - object

rules:
- return an object that contains the percentages of uppercase, lowercase, and
  characters that are neither.
- the percentages should be strings and show to the hundreths place
- the string will always have at least one character

questions:
- what do we do if the input is not a string?

data structure:
- we will probably need to iterate over this string, so I will use an array
  as the intermediate data structure

algorithm:
- create a variable and assign to splitting the input string
- filter the string 3 times, once for each of the categories (by regex) and
  count the length of the resulting arrays
- divide each category by the length of the input string array and multiply by 100
- use "toFixed" method to get the hundreths place, this converts it to a string
*/

function letterPercentages(inputString) {
  var lowercaseCount = inputString.match(/[a-z]/g) || [];
  var uppercaseCount = inputString.match(/[A-Z]/g) || [];
  var neitherCount = inputString.match(/[^a-z]/gi) || [];

  lowercaseCount = ((lowercaseCount.length / inputString.length) * 100).toFixed(2);
  uppercaseCount = ((uppercaseCount.length / inputString.length) * 100).toFixed(2);
  neitherCount = ((neitherCount.length / inputString.length) * 100).toFixed(2);

  return {
    lowercase: lowercaseCount,
    uppercase: uppercaseCount,
    neither: neitherCount,
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('A'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }
