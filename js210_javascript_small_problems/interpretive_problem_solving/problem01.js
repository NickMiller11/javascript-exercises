/*
You have a bank of switches before you, numbered from 1 to n. Every switch is
connected to exactly one light that is initially off. You walk down the row of
switches and toggle every one of them. You walk back to the beginning of the row
and start another pass. On this second pass, you toggle switches 2, 4, 6, and
so on. On the third pass, you go back to the beginning again, this time toggling
switches 3, 6, 9, and so on. You continue to repeat this process until you have
gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns
an array of the lights that are on after n repetitions.

input - number
output - array of numbers

rules:
- return an array of numbers that represent lightbulb positions that are in the on status
- the number of lightbulbs equals the input number
- lightbulbs get toggled (changed to the opposite state) via a set pattern
  - there are the same number of toggle rounds as the input number
  - in round 1, all lights are on
  - starting in round 2 up to round n, lightbulbs that are a multiple of that round's
    number are toggled
- input will be a positive integer

data structure:
- an array of booleans
  - need to always increase index by 1 since zero index
x object with number keys/boolean values
  - need to access the object

outer loop for 2 through n times toggle lightbulbs
loop to actually toggle the lightbulbs

algorithm:
- populate the initial array with booleans (helper method)
- declare a variable for i and j (j = 2)
- outer loop - while j <= n
  - inner loop - (helper method)
  - increment j by 1
- transform to final array - (helper method)
- return array

helper 1 - populate array
  - while i < n - 1
    - array[i] = true
  - return array

helper 2 - inner loop
  - while i is less than array.length
    - use bang to toggle if index + 1 is multiple of j

helper 3 - transform array to final array
  declare new array
  forEach array
    - if value is true
      - push index + 1 to new array
  - return new array
*/

function lightsOn(switches) {
  var lightbulbArray = createLightbulbs(switches);
  var round;

  for (round = 2; round <= switches; round += 1) {
    lightbulbArray = toggleLightbulbs(lightbulbArray, round);
  }

  return onlyOnLightbulbs(lightbulbArray);
}

function createLightbulbs(switches) {
  var lightbulbArray = [];
  var i;

  for (i = 0; i < switches; i += 1) {
    lightbulbArray[i] = true;
  }

  return lightbulbArray;
}

function toggleLightbulbs(array, round) {
  return array.map(function (bulb, index) {
    if ((index + 1) % round === 0) {
      return !bulb;
    } else {
      return bulb;
    }
  });
}

function onlyOnLightbulbs(allLightbulbs) {
  var onBulbs = [];

  allLightbulbs.forEach(function (bulb, index) {
    if (bulb) {
      onBulbs.push(index + 1);
    }
  });

  return onBulbs;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]