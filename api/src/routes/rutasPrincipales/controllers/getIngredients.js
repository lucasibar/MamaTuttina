const {Days, Ingredients } = require("../../../db");

const getIngredients = async function () {   
  const IngredientsList = await Ingredients.findAll();
  return IngredientsList
}
module.exports = { getIngredients };
