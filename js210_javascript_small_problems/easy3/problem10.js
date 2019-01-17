function checkNumber(char) {
  return char >= 0 && char <= 9;
}

function checkLowerChar(char) {
  return char >= 'a' && char <= 'z';
}

function checkUpperChar(char) {
  return char >= 'A' && char <= 'Z';
}

function checkCharacter(word) {
  var letters = word.split('');
  var i;
  var char;

  for (i = 0; i < word.length; i += 1) {
    char = word[i];

    if (checkUpperChar(char) || checkLowerChar(char) || checkNumber(char)) {
      continue;
    } else {
      letters.splice(letters.indexOf(char), 1);
    }
  }

  return letters.join('')
}

function wordSizes(words) {
  var wordLengths = {};
  var wordsArray = words.split(' ');
  var keys;
  var i;
  var word;

  if (words.length === 0) {
    return wordLengths;
  }

  for (i = 0; i < wordsArray.length; i += 1) {
    keys = Object.keys(wordLengths);
    word = checkCharacter(wordsArray[i]);

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