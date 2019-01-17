/*
The Fibonacci series is a sequence of numbers in which each number is
the sum of the previous two numbers. The first two Fibonacci numbers are
1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth
is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

This simple sequence can easily be computed using a recursive function.
A recursive function is one in which the function calls itself.
For example, the following function is a recursive function that computes
the sum of all integers between 1 and n:

function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}

A good recursive function has three primary qualities:

It calls itself at least once.
It has an ending condition — e.g., if (n === 1), in the sum function above.
The results of each recursion are used in each step — e.g., n + sum(n - 1) uses sum(n - 1).

Write a recursive function that computes the nth Fibonacci number,
where nth is an argument passed to the function.

This exercise verges on the Advanced level of exercises, so do not be discouraged
if you are not able to solve it on your own; recursion is tricky, and even
experienced developers can have difficulty dealing with it.

input - number
output - number

rules:
- using recursion, determine the fibonacci number for the input number
- fibonacci is determined as the sum of the previous two numbers

algorithm:
- since we need to use recursion, at it's root we need to call the same method
  on n - 1 and n - 2.
-  The result of the fibonacci number sequence is 1 for both
  n of 1 and 2, so we can set up a guard clause for these values
*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}



console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
