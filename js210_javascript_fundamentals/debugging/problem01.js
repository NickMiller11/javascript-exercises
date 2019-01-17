function randomGreeting() {
  var words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  var idx = Math.floor(Math.random() * words.length);

  words[idx];
}

function greet() {
  var names = Array.prototype.slice.call(arguments);
  var i;

  for (i = 0; i < names.length; i++) {
    var name = names[i];
    var greeting = randomGreeting;

    console.log(greeting + ', ' + name + '!');
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// line 7 doesn't explicitely return a value

// var name and var greeting on lines 15 and 16 should be declared at the top
// of the function

// randomGreeting needs to be invoked with the parenthesis to invoke it as a function
// on line 16