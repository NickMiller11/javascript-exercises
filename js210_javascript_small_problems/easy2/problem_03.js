function stringy(int) {
  var i;
  var newString = '';

  for (i = 1; i <= int; i += 1) {
    i % 2 === 0 ? newString += "0" : newString += "1";
  }

  return newString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
