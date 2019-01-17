function asciiValue(str) {
  var i;
  var total = 0;

  for (i = 0; i < str.length; i += 1) {
    total += str.charCodeAt(i);
  }

  return total;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
