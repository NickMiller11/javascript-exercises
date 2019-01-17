console.log(a);

var a = 1;

// This logs undefined because, even though variable hoisting moves the variable
// declaration statement to the top of the program, the assignment expression isn't
// run until after the console.log line.