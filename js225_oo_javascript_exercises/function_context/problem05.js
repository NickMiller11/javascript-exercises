// Our earlier implementation of the Function.prototype.bind was simplistic.
// Function.prototype.bind has another trick up its sleeve besides hard-binding functions
// to context objects. It's called partial function application. Read this assignment and
// the MDN doucmentation to learn more about partial function application.

// Alter the myBind function written in the previous exercise to support partial function application.

function myBind(func, ctx) {
  var partialArgs = [].slice.apply(arguments, [2])

  return function() {
    var remainingArgs = [].slice.apply(arguments);
    var fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  }
}

function addNumbers(a, b) {
  return a + b;
}

var addFive = myBind(addNumbers, null, 5);

console.log(addFive(10));