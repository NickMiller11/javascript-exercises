/*
Write a function that takes a year as an argument, and returns the number of
'Friday the 13ths' in that year. You may assume that the year is greater than
1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
You may also assume that the same calendar will remain in use for the foreseeable future.

input - year as a number
output - number of times Friday 13th occured that year

rules:
- return the number of times Friday the 13th occured on the input year
- the year is greater than 1752

thoughts:
- since the 13th can only happen once per month, we want to iterate through the months
  on the thirteen day to see if it is a Friday.
- months are 0 - 11


data structure:
- we're going to have to use dates for this

algorithm:
- create a guard clause for invalid inputs -> typeof === 'number' && !isNan(num)
- create a variable for counter
- create a date on jan 13th of that year
- for i = 0 while i < 12
  - set month to i
  - getDay to check if it is a friday
    - if yes, add to counter
- return counter
*/

function fridayThe13ths(year) {
  var month = 0;
  var counter = 0;
  var testDate = new Date(year, month, 13);

  if (typeof year !== 'number' || (typeof year === 'number' && isNaN(year))) {
    return 'Error: Not a valid year';
  }

  for (; month < 12; month += 1) {
    testDate.setMonth(month);

    if (testDate.getDay() === 5) {
      counter += 1;
    }
  }

  return counter;
}

console.log(fridayThe13ths());           // Error: Not a valid year
console.log(fridayThe13ths('test'));     // Error: Not a valid year
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2