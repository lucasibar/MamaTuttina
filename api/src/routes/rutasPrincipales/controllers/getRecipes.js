const {Days, Recipes, Ingredients } = require("../../../db");

const getRecipes = async function () {   
  const RecipeList = await Recipes.findAll({
    where: {},
    include: [
      {
        model: Ingredients,
        through: { 
          attributes: ['amount', 'unit'],
        }
      }
    ],
  });

  return RecipeList
}

module.exports = { getRecipes };
