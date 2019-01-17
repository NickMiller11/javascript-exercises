/*

input - number
output - fibonacci number

rules:
- compute the nth fibonacci number where n is the input number
- the first two fibonacci numbers are both 1

algorithm:
- set up a guard clause for if the input is 1 or 2
- set up an escape clause to return the current sum if the counter reaches the input number
  if n <
- declare variables for first and second, both equal to 1 or itself


*/

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else {
    return fibonacci(nth - 1) + fibonacci(nth - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765