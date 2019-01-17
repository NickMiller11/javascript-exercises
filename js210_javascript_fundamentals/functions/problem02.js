var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

//This will log "This is local" because it is accessing the variable
// that is scoped to the function.