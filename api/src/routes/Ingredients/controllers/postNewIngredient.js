const { Users, Days, Meals, Recipes, Ingredients } = require("../../../db");
const {Op} = require('sequelize');

const postNewIngredient = async function (ingredient) {   
const newIngredient = await Recipes.create(ingredient)

  return newIngredient
}
module.exports = { postNewIngredient };


 
