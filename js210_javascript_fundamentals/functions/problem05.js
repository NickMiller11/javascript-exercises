function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// This will log 'This is global' because myVar is declared by the
// program at the top, and then assigned to 'This is global' once
// the function is invoked.