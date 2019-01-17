/*
Write a function that takes a sentence string as an argument, and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
digit character.

input - string with written
output - string with digit numbers

rules:
- replace any written numbers with digits
- do not change any non-digit character

examples:
- let's add some examples if there are only number words, no number words,
  empty string, no string, number words sandwiched between other letters

data structure:
- object to hold the number words and digits
- regex to replace

algorithm:
- create an object with the number words and digits lookup
- create a guard clause to make sure non-string inputs are handled
- iterate through the object's keys
  - use #replace to replace anything matching the key bordered by word boundaries
    with the value

*/

function wordToDigit(inputString) {
  var digits = {'one':'1', 'two':'2', 'three':'3', 'four':'4', 'five':'5', 'six':'6',
                'seven':'7', 'eight':'8', 'nine':'9', 'zero':'0'}
  var keys = Object.keys(digits);
  var regexPattern;
  var buildRegex;

  if (typeof inputString !== 'string') {
    return 'Error: Not a valid string.'
  }

  keys.forEach(function (number) {
    buildRegex = "\\b" + number + "\\b";
    regexPattern = new RegExp(buildRegex, 'g');
    inputString = inputString.replace(regexPattern, digits[number], )
  });

  return inputString;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('four five three!')); // '4 5 3!'
console.log(wordToDigit('Please call me.')); // 'Please call me.'
console.log(wordToDigit('Can you spare a fiver?')); // 'Can you spare a fiver?'
console.log(wordToDigit('')); // ''
console.log(wordToDigit(1)); // 'Error: Not a valid string.'
// "Please call me at 5 5 5 1 2 3 4. Thanks."