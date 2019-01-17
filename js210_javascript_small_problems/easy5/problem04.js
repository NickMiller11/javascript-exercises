// input - string
// output - string

// rules:
// - return the middle character(s) from the input string
// - if the string has an odd number of characters, return 1 character
// - if the string has an even number of characters, return 2 characters

// algorithm:
// - declare a variable for the center character
// - if the string's length is odd, set return value to center character
// - if even, set to center character - 1 and center character


function centerOf(str) {
  var centerIndex = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    return str.slice(centerIndex - 1, centerIndex + 1);
  } else {
    return str[centerIndex];
  }

}


console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"

// Function invokation starts on lines 27 - 31, where strings are passed in as
// arguments.  Execution jumps to line 15, where the function is declared and the
// strings are assigned to the parameter variable `str`.  On line 16, variable
// `centerIndex` is declared and assigned to the length of the string divided by 2,
// and then truncated to the nearest integer using Math.floor.  An if conditional
// starts on line 18.  If the length of the string is even, or is equal to a remainder of
// 0 when divided by 2, then the string is sliced from centerIndex minus one until
// the centerIndex plus one, not inclusive, and returned.  If the string's length is
// odd, then the character at index centerIndex is returned.