function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      var msg = ''
      switch (timeOfDay) {
        case 'morning':
          msg += this.morning + ' ' + this.name;
          break;
        case 'afternoon':
          msg += this.afternoon + ' ' + this.name;
          break;
        case 'evening':
          msg += this.evening + ' ' + this.name;
          break;
      }

      console.log(msg);
    },
  };
}

var helloVictor = createGreeter('Victor');
helloVictor.greet('morning');

// The code below is expected to output the following when run:

// > var helloVictor = createGreeter('Victor');
// > helloVictor.greet('morning');
// = "Good Morning Victor"

// However, it instead results in an error.
// What is the problem with the code? Why isn't it producing the expected results?

// Answer --> It's not using this. in front of the properties that the methods reference.