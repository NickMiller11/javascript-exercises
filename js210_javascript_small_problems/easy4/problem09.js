// input - array
// output - nothing.  Logs to console

// rules:
// - log a count of each unique value in the input array

// algorithm:
// - declare a variable for an object
// - iterate through the array and add each unique item and count
// - iterate through object keys and log the key and value to console


function countOccurrences(arr) {
  var count = {};
  var i;
  var keys;

  for (i = 0; i < arr.length; i += 1) {
    count[arr[i]] = count[arr[i]] || 0
    count[arr[i]] += 1;
  }

  keys = Object.keys(count);

  for (i = 0; i < keys.length; i += 1) {
    console.log(keys[i] + ' => ' + count[keys[i]]);
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2