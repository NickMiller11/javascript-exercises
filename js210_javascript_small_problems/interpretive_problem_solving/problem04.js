/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of
the earliest and simplest ways to encrypt plaintext so that a message can be
transmitted securely. It is a substitution cipher in which each letter in a
plaintext is substituted by the letter located a given number of positions
away in the alphabet. For example, if the letter 'A' is right-shifted by 3
positions, it will be substituted with the letter 'D'. This shift value is
often referred to as the key. The "encrypted plaintext" (ciphertext) can be
decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case).
Any other character is left as is. The substituted letters are in the same letter
case as the original letter. If the key value for shifting exceeds the length of
the alphabet, it wraps around from the beginning.

input - string, number greater than or equal to 0
output - string

rules:
- return a string where characters have been changed to the character n positions to the
  right on the alphabet.
- if n positions exceeds the length of the alphabet, wrap around and start counting from
  the beginning after reaching Z
- preserve case
- any character other than alphabetic characters are not modified

cases:
- n = 0 --> return input text
- n > 0 --> return char at char's original position + n
- if original position + n is greater than 26, subtract 26 from n until n is less than 26
  and add to position

algorithm:
- split the input string into an array of characters
- map over the array of characters (helper function to process)
  - if the char matches a lower case character (regex)
    - get char code of character
    - if n + char code is greater than the max char code of lowercase characters
      - create a loop to keep subtracting 26 until it is valid (helper function)
  - else if the char matches a upper case char
    - get char code of character
    - if n + char code is greater than the max char code of uppercase characters
      - create a loop to keep subtracting 26 until it is valid (helper function)
  - else
    - return the character as is
- join the array and return it

charCodeAt - returns an integer between 0 and 65535 representing the UTF-16 code
             unit at the given index

fromCharCode - The static String.fromCharCode() method returns a string
              created from the specified sequence of UTF-16 code units.

*/

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

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

console.log(caesarEncrypt('', 5));     // ''
console.log(caesarEncrypt(43, 2));     // 'Error: Not a valid string'
