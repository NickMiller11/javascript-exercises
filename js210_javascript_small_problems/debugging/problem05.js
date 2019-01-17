/*
We are assigned the task to implement a range function that returns an array
of integers beginning and ending with specified start and end numbers. When
only a single argument is provided, that argument should be used as the ending
number and the starting number should be 0.

Check our code below. Why do the the example invocations fail with an error
saying Maximum call stack size exceeded? Can you fix the code, so it runs
without error and satisfies the requirements?
*/

function range(start, end) {
  var range = [];
  var element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}


// Examples

console.log(range(10, 20));
console.log(range(5));

/*
By having two range functions defined, the first one will be redefined with the second version.
Therefore, the second range will call itself an infinite amount of times.

I was right!
*/
