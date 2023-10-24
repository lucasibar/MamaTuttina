const { Ingredients, Recipes, RecipeIngredients} = require("../../../db");


const getRecipes = async function (userId) {   
  const recipes = await Recipes.findAll({
    include: [ 
      { 
      model: Ingredients,
        through: {
          model: RecipeIngredients, 
          attributes: ['amount', 'units'], 
        },
      }, 
    ]
  });
  return recipes;
}
module.exports = { getRecipes };


 