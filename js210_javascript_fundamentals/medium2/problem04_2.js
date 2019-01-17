// function doubler(number, caller) {
//   console.log('This function was called by ' + caller + '.');
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

function makeDouble(caller) {
  function double(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }
}

var doubler = makeDouble('Victor');
console.log(double(5));

