/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that
do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true
if the word can be spelled using the set of blocks, or false otherwise.
You can consider the letters to be case-insensitive when you apply the rules.

input - string
output - boolean

rules:
- given specific character pair blocks, return true or false depending on whether the
  word can be spelled
- if a letter from a block is used, the other letter cannot be used
- case insensitive

data structure:
- array of strings, where both letters together is a string ['BO', 'GT']

algorithm:
- create the letter look up array
- split the input string into an array of characters and upcase them
- iterate over the array of characters, for each character
  - set toggle to false
  - iterate over the look up table (using regex)

    - if the look up table contains a string that includes the letter
      - slice the string that includes the letter from the look up array
      - toggle something true
  - if toggle is false at end, return toggle
- return toggle at end

*/




function isBlockWord(word) {
  var blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE',
              'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  var toggle;
  var i;
  var testChar;
  var wordArray = word.split('').map(function (letter) {
    return letter.toUpperCase();
  });

  for (i = 0; i < wordArray.length; i += 1) {
    toggle = false;
    testChar = RegExp(wordArray[i]);

    blocks = blocks.map(function (block) {
      if (testChar.test(block)) {
        toggle = true;
        return '';
      } else {
        return block;
      }
    });

    if (toggle === false) {
      return toggle;
    }
  }

  return toggle;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false