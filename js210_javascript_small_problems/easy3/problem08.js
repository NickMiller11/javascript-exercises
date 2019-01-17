// function swap(string) {
//   var arr = string.split(' ');
//   var returnArray = [];
//   var subArr;
//   var i;
//   var temp;
//   var firstChar;
//   var lastChar;

//   for (i = 0; i < arr.length; i += 1) {
//     subArr = arr[i].split('')
//     firstChar = subArr[0];
//     lastChar = subArr[subArr.length - 1];

//     temp = firstChar;
//     subArr.splice(0, 1, lastChar);
//     subArr.splice(subArr.length - 1, 1, temp);

//     returnArray.push(subArr.join(''));
//   }

//   return returnArray.join(' ');
// }

// The code solution to this is relatively similar, however they don't declare
// and use nearly as many variables.  The actual letter swapping is put into a
// separate function that builds a new string by adding different sections of
// the word.

// Further Exploration


function swap(words) {
  var wordArr = words.split(' ');

  wordArr = wordArr.map(function (word) {
    if (word.length === 1) return word;

    return word[word.length - 1] + word.slice(1, -1) + word[0]
  });

  return wordArr.join(' ');
}


console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));