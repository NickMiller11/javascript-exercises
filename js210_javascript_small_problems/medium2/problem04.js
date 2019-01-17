// Write a function that takes a year as an argument, and returns the number of
// 'Friday the 13ths' in that year. You may assume that the year is greater than
// 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
// You may also assume that the same calendar will remain in use for the foreseeable future.

/*
input - number year
output - number

rules:
- return the number of times that Friday the 13th shows up in a year
- the year will be greater than 1752

algorithm:
- create variables for the first date, month, and counter
- set counter equal to 0
- set first date equal to jan 1, and month equal to 0
- loop through each month while month is less than 12,
  - update Date to next month
  - testing whether it is a friday
    - if so, increment a counter
- return counter
*/

function fridayThe13ths(year) {
  var month = 0;
  var checkDate = new Date(year, month, 13);
  var numberOfFri13 = 0;

  for (; month < 12; month += 1) {
    checkDate.setMonth(month);

    if (checkDate.getDay() === 5) {
      numberOfFri13 += 1;
    }
  }

  return numberOfFri13;
}


console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
