// Write a function that returns a list of all substrings of a string.
// Order the returned list by where in the string the substring begins.
// This means that all substrings that start at position 0 should come
// first, then all substrings that start at position 1, and so on. Since
// multiple substrings will occur at each position, return the substrings
// at a given position from shortest to longest.
//
// You may (and should) use the substringsAtStart function you wrote in
//  the previous exercise:
//
// Example:

// input - string
// output - array of strings
//
// rules:
// - return an array of strings each string is a letter followed by concatonating
//   one subsequent letter until the end of the input string is reached.  Then, strings
//   starting at the next letter with the same concatonating pattern start
//
// algorithm:
// - use #forEach to iterate over the input string, passing in a sliced string starting
//   at the current index into the substringsAtStart function
// - push the return values to a new array

function substrings(string) {
  var newArray = [];

  string.split('').forEach(function (letter, idx) {
    substringsAtStart(string.slice(idx)).forEach(function (substring) {
      newArray.push(substring);
    });
  });

  return newArray;
}

function substringsAtStart(string) {
  return string.split('').map(function (letter, idx) {
    return string.slice(0, idx + 1);
  });
}


console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
