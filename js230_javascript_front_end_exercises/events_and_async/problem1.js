
function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

/*
input - n number of callback functions
output
  - log 1 number per second until max of number of callbacks * 2
  - run each callback at a random time before the numbers stop being logged

algorithm:
  - we need a setTimeout for the logging numbers
  - call forEach the arguments array to create a setTimeout with random duration
*/

function randomizer(callbacks) {
  var i;
  var max = arguments.length * 2;
  var args = Array.prototype.slice.call(arguments);
  var count = 0;
  
  for (i = 0; i < max; i++) {
    setTimeout(function() {
      count += 1
      console.log(count);
    }, i * 1000);
  }

  args.forEach(function(callback) {
    var rand = Math.floor(Math.random() * Math.floor(max));
    setTimeout(callback, rand * 1000);
  });

}
randomizer(callback1, callback2, callback3);
// Output:
// 1
// 2
// "callback2"
// "callback3"
// 3
// 4
// 5
// "callback1"
// 6
