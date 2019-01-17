/*
input - string of numbers and commands
output - logging a number to the console

rules:
- have a 'stack' represented by an array
- have a register represented by a number
- process the commands from the input string
  - n -> set the register value equal to n
  - PUSH -> push the register value onto the stock, leave the register value the same
  - ADD -> pop a value from the stack, add it to the register, and store the sum in the register
  - SUB -> pop a value from the stack, subtrack it from the register, store the difference in the register
  - MULT -> pop a value from the stack, multiply it to the register, store the product in the register
  - DIV -> pop a value from the stack, divide it into the register, store the INTEGER quotient in the register
  - MOD -> pop a value from the stack, divide it into the register, store the INTEGER remainer in the reigster
  - POP -> pop a value from the stack and store it in the register
  - PRINT the register value

Algorithm:
- create the variables for stack and register
- parse the command string into an array
- use forEach to iterate over the array, using an if conditional to determine which action to take
- create functions for each command that mutate the stack and register
*/



function minilang(commandString) {
  function pop() {
    var poppedVal = stack.pop();
    register = poppedVal;
    return poppedVal;
  }

  var commandArray = commandString.split(' ');
  var stack = [];
  var register = 0;

  commandArray.forEach(function (command) {
    if (command.match(/\d/) !== null) {
      register = Number(command);
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'ADD') {
      register += pop();
    } else if (command === 'SUB') {
      register -= pop();
    } else if (command === 'MULT') {
      register *= pop();
    } else if (command === 'DIV') {
      register = Math.trunc(register / pop());
    } else if (command === 'MOD') {
      register = Math.trunc(register % pop());
    } else if (command === 'POP') {
      pop();
    } else if (command === 'PRINT') {
      console.log(register);
    }
  })
}


minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
