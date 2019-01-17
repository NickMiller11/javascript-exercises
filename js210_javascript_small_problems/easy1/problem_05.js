function calculateSum(int) {
  var i;
  var total = 0;

  for (i = 1; i <= int; i += 1) {
    total += i;
  }

  return total;
}

function calculateProduct(int) {
  var i;
  var total = 1;

  for (i = 1; i <= int; i += 1) {
    total *= i;
  }

  return total;
}


function productOrSum() {
  var int = parseInt(prompt('Please enter an integer greater than 0:'), 10);
  var operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.')

  if (operation === 's') {
    console.log('The sum of the integers between 1 and ' + int + ' is ' + calculateSum(int) + '.');
  } else if (operation === 'p') {
    console.log('The product of the integers between 1 and ' + int + ' is ' + calculateProduct(int) + '.');
  }
}

productOrSum();
