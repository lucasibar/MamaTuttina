const { Ingredients, Recipes, RecipeIngredients} = require("../../../db");


const getIngredients = async function (userId) {   
  const ingredients = await Ingredients.findAll();
  return ingredients;
}
module.exports = { getIngredients };


 
