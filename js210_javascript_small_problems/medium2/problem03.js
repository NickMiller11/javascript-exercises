// A triangle is classified as follows:
//
// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.
//
// Write a function that takes the three angles of a triangle as arguments, and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.
//
// You may assume that all angles have integer values, so you do not have to worry
//  about floating point errors. You may also assume that the arguments are in degrees.

/*

input - 3 numbers
output - string

rules:
- return the type of triangle based on the three input angle numbers
- triangle types:
  - if one angle is 90, return "right"
  - if one angle is greater than 90, return "obtuse"
  - if all three angles is less than 90, return "acute"
  - if the sum of all angles is not 180 or an angle is 0, return "invalid"

algorithm:
I think I want to use a helper function with this one to determine the triangle
- create an array consisting of the angles
- if all three angles equal 180 and none are zero, return the helper function return value
- else return invalid

helper function:
- if all three angles are less than 90, return acute
- if one angle equals 90, return right
- if one angle is greater than 90, return obtuse

*/

function triangle(angle1, angle2, angle3) {
  var angleArray = [angle1, angle2, angle3];

  if (angle1 + angle2 + angle3 !== 180 || angleArray.includes(0)) {
    return 'invalid';
  } else {
    return triangleType(angleArray);
  }
}

function triangleType(angleArray) {
  if (angleArray.every(function (angle) {
    return angle < 90;
  })) {
    return 'acute';
  } else if (angleArray.includes(90)) {
    return 'right';
  } else if (angleArray.some(function (angle) {
    return angle > 90;
  })) {
    return 'obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
