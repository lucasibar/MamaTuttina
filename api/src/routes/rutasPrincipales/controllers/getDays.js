const {Days, Recipes, Ingredients, RecipesIngredients } = require("../../../db");

const getDays = async function () {   
    const semana = await Days.findAll({
      order: [['id', 'ASC']],
      include: [
        { model: Recipes, 
          as: 'lunch',
          include: [
            { 
              model: Ingredients,
                        attributes: { exclude: ['lunchId', 'dinnerId', 'extraId', 'carbs', 'proteins', 'fats'] },

              through: { 
                model: RecipesIngredients,
                attributes: ['amount']
              }
            }
          ] 
        },
        { model: Recipes, 
          as: 'dinner',
          include: [
            { 
              model: Ingredients,
                        attributes: { exclude: ['lunchId', 'dinnerId', 'extraId', 'carbs', 'proteins', 'fats'] },

              through: { 
                model: RecipesIngredients,
                attributes: ['amount']
              }
            }
          ] 
        },
        { model: Recipes, 
          as: 'extra',
          include: [
            { 
              model: Ingredients,
              attributes: { exclude: ['lunchId', 'dinnerId', 'extraId', 'carbs', 'proteins', 'fats'] },
              through: { 
                model: RecipesIngredients,
                attributes: ['amount']
              }
            }
          ] 
        }
      ]
    })

  return semana
}

module.exports = { getDays };
  