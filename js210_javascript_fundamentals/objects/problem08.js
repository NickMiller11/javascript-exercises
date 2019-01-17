function penultimate(string) {
  var words = string.split(' ')
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// The problem is that JS doesn't use negative indexes to references values a
// certain index away from the end of an array. In order to change this, we should
// declare a variable and assign it to the split string.  Then, we can reference
// the second to last value with var.length - 2