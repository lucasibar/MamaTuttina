const { Users, Days, Meals } = require("../../../db");
const {Op} = require('sequelize');

const postNewRecipe = async function (recipe) {   
  const newRecipe = await Days.create(recipe)
  

  return newRecipe
}
module.exports = { postNewRecipe };


 