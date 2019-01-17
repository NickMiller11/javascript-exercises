var min = 20;
var max = 200;
var diff = max - min + 1;

var randomAge = Math.floor(Math.random() * diff) + min;

console.log('Teddy is ' + randomAge + ' years old!');