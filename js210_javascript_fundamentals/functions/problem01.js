var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This will log "This is global" beacuse a variable that is locally
// scoped to the function is declared and assigned, but doesn't affect
// the globally-scoped variable.