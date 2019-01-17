// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must be
// greater than the length of the longest side, and every side must have a length
// greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments,
// and returns one of the following four strings representing the triangle's classification:
// 'equilateral', 'isosceles', 'scalene', or 'invalid'.

/*

input - 3 numbers
output - string

rules:
- return a string matching the type of triangle the three input numbers represents
- the three input numbers are the three sides of the triangle
- triangle types:
  - equilateral - if all three sides are equal
  - isosceles - if two sides are equal
  - scalene - if all three sides are different
  - invalid - the sum of the lengths of the two shortest sides is less than the third side
            - or one of the sides is 0

algorithm:
- create an array of the three numbers and sort it by number value
- if the first value is 0 or the sum of the first two values is less than the third
  - return 'invalid'
- if all three values equal each other
  - return 'equilateral'
- if two values equal each other
  - return 'isosceles'
- else
  - return 'scalene'
*/

function triangle(side1, side2, side3) {
  var sides = [side1, side2, side3].sort(function (a, b) {
    return a - b;
  });

  if (sides[0] === 0 || (sides[0] + sides[1]) < sides[2]) {
    return 'invalid';
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return 'equiltaeral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"