// input - string
// output - string

// rules:
// - return a string with the order of the words in the input string reversed

// algorithm:
// - split the string into an array by spaces
// - return the split string after calling the reverse and join methods

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// The `reverseSentence` function is invoked on lines 15-17.  Execution continues
// on line 11 where the `reverseSentence` function and `sentence` parameter variable
// are declared.  The `sentence` parameter variable is assigned to the function's
// argument.  On line 12, the value that is returned after invoking the split method,
// reverse method, and join method on the `sentence` veriable is returned by the function.
// This return value is then logged to the console on lines 15-17.