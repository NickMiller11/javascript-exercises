// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

/*

input - number
output - fibonacci number

rules:
- return the nth fibonacci number
- each fibonacci number is calculating by adding the previous two together
- fibonacci numbers 1 and 2 return 1

algorithm:
We can write this as a for loop
Create a guard clause for 1 and 2 to return 1 - don't think we need this

Declare variables for first and second numbers (1 and 1), as well as a counter
Declare a variable for a temp number
set counter to 3, while the counter is less than or equal to the input number
- set temp equal to first
- set first equal to second + first
- set second equal to temp
- increment counter
return first

*/

function fibonacci(n) {
  var first = 1;
  var second = 1;
  var i;
  var temp;

  for (i = 3; i <= n; i += 1) {
    temp = first;
    first += second;
    second = temp;
  }

  return first;
}

console.log(fibonacci(5));        // 5
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(100));      // 354224848179261915075