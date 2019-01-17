// Modify the function from the previous exercise so that it ignores
// non-alphabetic characters when determining whether a letter should
// be upper or lower case. Non-alphabetic characters should still be
// included in the output string, but should not be counted when determining
// the appropriate case.

// input - string
// output - string
//
// rules:
// - return the input string with staggared capitalization
// - non-alphabetic characters do not count when determining capitalization
//
// algorithm:
// - create a variable that can toggle when a letter gets capitalized
// - split, map
//   - if a char is alphabetic
//     - flip toggle, use toggle to determine uppercase or lowercase
//   - else, return char
// - join

function staggeredCase(string) {
  var upperCase = false;
  return string.split('').map(function (char) {
    if (char.match(/[a-z]/i)) {
      upperCase = !upperCase;
      return upperCase ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
