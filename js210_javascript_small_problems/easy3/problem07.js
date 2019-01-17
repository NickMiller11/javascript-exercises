// function runningTotal(arr) {
//   var newArray = [];
//   var i;
//   var sum = 0;

//   for (i = 0; i < arr.length; i += 1) {
//     newArray.push(sum += arr[i]);
//   }

//   return newArray;
// }

// Further Exploration: Rewrite using #map

function runningTotal(arr) {
  var sum = 0;
  var i;
  var resultArray = arr.map(function(num) {
    return sum += num;
  });

  return resultArray;
}

// The FE part was pretty difficult, I had to look at some of the other student's
// answers. The above is probably the most basic usage of map to solve this problem.
// Others have incorporated this with #slice and #reduce, although I'm not exactly
// sure how that works.

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));