const {Days, Recipes } = require("../../../../db");

const getDayRecipes = async function (id) {  

  const DayRecipes = await Days.findAll({
    where:{
      id : id
    }, 
    includes: Recipes
  });

  return DayRecipes
}

module.exports = { getDayRecipes };
