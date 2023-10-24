const { Ingredients, Recipes, RecipeIngredients} = require("../../../db");


const getRecipes = async function (userId) {   
  const recipes = await Users.findAll({
    include: [{ model: Recipes }]
  });
  return recipes;
}
module.exports = { getRecipes };


 
