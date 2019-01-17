// input - integer
// output - string
//
// rules:
// - return the century name of the input year
// - centuries begin with the year that ends in 01
// - attach the appropriate suffix:
//   - years ending in 1 = 'st'
//   - years ending in 2 = 'nd'
//   - years ending in 3 = 'rd'
//   - all other years = 'th'
//   - exceptions:
//     - years ending in 11, 12, and 13 are 'th'
//
// algorithm:
// - century equals divide year by 100 using Math.floor
// - if the year remainer 100 is 0, subtract one from century

function century(year) {
  var century;
  var suffix;

  century = String(Math.ceil(year / 100));

  if ((century % 100 === 11) || (century % 100 === 12) || (century % 100 === 13)) {
    suffix = 'th';
  } else if (century % 10 === 1) {
    suffix = 'st';
  } else if (century % 10 === 2) {
    suffix = 'nd';
  } else if (century % 10 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return century + suffix
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
