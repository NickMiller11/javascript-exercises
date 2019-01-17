// Write a function that takes a string as an argument, and returns that
// string with every lowercase letter changed to uppercase and every uppercase
// letter changed to lowercase. Leave all other characters unchanged.

// input - string
// output - string
//
// rules:
// - return a string where every lowercase letter is changed to uppercase, and
//   every uppercase letter is changed to lowercase.
//
// algorithm:
// - split, map
//   - if the char matches lowercase regex, call toUpperCase on it
//   - if the char matches uppercase regex, call toLowerCase on it
//   - else, return the char as is
// - join

function swapcase(string) {
  return string.split('').map(function (char) {
    if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    } else if (char.match(/[A-Z]/)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapcase('CamelCase'));              // "cAMELcASE"
console.log(swapcase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
