var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// No, this program will infinite loop on 3 because the if/else clause is unable
// to proceed past that value.  If you wanted to fix this, you would need to move
// the i += 1 statement outside of the if conditional.

// After checking the code solution, this would actually infinite loop on 0 because
// it would never increment past the initial value.