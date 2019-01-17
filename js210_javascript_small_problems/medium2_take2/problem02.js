/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides
must be greater than the length of the longest side, and every side must
have a length greater than 0. If either of these conditions is not satisfied,
the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle
as arguments, and returns one of the following four strings representing
the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

input - 3 numbers
output - string

rules:
- determine what type of triangle the three input side lengths represent:
  - equilateral --> if all sides are same value
  - isosceles --> if two sides are equal, and one different
  - scalene --> if all three sides different
- triangles are invalid if either:
  - the sum of the two shortest sides are less than or equal to the longest side
  - every side must be greater than 0

questions:
- what about missing input?
- what about input of a non-number type?

data structure:
- we can put these numbers in an array so we can sort them

algorithm:
- add the numbers to an array, sort by numerical value
- create variables for min, middle, and max values
- if/else conditional for invalid triangles
  - else, use a helper function to determine triangle type

*/

function triangle(side1, side2, side3) {
  var sides = [side1, side2, side3].sort(function (a, b) {
    return a - b;
  });

  var max = sides[2];
  var middle = sides[1];
  var min = sides[0];

  if (min + middle <= max || sides.some(function (side) { return 0 })) {
    return "invalid"
  } else {
    return determineTriangleType(min, middle, max);
  }
}

function determineTriangleType(min, middle, max) {
  if (min === middle && middle === max) {
    return 'equilateral';
  } else if (min === middle || middle === max) {
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
