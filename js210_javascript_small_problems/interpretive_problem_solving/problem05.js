/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution.
It uses a series of Caesar Ciphers based on the letters of a keyword.
Each letter of the keyword is treated as a shift value. For instance, the
letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds
to a shift value of 3. In other words, the shift value used for a letter is
equal to its index value in the alphabet. This means that the letters 'a'-'z'
are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also
equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by
applying the current shift value to a Caesar Cipher for that particular
character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:

plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't
in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts
alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword
doesn't matter—in other words, the resulting encryption won't change depending
on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

For a quick lookup of a ciphertext per character, you may use a tabula recta.
Each row of the table corresponds to a Caesar Cipher encryption using the columns'
character letter as a shift value.

input - string to be translated, string keyword
output - string that has been translated

rules:
- the keyword translates the input string based on the alphabetic index of the
  keyword character
  - alphabetic index starts at 0 with A, and ends at 25 with Z
  - the case of the keyword's characters does not matter when determining the
    alphabetic index.  In other words, 'b' === 'B'.  Both equal 1 index
  - each alphabetic index of each character of the keyword is applied to each character
    of the input string.  Once the keywords characters have all been used, we loop
    back around to the beginning of the keyword
- the keyword only translates alphabetic characters.  It does not work on anything
  other than a-z and A-Z.  Non-alphabetic characters are skipped and do not 'use' a
  keyword character

data structure:
- it's obvious we can use an array to represent the keyword index lookup, since the
  translation numbers fall in line exactly with the indexes of the characters if they
  were put into an array
- we should use an array for the input string as well as we'll need to iterate over it
- we can use an array for the keyword, and concat itself on the end when we run out before
  the input string is done being translated

algorithm:
- create the alphabetic array for index lookup
- create a variable for current index position on the keyword
- split the input string into an array
- split the keyword
  is greater than the length of the split input string
- loop through the split input string with map
  - if the character is an alphabetic character
    - look up the index of the downcased keyword char using current keyword char (need a variable
      for this) and indexOf
    - increment the index of the current keyword char
    - if the index is greater than keyword.length, subtract keyword.length from it
    - return the return value of the caesar cipher method with that character and the index of
      the downcased keyword char
  - if the character is not an alphabetic char
    - return the char as is
- join the resulting array back into a string and return it
*/

function vigenereCipher(inputString, keyword) {
  var positions = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var keywordIndex = 0;
  var inputArray = inputString.split('');
  var keywordArray = keyword.split('');
  var currentKeywordChar;
  var translationPosition;

  return inputArray.map(function (char) {
    if (char.match(/[a-z]/i)) {
      currentKeywordChar = keywordArray[keywordIndex];
      keywordIndex += 1;

      if (keywordIndex >= keyword.length) {
        keywordIndex -= keyword.length;
      }

      translationPosition = positions.indexOf(currentKeywordChar.toLowerCase());
      return caesarEncrypt(char, translationPosition);
    } else {
      return char;
    }
  }).join('');
}

function caesarEncrypt(message, positions) {
  if (typeof message !== 'string') {
    return "Error: Not a valid string";
  }

  var messageArray = message.split('');
  var currentChar;

  messageArray = messageArray.map(function (char, i) {
    if (char.match(/[a-z]/i)) {
      return translateChar(char, positions);
    } else {
      return char;
    }
  });

  return messageArray.join('');
}

function translateChar(char, positions) {
  var newCharCode = char.charCodeAt(0) + positions;
  var lowercaseEnd = 'z'
  var uppercaseEnd = 'Z'

  if (char.match(/[a-z]/)) {
    return processTranslation(newCharCode, lowercaseEnd);
  } else {
    return processTranslation(newCharCode, uppercaseEnd);
  }
}

function processTranslation(charCode, endChar) {
  while (charCode > endChar.charCodeAt(0)) {
    charCode -= 26;
  }

  return String.fromCharCode(charCode);
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat'));   //  Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereCipher("Brooklyn99", 'help'));                       //  Ivzdrpjc99
