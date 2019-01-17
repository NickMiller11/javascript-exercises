// input - string
// output - object

// rules:
// - return an object that consists of lengths of the different words in the string
//   as keys with the number of times that sized word shows up in the string as values
// - words are any sequence of non-space characters

// algorithm:
// - declare a new variable for the return object
// - declare a new variable and assign to a split version of the input string
// - use map to iterate over the string
//   - if the length of the word already exists as a key
//     - add 1 to the value
//   - else
//     - add the key with 1 as the value
// - return the array

function wordSizes(words) {
  var wordLengths = {};
  var wordsArray = words.split(' ');
  var keys;
  var i;
  var word;

  for (i = 0; i < wordsArray.length; i += 1) {
    keys = Object.keys(wordLengths);
    word = wordsArray[i];

    if (keys.indexOf(String(word.length)) !== -1) {
      wordLengths[word.length] += 1;
    } else {
      wordLengths[word.length] = 1;
    }
  }

  return wordLengths;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));

  // wordsArray.map(function (word) {
  //   keys = Object.keys(wordLengths);

  //   if (keys.indexOf(String(word.length) !== -1)) {
  //     wordLengths[String(word.length)] += 1;
  //   } else {
  //     wordLengths[String(word.length)] = 1;
  //   }
  // });