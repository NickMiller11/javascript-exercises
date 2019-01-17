// Write a function that takes two arguments, inventoryItem and transactions,
// and returns an array containing only the transactions for the specified
// inventoryItem.
//
// Example

// input - number and array of objects
// output - array of objects
//
// rules:
// - return an array of objects that consists of objects from the input array
//   that has the same id number.
//
// algorithm:
// - sounds like a job for filter!
// - Filter and return the input array by the input id number

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

function transactionsFor(targetId, transactionList) {
  return transactionList.filter(function (transaction) {
    return transaction.id === targetId;
  });
}

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
