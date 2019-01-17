var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));   // will log 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // will log 45



// var startingBalance;
// var chicken;
// var chickenQuantity;
// var totalPayable;

// startingBalance = 1;
// chicken = 5;
// chickenQuantity = 7;
// totalPayable = function (item, quantity) {
//   return startingBalance + (item * quantity);
// };

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity));  // will log 40

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity)); // will log 45