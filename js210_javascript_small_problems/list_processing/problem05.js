// Write a function that takes a string argument, and returns a list of
// all substrings that start from the beginning of the string, ordered
// from shortest to longest.
//
// Examples:

// input - string
// output - array
//
// rules:
// - return an array that is comprised of successively iterating strings starting
//   from the first character
//
// algorithm:
// - split, map, reduce with index + 1

function substringsAtStart(string) {
  return string.split('').map(function (letter, idx) {
    return string.slice(0, idx + 1);
  });
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
