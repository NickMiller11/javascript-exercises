// The method franchise.allMovies is supposed to return the following array:

// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object? Try fixing this problem
// by taking advantage of JavaScript lexical scoping rules.

var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    var self = this;

    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

console.log(franchise.allMovies());

// The method didn't work correctly because 'this' inside of the inner function reverted the execution
// context back to the implicit global context.  We had to pass in the context via a variable