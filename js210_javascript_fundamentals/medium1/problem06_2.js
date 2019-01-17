function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// Execution begins on line 7 where the `debugIt` function is invoked with no arguments.
// Execution proceeds on line 1 where the `debugIt` function is declared. Next, the
// function declaration for `logger` is hoisted above the variable declaration.  Next,
// the variable `status` is declared and assigned to the string `debugging`.  The `logger`
// function is invoked on line 7.  Execution continues on line 3 where the `status`
// variable, which is assigned to the string value `debugging`, will be logged to
// the console.