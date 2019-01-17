/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees,
and every angle must be greater than 0. If either of these conditions is not
satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments, and
returns one of the following four strings representing the triangle's classification:
'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to
worry about floating point errors. You may also assume that the arguments are in degrees.

input - 3 numbers
output - string

rules:
- determine the triangle type based on the three angles:
  - invalid --> sum of angles is not 180 OR one or more angles is 0
  - acute --> all angles are less than 90
  - obtuse --> one angle is greater than 90
  - right --> one angle is equal to 90
- return the string triangle type

date structure:
- I can just manipulate the numbers, so no different data type is needed

algorithm:
get the max and min of the two numbers with those functions
get the middle number by subtracting the min and max from the sum

- using an if conditional, enforce the triangle rules spelled out above

*/

function triangle(a1, a2, a3) {
  var total = a1 + a2 + a3;
  var min = Math.min(a1, a2, a3);
  var max = Math.max(a1, a2, a3);
  var middle = total - min - max;

  if (total !== 180 || min === 0) {
    return 'invalid';
  } else if (max < 90) {
    return 'acute';
  } else if ([min, middle, max].some(function (angle) { return angle === 90})) {
    return 'right';
  } else {
    return 'obtuse;'
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"