// Write a function that returns a list of all substrings of a string that
// are palindromic. That is, each substring must consist of the same sequence
// of characters forwards as backwards. The substrings in the returned list
//  should be sorted by their order of appearance in the input string. Duplicate
//  substrings should be included multiple times.
//
// You may (and should) use the substrings function you wrote in the previous
//  exercise.
//
// For the purpose of this exercise, you should consider all characters and
// pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and
// 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
//
// Examples:

// input - string
// output - array of strings
//
// rules:
// - return an array of all substrings of the input string that are palindromic
// - the returned array should be sorted in the order of appearance in the input string
// - duplicate substrings can be included multiple times
// - use the substring functions from previous problems
//
// algorithm:
// - I think this one is pretty much set up for me with the answers from the previous
// - problems.  I should use the array I get as the output from those functions
// - and just filter it based on whether the string is the same as the reversed string

function palindromes(string) {
  return substrings(string).filter(function (substring) {
    return substring === substring.split('').reverse().join('') && substring.length > 1;
  });
}

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



console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
