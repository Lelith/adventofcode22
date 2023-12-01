const utils = require("../utils");

function isMarker(sequence){
  for(let i = 0; i < sequence.length; i++){
    for(let j = i + 1; j < sequence.length; j++){
    if (sequence[i] == sequence[j]){
      return false;
      }
    }
  } 
  return true;
}

function findMarker(signal){
  let sequenceFound=false;
  let pointer = 0;
  const signalArr = signal.split('');
  while(!sequenceFound && pointer < signalArr.length){
    const sequence = signalArr.slice(pointer,pointer+14);
    sequenceFound = isMarker(sequence);
    if(sequenceFound){
      console.log('sequenceFound after', pointer+14);
    }
    pointer++;
  }
}

try {
 //let data = utils.readInput('./example.txt');
  let data = utils.readInput('./input.txt');
  findMarker(data);
} catch (e) {
  console.log("Error", e.stack);
}
