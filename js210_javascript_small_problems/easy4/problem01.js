// input - floating point number
// output - string

// rules:
// - convert floating point degrees to degrees, minutes, and seconds

// algorithm:
// - set degrees to Math floor of the input num
// - subtract the degrees from the input num
// - set minutes equal to math floor of the input num * 60
// - subtract the minutes from the input num
// - set second equal to the math floor

var MINUTES_IN_DEG = 60;
var SECONDS_IN_MIN = 60;

function dms(num) {
  var degrees = 0;
  var minutes = 0;
  var seconds = 0;

  degrees = Math.floor(num);
  num -= degrees;

  minutes = Math.floor(num * MINUTES_IN_DEG);
  num = num * MINUTES_IN_DEG - minutes;

  seconds = Math.floor(num * SECONDS_IN_MIN);

  if (String(minutes).length === 1) {
    minutes = '0' + String(minutes);
  } else {
    minutes = String(minutes);
  }

    if (String(seconds).length === 1) {
    seconds = '0' + String(seconds);
  } else {
    seconds = String(seconds);
  }

  return degrees + '°' + minutes + "'" + seconds + '"';
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));