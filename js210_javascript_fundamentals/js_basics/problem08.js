function stringToSignedInteger(str) {
  var STR_TO_DIG = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
    '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  }

  var i;
  var num = 0;
  var size;

  if (STR_TO_DIG[str[0]] === undefined) {
    i = 1;
    size = str.length - 1;
  } else {
    i = 0;
    size = str.length;
  }

  for (; i < str.length; i += 1) {
    size -= 1;
    num += STR_TO_DIG[str[i]] * Math.pow(10, size);
  }

  return str[0] === '-' ? num - num * 2 : num;
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));