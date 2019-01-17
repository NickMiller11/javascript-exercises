var MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  var midnight = new Date('1/1/2000 00:00');
  var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  var hours = padWithZeroes(afterMidnight.getHours(), 2);
  var minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return hours + ':' + minutes;

}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"