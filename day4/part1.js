const utils = require("../utils");

function checkPairs(pairs) {
   let containments = 0;
  pairs.forEach(pair => {
    const sections = pair.split(',');
    const elf1 = sections[0].split('-').map(Number);
    const elf2 = sections[1].split('-').map(Number);


    if(elf1[0] <= elf2[0] && elf1[1] >=elf2[1]){
        containments++;
    }else
    if(elf1[0] >=elf2[0] && elf1[1] <=elf2[1]) {
      containments ++;
    }
  });

  console.log(containments);
}

try {
  //let data = utils.readInput('./example.txt');
  let data = utils.readInput('./input.txt');
  data = utils.modDataNewlineStr(data);

  checkPairs(data);
} catch (e) {
  console.log("Error", e.stack);
}
