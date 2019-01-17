var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

//This is log "This is local" because the global variable is
// reassigned in the function.