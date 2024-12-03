const utils = require("../utils");

const winningPairs = ['A Y', 'B Z', 'C X'];
const mapping = new Map();
mapping.set('X',1);
mapping.set('Y',2);
mapping.set('Z',3);
mapping.set('A',1);
mapping.set('B',2);
mapping.set('C',3);

function playGame(data){
  let score=0;
  data.forEach(round => {
    let hands = round.split(' ');
    if(winningPairs.includes(round)) {
      score +=6;
    } else if(mapping.get(hands[0]) === mapping.get(hands[1])){
      score += 3;
    }
    score += mapping.get(hands[1]);
  });
  console.log('final score', score);
}

try {
  //let data = utils.readInput('./example.txt');
  let data = utils.readInput('./input.txt');
  data = utils.modDataNewlineStr(data);
  playGame(data);
} catch (e) {
  console.log("Error", e.stack);
}
