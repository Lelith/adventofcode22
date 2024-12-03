const utils = require("../utils");

function moveCrates(crates, instructions) {
  instructions.forEach(instruction => {
    instruction = instruction.split(' ');
    const amount = parseInt(instruction[1],10);
    const start = parseInt(instruction[3],10)-1;
    const target = parseInt(instruction[5],10)-1;
    // length: 3, amount 2, 
    const stackStart = crates[start].length-amount;
    const movingCrates = crates[start].splice(stackStart,amount);
    crates[target] = crates[target].concat(movingCrates);
  })
  return crates;
}

function report(crates) {
  let result = crates.map(stack => stack.pop());
  console.log(result.join(''));
}

try {
  // let crates = utils.readInput('./example_crates.txt');
  // let instructions = utils.readInput('./example_instructions.txt');
  let crates = utils.readInput('./crates.txt');
  let instructions = utils.readInput('./instructions.txt');

  crates = utils.modDataNewlineStr(crates);
  crates = crates.map(stack => stack.split(','));
  instructions = utils.modDataNewlineStr(instructions);
  crates= moveCrates(crates,instructions);
  report(crates);
} catch (e) {
  console.log("Error", e.stack);
}
