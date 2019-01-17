// input - string
// output - string

// rules:
// - return a new string with words from the input string
// - all words with 5 or more characters should have their order reversed

// algorithm:
// - split the input string into an array
// - iterate through each word
//   - if the word has a length of 5 or more, split reverse and join
// - join the array and return it

function reverseWords(str) {
  var strArray = str.split(' ');
  var i;

  for (i = 0; i < strArray.length; i += 1) {
    if (strArray[i].length >= 5) {
      strArray[i] = strArray[i].split('').reverse().join('');
    }
  }

  return strArray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// The `reverseWords` function is invoked on lines 27-29, passing in a string as
// an argument.  Execution continues on line 14 where the argument as assigned to the
// parameter variable `str`.  On line 15, a variable `strArray` is declared and
// assigned to the return value of calling the split method on `str` and passing in
// a whitespace character as the argument.  On line 16, variable `i` is declared, and
// because it is not explicitely assigned to any value, it's value is undefined.
// A for loop is initiated on line 18, assigning variable `i` to the number 0.  The
// for loop will continue to repeat while `i` is less than the length of the `strArray`
// and `i` will be incremented by one for each loop.  In each loop, execution continues on
// line 19 where the if condiitonal checks to see if the value at index `i` in the
// `strArray` has a length equal to 5 or greater.  If it does, the block inside the if
// conditional is executed, which reassigns the value at index `i` in `strArray` to
// the return value of calling split, reverse, and join methods on that value.  Once
// the program exits the for loop, function will return the value returned by calling
// the join method on the `strArray` and passing in a whitespace character as an
// argument.  The `reverseWords` function is logged in the console on lines 27-29.

