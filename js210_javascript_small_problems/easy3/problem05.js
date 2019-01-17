function isPalindrome(str) {
  var reverseStr = str.split('').reverse().join('');

  return reverseStr === str;
}

function processString(str) {
  var arr = [];
  var i;
  var charCode;

  for (i = 0; i < str.length; i += 1) {
    charCode = str.charCodeAt(i);
    if ((charCode > 47 && charCode < 58) ||
        (charCode > 96 && charCode < 123)) {
          arr.push(str[i]);
    }
  }

  return arr.join('');
}

function isRealPalindrome(str) {
  var processedStr = processString(str.toLowerCase());

  return isPalindrome(processedStr);
}

console.log(isRealPalindrome('madam'));
console.log(isRealPalindrome('Madam'));
console.log(isRealPalindrome("Madam I'm Adam"));
console.log(isRealPalindrome('356653'));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('356ab653'));


// after reading the solution, I realized I didn't need to go through the hassle of
// pushing to an array and joining it, I could have just added the characters
// to an empty string.  Also, instead of using character codes, I could have created
// two separate methods to compare lower case letters and numbers and return a
// boolean