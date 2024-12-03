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


function findDupes(first, second,third){
  let sameItems = [];
  first.forEach((item)=> {
    if(second.includes(item) && third.includes(item)){
      sameItems.push(item);
    }
  });
  return sameItems;
}

function findBadges(rucksacks){
  const badges = []
  for(let idx = 0; idx < rucksacks.length - 2; idx+=3) {
    const rucksack1 = rucksacks[idx].split('').sort();
    const rucksack2 = rucksacks[idx+1].split('').sort();
    const rucksack3 = rucksacks[idx+2].split('').sort();
   const groupBadges = findDupes(rucksack1,rucksack2,rucksack3);
    badges.push(groupBadges[0]);
  }
  return badges;
}

function calculateResult(dupliactes, prioritySheet){
  let sum=0;
  dupliactes.forEach(dupe => {
    sum += prioritySheet.get(dupe);
  })
  console.log(sum);
}

try {
  // let data = utils.readInput('./example.txt');
 let data = utils.readInput('./input.txt');
  data = utils.modDataNewlineStr(data);
  const badges = findBadges(data);
  const prioritySheet = createPrioMap();
  calculateResult(badges,prioritySheet);
} catch (e) {
  console.log("Error", e.stack);
}
