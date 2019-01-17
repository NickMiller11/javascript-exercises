var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// This will log 'This is global' because the variable is declared
// and assigned by the time the function is invoked.