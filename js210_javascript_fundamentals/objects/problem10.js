var MILLISECONDS_PER_MINUTE = 60000;
var MIDNIGHT = new Date('1/1/2000 00:00');

function afterMidnight(timeStr) {
  var nextDay = new Date('1/1/2000 ' + timeStr);
  return (nextDay - MIDNIGHT) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  var previousDay = new Date('12/31/1999 ' + timeStr);

  if (timeStr === '00:00') {
    return 0;
  }

  return (MIDNIGHT - previousDay) / MILLISECONDS_PER_MINUTE
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686