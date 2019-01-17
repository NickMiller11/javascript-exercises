function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  }

  var winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

var userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// the reason the error is occuring is that the function generateRandomInt
// is stuck inside of parenthesis.  If you remove the parenthesis, this will
// work correctly.  Having the function declaration inside of parenthesis turned
// it into a function expression