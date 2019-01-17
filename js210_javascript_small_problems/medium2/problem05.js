/*
A 'featured number' (something unique to this exercise) is an odd number
that is a multiple of 7, with all of its digits occuring exactly once each.
For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
(it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next
featured number greater than the integer. Issue an error message if there is
no next featured number.

input - number
output - odd number or error message

rules:
- return the next number that is both:
  - a multiple of 7
  - has no digits occuring more than once
- return an error message if there is no next featured number

algorithm:
- create a guard clause that checks if there is no next featured number
  - number more than 9876543210
- if input is even, need to make it odd by subtracting 1 from it
- using a loop, check the next odd number (i += 2) after the input number that is both
  - a multiple of 7
  - has no digits occuring more than once (helper function)
- if number meets both requirements, return it

- helper function
  - turn number into a string a split it.
  - check to see if each number is in a new array
    - if not, push number into a new array
    - if so, return false
  - return true if get to end of iteration

*/

function featured(num) {
  num = num % 2 === 0 ? num + 1 : num + 2;

  for (; ; num += 2) {
    if (num > 9876543210) {
      return "Error: No next featured number"
    } else if (num % 7 === 0 && uniqueDigits(num)) {
      return num;
    }
  }
}

function uniqueDigits(num) {
  var checkArray = [];
  var numArray = String(num).split('');
  var i;

  for (i = 0; i < numArray.length; i += 1) {
    if (checkArray.includes(numArray[i])) {
      return false;
    } else {
      checkArray.push(numArray[i]);
    }
  }

  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9996663331));