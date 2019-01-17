function reverse(inputForReversal) {
  var i;
  var returnValue;

  if (Array.isArray(inputForReversal)) {
    returnValue = [];

    for (i = inputForReversal.length - 1; i >= 0; i -= 1) {
      returnValue.push(inputForReversal[i])
    }
  } else {
    returnValue = '';

    for (i = inputForReversal.length - 1; i >= 0; i -= 1) {
      returnValue += inputForReversal[i]
    }
  }



  return returnValue;
}

console.log(reverse('Hello'));
console.log(reverse('a'));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([]));

var array = [1, 2, 3];
console.log(reverse(array));
console.log(array);