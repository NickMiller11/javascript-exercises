// Write a function that takes an array of integers between 0 and 19, and
// returns an array of those integers sorted based on the English word for each number:
//
// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
// twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
//
// Example:

// input - array of numbers between 0 and 19
// output - array of numbers
//
// rules:
// - return an array of numbers sorted by the English words for the numbers
//
// algorithm:
// - create an array of the english words in numberical
// - use the sort method, with the logic of sorting by the word at the index of the digit

var numberWords = [
                   'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
                   'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                   'sixteen', 'seventeen', 'eighteen', 'nineteen'
                  ]

// function alphabeticNumberSort(numberArray) {
//   var aWord;
//   var bWord;
//
//   return numberArray.sort(function (a, b) {
//     aWord = numberWords[a];
//     bWord = numberWords[b];
//
//     if (aWord < bWord) {
//       return -1;
//     } else if (aWord > bWord) {
//       return 1;
//     } else if (aWord === bWord) {
//       return 0;
//     }
//   });
// }

// refactored

function alphabeticNumberSort(numberArray) {
  return numberArray.sort(letterSort);
}

function letterSort(a, b) {
  var aWord = numberWords[a];
  var bWord = numberWords[b];

  if (aWord < bWord) {
    return -1;
  } else if (aWord > bWord) {
    return 1;
  } else if (aWord === bWord) {
    return 0;
  }
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
