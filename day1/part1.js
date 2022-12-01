const utils = require("../utils");

try {
  // let data = utils.readInput('./example.txt');
  let data = utils.readInput('./input.txt');

  data = utils.modDataBlanklines(data);
  const foodSupply = [];
  
  data.forEach(elvePackage => {
    let calories =  utils.modDataNewline(elvePackage);
    calories = utils.calcArraySum(calories);
    foodSupply.push(calories);
  })
  console.log('Maximum Calories',utils.maxArrayNum(foodSupply));

} catch (e) {
  console.log("Error", e.stack);
}
