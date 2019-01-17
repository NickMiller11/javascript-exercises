var DIGIT_LETTERS = {
  '0':'0', '1':'1', '2':'2', '3':'3', '4':'4',
  '5':'5', '6':'6', '7':'7', '8':'8', '9':'9',
}

function integerToString(num) {
  var arr = [];

  while (num > 0) {
    remainder = num % 10;
    arr.unshift(remainder);
    num = Math.floor(num / 10);
  }

  return arr.join('');
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));