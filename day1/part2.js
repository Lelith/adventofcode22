const utils = require("../utils");

try {
  //let data = utils.readInput('./example.txt');
  let data = utils.readInput('./input.txt');

  data = utils.modDataBlanklines(data);
  const foodSupply = [];
  
  data.forEach(elvePackage => {
    let calories =  utils.modDataNewline(elvePackage);
    calories = utils.calcArraySum(calories);
    foodSupply.push(calories);
  })

  foodSupply.sort((a,b) => b-a);
  const topThreeSum = utils.calcArraySum(foodSupply.slice(0,3));

  console.log('Maximum Calories',topThreeSum);

} catch (e) {
  console.log("Error", e.stack);
}
