
var length = parseInt(prompt('Enter the length of the room in meters:'), 10);
var width = parseInt(prompt('Enter the width of the room in meters:'), 10);
var areaMeters = length * width;
var areaFeet = areaMeters * 10.76;


console.log('The area of the room is ' + areaMeters + ' square meters '
            + '(' + areaFeet + ' square feet).');
