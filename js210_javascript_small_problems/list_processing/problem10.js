// Building on the previous exercise, write a function that returns true or
// false based on whether or not an inventory item is available. As before,
// the function takes two arguments: an inventory item and a list of transactions.
// The function should return true only if the sum of the quantity values of
// the item's transactions is greater than zero. Notice that there is a movement
// property in each transaction object. A movement value of 'out' will decrease
// the item's quantity.
//
// You may (and should) use the transactionsFor function from the previous exercise.
//
// Examples:

// input - number and array of objects
// output - boolean
//
// rules:
// - return true if the sum of the quantities for the item specified by the input
//   id number is greater than 0, return false otherwise
// - 'in' movements add to the total quantity
// - 'out' movements subtract from the total quantity
//
// algorithm:
// - use the transactionsFor function to filter the list of transactions
// - iterate over the transactions, adding to a total quantity if movement is in,
//   and subtracting if it is out
// - return whether the total quantity is greater than 0

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(targetId, transactionList) {
  var filteredList = transactionsFor(targetId, transactionList);
  var totalQuantity = 0;

  filteredList.forEach(function (transaction) {
    if (transaction.movement === 'in') {
      totalQuantity += transaction.quantity;
    } else if (transaction.movement === 'out') {
      totalQuantity -= transaction.quantity;
    }
  });

  return totalQuantity > 0;
}

function transactionsFor(targetId, transactionList) {
 return transactionList.filter(function (transaction) {
   return transaction.id === targetId;
 });
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
