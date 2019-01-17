function isPalindrome(str) {
  var reverseStr = str.split('').reverse().join('');

  return reverseStr === str;
}


function isPalindromicNumber(num) {
  return isPalindrome(num.toString());
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
