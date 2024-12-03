const { Modal } = require("@contentful/f36-components");
const utils = require("../utils");

function moveTail(positions){
  // where is Head?
  const headPos = positions.get('Head'); // [0,-1] [1,4] [0,-1]
  const tailPos = positions.get('Tail'); // [0,1] [0,2] [1,0]

  // we need to move when Head is not a direct neighbour
  // same row? 
  if(tailPos[0] == headPos[0]){
    // move up or down?
    if(tailPos[1]< headPos[1]-1) {
      // up
    } else if(tailPos[1] > headPos[1]+1){
      // down
    }
  } else if(tailPos[0] > headPos[1]){
    //head is in row below
    if(tailPos[1]>headPos[1]){
      // head is diagonal left
    } else if (tailPos[0]<headPos[1]){
      // head is diagonal right
    }
  }else if(tailPos[0] < headPos[1]){
    // head is above
    
  }
}

function moveHead(direction, steps, positions) {
  switch(direction){
    case 'D': // down
      for(let step=0; step<steps; step++){
        const headPos = positions.get('Head');
        headPos[1] -=1;
        positions.set('Head', headPos);
        moveTail(positions); 
      }
      break;
    case 'U':
<      case 'L':
        case 'R':>
  }
}

function executeInstructions(steps){
  const positions = new Map();
  positions.set('Head', [0,0]);
  positions.set('Tail', [0,0]);
  steps.forEach(step => {
    const instruction = step.split('');
    const direction = step[0];
    const amount = parseInt(step[1], 10);
    moveHead(direction, amount, positions);
  });
}

const stepsVisitedOnce = 0;
try {
  let data = utils.readInput('./example.txt');
  // let data = utils.readInput('./input.txt');
  data = utils.modDataNewlineStr(data);
} catch (e) {
  console.log("Error", e.stack);
}
