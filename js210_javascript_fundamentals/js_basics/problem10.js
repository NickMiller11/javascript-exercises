var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(num) {
  var str = '';
  absoluteNum = Math.abs(num);

  while (absoluteNum > 0) {
    remainder = absoluteNum % 10;
    str = DIGITS[remainder] + str;
    absoluteNum = Math.floor(absoluteNum / 10);
  }

  if (num > 0) {
    return '+' + str;
  } else if (num < 0) {
    return '-' + str;
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));