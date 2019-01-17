function validChar(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function cleanup(str) {
  var i;
  var newString = '';

  for (i = 0; i < str.length; i += 1) {
    if (validChar(str[i])) {
      newString += str[i];
    } else if (newString[newString.length - 1] !== ' ') {
        newString += ' ';
    }
  }

  return newString;
}

console.log(cleanup("---what's my +*& line?"));
