function shortLongShort(str1, str2) {
  var newString = '';

  if (str1.length > str2.length) {
    newString += str2 + str1 + str2;
  } else {
    newString += str1 + str2 + str1;
  }

  return newString;
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
