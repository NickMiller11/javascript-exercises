function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// This is because the function logger is hoisted above the status variable declaration
// and assignment.  When the logger function is exectued, the status variable will
// have already been declared and assigned to the string 'debugging'