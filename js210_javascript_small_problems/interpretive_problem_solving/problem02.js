/*
Write a function that displays a four-pointed diamond in an n x n grid,
where n is an odd integer supplied as an argument to the function.
You may assume that the argument will always be an odd integer.

input - odd number
output - console log a diamond

rules:
- log a series of asterics that resemble a diamond
- the number of asterisks at the diamond's widest point will equal the input number
- the number of asterisks will decrease by two, one on each side, for each line above
  and below the widest point until there is one left
- spaces should make up for where the asterisks aren't in order to compensate for position
- there should be Math.floor(n / 2) spaces in the beginning, decreasing by one until
  there is none left.
- the spaces should be followed by diamonds, starting with 1, but increaseing by 2
  each row until it equals end
- both spaces and asterisk patterns should be reversed until the diamond is back to
  Math.floor(n / 2) spaces and 1 asterisk

algorithm:
- two loops, one for increasing asterisks and one for decreasing asterisks

- declare variable i
- loop one (increasing - until asterisks === n)
  - console.log - spaces (helper) asterisks (helper)
- loop two (decreasing - until asterisks === 1)
  - console.log - spaces (helper) asterisks (helper)

- spaces
  - repeat value =Math.floor(n / 2) + 1 - i
  - repeat the space with the repeat value

- asterisks
  - repeat value = (2 * i) - 1
  - repeat the asterisks with the repeat value

*/

function diamond(n) {
  var i;

  for (i = 1; i <= Math.ceil(n / 2); i += 1) {
    console.log(spaces(n, i) + asterisks(i));
  }

  i -= 1;

  while (i > 1) {
    i -= 1;
    console.log(spaces(n, i) + asterisks(i));
  }
}

function spaces(n, i) {
  var repeatValue = Math.ceil(n / 2) - i;
  return ' '.repeat(repeatValue);
}

function asterisks(i) {
  var repeatValue = (2 * i) - 1;
  return '*'.repeat(repeatValue);
}



// diamond(1);
// logs
// *

// diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//  *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *