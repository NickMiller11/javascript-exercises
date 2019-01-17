function retire() {
  var currentAge = Number.parseInt(prompt('What is your age?'), 10);
  var retireAge = Number.parseInt(prompt('At what age would you like to retire?'), 10);

  var thisYear = new Date().getFullYear();
  var yearsToGo = retireAge - currentAge;
  var retireYear = thisYear + yearsToGo;

  console.log('It\'s ' + thisYear + '. You will retire in ' + retireYear + '.');
  console.log('You only have ' + yearsToGo + ' years of work to go!');
}

retire();

// Further Exploration - if you didn't use the new keyword, you would return a
// string of the current date rather than a date object.