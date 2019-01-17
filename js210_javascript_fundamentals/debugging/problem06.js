var transactionLog = [];

function processInput(input) {
  var numericalData = parseFloat(input, 10);

  if (isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  var data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch {
    alert(error.message);
  }
}

function transactionTotal() {
  var total = 0;
  var i;

  for (i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());

after trying the program myself, I could detect two potential errors.
one is that there is nothing to convert the number to the hundreths spot.
two is that there is no error message defined if something that is not a number
is added