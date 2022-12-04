const utils = require("../utils");

function createPrioMap(){
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  let alphabetMap = new Map();
  let score = 1;
  alpha.forEach((x) => {
    alphabetMap.set(
      String.fromCharCode(x),score+26
    );
    alphabetMap.set(String.fromCharCode(x).toLocaleLowerCase(), score);
    score++;
  }
  );
  return alphabetMap;
}




function findDupes(fach1, fach2){
  let containingBoth = [];
  for(let i=0; i<fach1.length; i+=1){
  for(let j=0; j<fach2.length; j+=1){
    if (fach1[i] === fach2[j]) {
      containingBoth.push(fach1[i]);
    }
   }
  }
  return containingBoth;
}

function reorganise(rucksacks){
  const dupeList = [];
  rucksacks.forEach(rucksack => {
    let itemsPF = rucksack.length/2;
    let fach1 = rucksack.slice(0,itemsPF).split('').sort();
    const fach2 = rucksack.slice(itemsPF).split('').sort();
    const doubleItem = findDupes(fach1,fach2);
    dupeList.push(doubleItem[0]);
  })
  return dupeList;
}

function calculateResult(dupliactes, prioritySheet){
  let sum=0;
  dupliactes.forEach(dupe => {
    sum += prioritySheet.get(dupe);
  })
  console.log(sum);
}

try {
  //let data = utils.readInput('./example.txt');
  let data = utils.readInput('./input.txt');
  data = utils.modDataNewlineStr(data);
  const dupliactes = reorganise(data);
  const prioritySheet = createPrioMap();
  calculateResult(dupliactes,prioritySheet);
} catch (e) {
  console.log("Error", e.stack);
}
