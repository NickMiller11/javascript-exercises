/*
Write a function that displays an 8-pointed star in an nxn grid, where n
is an odd integer that is supplied as an argument to the function.
The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

input - an odd number
output - output star sequence to console

rules:
- display an eight pointed star on the console
- the minimum input number is 7
- the middle row has n stars
- all other rows have a sequence of 3 stars in a particular pattern
  - for all input numbers, the pattern of stars above and below the middle rows
    is together in the middle with no spaces between them
  - as the rows go outwards from the middle, the spaces increase by one each time
- there are n total rows

for a 7 sided star, the space patterns are:
o x x o x x o
x o x o x o x
x x o o o x x

There are always 4 spaces per line except for the middle line

the star patterns are:

x o o x o o x
o x o x o x o
o o x x x o o

There are always 3 stars per line except for the middle line.
As lines are output, but before the middle line, the stars start on the ends
and work their way inwards one at a time



data structure:
- it actually might be easier to build arrays and join them
- we could work with a default array, for example, [' ', ' ', ' ', '*', ' ', ' ', ' ']
  and reassign the spaces to stars as determined by a particular algorithm


algorithm:
- declare a variable for a row counter
- Math.ceil(n / 2) is the middle row and always equal to n stars
- if counter < middle
  leftStar and rightStar start on outsides(index 0 and index n - 1)
  leftStar position += 1, rightStar position -= one each time
  reassign output to default array each time (use slice to get a copy)
- if counter === middle
  show all stars
- if counter > middle
  reverse the logic from before
*/

function star(n) {
  var rowCounter;
  var leftStarPos = 0;
  var rightStarPos = n - 1;
  var middleRow = Math.ceil(n / 2);
  var defaultRow = createDefaultRow(n, middleRow);
  var currentRow;

  for (rowCounter = 1; rowCounter <= n; rowCounter += 1) {
    currentRow = defaultRow.slice(0);

    if (rowCounter < middleRow) {
      currentRow[leftStarPos] = '*';
      currentRow[rightStarPos] = '*';
      leftStarPos += 1;
      rightStarPos -= 1;
    } else if (rowCounter === middleRow) {
      currentRow = currentRow.map(everyStar);
    } else if (rowCounter > middleRow) {
      leftStarPos += 1;
      rightStarPos -= 1;
      currentRow[leftStarPos] = '*';
      currentRow[rightStarPos] = '*';
    }

    console.log(currentRow.join(''));
  }
}

function everyStar() {
  return '*';
}

function createDefaultRow(n, middleIndex) {
  var defaultRow = new Array(n);
  defaultRow.fill(' ');
  defaultRow[middleIndex - 1] = '*';
  return defaultRow;
}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
