/*
A 'featured number' (something unique to this exercise) is an odd number
that is a multiple of 7, with all of its digits occuring exactly once each.
For example, 49 is a featured number, but 98 is not (it is not odd), 97 is
not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next
featured number greater than the integer. Issue an error message if there is
no next featured number.

input - number
output - number

rules:
- return the next featured number after the input number
- a featured number is 3 things
  - odd
  - multiple of 7
  - has digits occuring only once
- issue an error if there are no more error messages

data structure:
- manipulating numbers

algorithm:
- create a guard clause for numbers over 9876543210 (largest possible number with all digits once)
- find the next odd number by checking if remainder of dividing by 2 is 0, if so add 1, if not add 2
- find the next multiple of 7 (helper function)
  - check if remainder of input divided by 7 is 0
    if not, add 2 and repeat
- increment multiples of 7 until we find the next number where all digits appear once (helper function)
  - change to string and split
  - check to see if digits are unique by matching each digit 0-9 and length is less than 2
*/

function featured(num) {
  if (num > 9876543210) {
    return 'Error: No more featured numbers';
  }

  num = num % 2 === 0 ? num + 1 : num + 2;

  num = num
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987