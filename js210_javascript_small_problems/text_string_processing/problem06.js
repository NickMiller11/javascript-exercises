// Write a function that takes a string as an argument, and returns that
// string with a staggered capitalization scheme. Every other character,
// starting from the first, should be capitalized and should be followed
// by a lowercase or non-alphabetic character. Non-alphabetic characters
// should not be changed, but should be counted as characters for determining
// when to switch between upper and lower case.

// input - string
// output - string
//
// rule:
// - return the input string with every other character capitalized
// - do not change any non-alphabetic character, but take into account for
//   capitalization order
//
// algorithm:
// - split, map, passing in char and index
//   - if index is even, toUpperCase, else toLowerCase
// - join

function staggeredCase(string) {
  return string.split('').map(function (word, idx) {
    return idx % 2 === 0 ? word.toUpperCase() : word.toLowerCase();
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
