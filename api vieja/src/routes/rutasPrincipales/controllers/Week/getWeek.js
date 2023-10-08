const {Days, Recipes, Ingredients, Lunches, Dinners, Extras } = require("../../../../db");

const getWeek = async function () {   
  const LastWeek = await Days.findAll({
    where: {},
    include: [

      // TRAIGO LAS RECETAS CON SUS TRES RESPECTIVAS ELACIONES LUNCH DINNER EXTRAS
      {
        model: Recipes,
        as: 'lunchRecipes',
        through: { attributes: ['amount', 'unit'] },
        include: [
          {
            model: Ingredients,
            through: { attributes: ['amount', 'unit'] },
          },
        ],
      },
      {
        model: Recipes,
        as: 'dinnerRecipes',
        through: { attributes: ['amount', 'unit'] },
        include: [
          {
            model: Ingredients,
            through: { attributes: ['amount', 'unit'] },
          },
        ],
      },
      {
        model: Recipes,
        as: 'extraRecipes',
        through: { attributes: ['amount', 'unit'] },
        include: [
          {
            model: Ingredients,
            through: { attributes: ['amount', 'unit'] },
          },
        ],
      },

      
      // TRAIGO LAS RECETAS CON SUS TRES RESPECTIVAS ELACIONES LUNCH DINNER EXTRAS
      {
        model: Ingredients,
        as: 'lunchIngredients',
        through: { 
          attributes: ['amount', 'unit'],
          as: 'amountIngredientDay'
        }
      },   
      {
        model: Ingredients,
        as: 'dinnerIngredients',
        through: { 
          attributes: ['amount', 'unit'],
          as: 'amountIngredientDay'
        },
      },   
      {
        model: Ingredients,
        as: 'extraIngredients',
        through: { 
          attributes: ['amount', 'unit'],
          as: 'amountIngredientDay'
        }
      }
    ],
    order: [['id', 'DESC']],
    limit: 7,
  });

  return LastWeek
}

module.exports = { getWeek };
