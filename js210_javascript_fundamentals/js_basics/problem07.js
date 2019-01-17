function stringToInteger(str) {
  var STR_TO_DIG = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
    '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  }

  var i;
  var num = 0;
  var size = str.length;

  for (i = 0; i < str.length; i += 1) {
    size -= 1;
    num += STR_TO_DIG[str[i]] * Math.pow(10, size);
  }

  return num;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));