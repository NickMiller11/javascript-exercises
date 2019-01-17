function multisum(int) {
  var i;
  var total = 0;

  for (i = 3; i <= int; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }

  return total;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
