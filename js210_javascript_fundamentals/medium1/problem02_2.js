var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// this will return an infinite loop where 0 is logged to the console repeatedly
// because execution always takes the if part of the condition while i is equal to 0,
// and it will never increment i on the else path.