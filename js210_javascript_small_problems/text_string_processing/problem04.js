// Write a function that takes a string as an argument,
// and returns that string with the first character of every
// word capitalized and all subsequent characters in lowercase.
//
// You may assume that a word is any sequence of non-whitespace characters.

// input - string
// output - string
//
// rule:
// - return the input string with the first character of every word capitalized
//
// algorithm:
// - split the string, map it
//   - return the first character capitalized followed by the sliced string from 1

function wordCap(string) {
  return string.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
