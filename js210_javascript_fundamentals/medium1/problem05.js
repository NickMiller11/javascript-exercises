// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

// This will log 'The total value is 15' because even though there is a counter
// function, the variable is declared after it due to hoisting rules and
// the function is not called due to no parenthesis

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// var counter = 5;
// var rate = 3;

// This will log 'The total value is undefined' or return an error, because
// both counter and rate will be undefined when the console.log statement is run

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// This will log 'The total value is 15' for the same reasons as the first snippit