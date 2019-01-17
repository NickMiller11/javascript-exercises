// input - string
// output - string

// rules:
// - return a new string that doubles any consonant character
// - do not double vowels, digits, punctuation or whitespace

// algorithm:
// - declare new variables for the return string and index
// - iterate through the string
//   - if the character is a letter and not a vowel, concatonate the character twice
//     to the return string
//   - if not, concatonate once
// - return the return string

function isConsonant(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return vowels.indexOf(letter) === -1 && letter >= 'a' && letter <= 'z';
}

function doubleConsonants(str) {
  var newString = '';
  var i;

  for (i = 0; i < str.length; i += 1) {
    if (isConsonant(str[i].toLowerCase())) {
      newString += str[i];
    }

    newString += str[i];
  }

  return newString
}

console.log(doubleConsonants('String') === "SSttrrinngg")
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");    //
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");        //
console.log(doubleConsonants(''));                // ""

// When the function is called on lines 39-42, execution moves to line 22 where the
// function `doubleConsonants` is declared.  A different string in each case is passed
// into the function as an argument and assigned to the parameter variable str.  A new
// variable is declared on line 23 and assigned to an empty string, and a new variable
// is declared on line 24, not assigned to anything which makes it's value undefined.
// A for loop is initated on line 26, which assigns the variable i to 0.  The for loop
// will continue as long as variable i is less than the length of the input string,
// or variable str.  Each iteration through the for loop assigns i to the value of i
// plus one.  In each iteration, a lower case version of the letter at the index
// location i in str is passed into the `isConsonant` function.

// Execution continues on line 16 with the function declaration of `isConsonant`.  The
// value of str[i] is passed in as an argument and assigned to the parameter variable
// `letter`.  Three comparison operators are utilized, and if all three expressions
// evaluate to true, then true is returned back to line 27 and the exeuction proceeds
// in the if conditional.  On line 28, the value at str[i] is concatonated onto the variable
// `newString`. On line 31, the value at str[i] is concatonated onto the variable
// `newString` once again.  Once variable i is no longer less than the length of
// the parameter variable `str`, then the for loop ends and execution continues
// to the return statement on line 34 where the variable newString is explicitely returned