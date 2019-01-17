function calculateFibonacciNumber() {

}

function findFibonacciIndexByLength(length) {
  var num1 = 1;
  var num2 = 1;
  var sum = 2;
  var i = 2;

  while (sum.toString().length < length) {
    sum = num1 + num2;
    num2 = num1;
    num1 = sum;
    i += 1;
  }

  return i;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
