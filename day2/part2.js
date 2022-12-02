const utils = require("../utils");

const winningPairs = new Map();
winningPairs.set('A',2); // paper wraps rock
winningPairs.set('B',3); // scissors cut paper
winningPairs.set('C',1); // rock destroys scissors

const loosingPairs = new Map();
loosingPairs.set('A',3); // rock destroys scissors
loosingPairs.set('B',1); // paper wraps rock
loosingPairs.set('C', 2); // scissors cut paper


const scoring = new Map();
scoring.set('A',1); 
scoring.set('B',2);
scoring.set('C',3);


function playGame(data){
  let score=0;
  data.forEach(round => {
    let hands = round.split(' ');
    switch(hands[1]) {
     case 'X': // loose
        score +=loosingPairs.get(hands[0]);
    break;
    case 'Y': // draw
      score += 3;
      score += scoring.get(hands[0])
    break;
    case 'Z': // win
    score +=6;
    score += winningPairs.get(hands[0]);
    break;
  }
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
