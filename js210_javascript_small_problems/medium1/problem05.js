// Write a function that takes a sentence string as an argument, and returns that
// string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
// 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
// digit character.

/*
input - string with numbers as words
output - string with numbers as digits

rules:
- return the input string with all of the number words converted to digits
- make sure to leave punctuation in as is

algorithm:
- split the sentence string into an array
- iterate over the array with map
- if the word is included in the lookup array using match
  - return the index of where that word is
- else return the word as is
*/

var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(inputString) {
  var inputArray = inputString.split(' ');
  var cleanWord;

  return inputArray.map(function (word) {
    cleanWord = word.replace(/[^a-z]/gi, '').toLowerCase();

    if (numbers.includes(cleanWord)) {
      return word.replace(cleanWord, String(numbers.indexOf(cleanWord)));
    } else {
      return word;
    }
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
