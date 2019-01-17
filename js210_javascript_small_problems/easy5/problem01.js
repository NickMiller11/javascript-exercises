// input - string
// output - string

// rules:
// - return a new string where every character in the input string is repeated

// algorithm:
// - declare a variable for the return string
// - declare a variable for index
// - iterate through the string
//   - concatenate the current character to the return string twice
// - return the return string

function repeater(str) {
  var newString = '';
  var i;

  for (i = 0; i < str.length; i += 1) {
    newString += str[i] + str[i];
  }

  return newString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

// When the function is called on lines 25, 26, and 27, the function is declared on
// line 14, and takes one parameter called `str`. Two variables are declared inside
// block, newString which is assigned to an empty string, and i, which is just declared
// and is assigned to undefined.  Starting on line 18, we loop through the parameter
// variable str using variable i as an index, starting at index 0 and stopping before
// i equals the length of the string.  In each iteration, the character at that particular
// index in `str` is concatenated to newString twice.  Once the for loop has completed,
// execution contiues on line 22, with the function returning newString.
