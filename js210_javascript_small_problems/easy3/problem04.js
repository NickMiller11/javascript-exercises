// input - string
// output - boolean

// rules:
// - return true if the string reads the same forward and backwards
// - return false otherwise

function isPalindrome(str) {
  var reverseStr = str.split('').reverse().join('');

  return reverseStr === str;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));