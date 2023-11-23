const { Meals, MealRecipes, Ingredients, Recipes } = require("../../../db");
const { getDayDiary } = require('./getDayDiary');
const { Op } = require('sequelize');

const changueFoodMealtoMeal = async function ({ userId, recipeId, ingredientId, mealId, chosenMeal }) {
  try {
    if (recipeId) {
        await MealRecipes.update({MealId: chosenMeal},{
            where: {
                MealId: mealId,
                RecipeId:recipeId
            }
        })
    }


    const meal1 = await Meals.findOne({
        where: {id: mealId},
        include: [ 
            { 
              model: Recipes,
              through: {
                model: MealRecipes, 
                attributes: ['portions'], 
              },
              include: [
                {
                  model: Ingredients,
                  through: {
                    model: RecipeIngredients, 
                    attributes: ['amount', 'unit'],
                  },
                }
              ]
            }, 
            {
              model: Ingredients,
              through: {
                model: MealIngredients, 
                attributes: ['amount', 'unit'],
              },
            }
          ]
    })
    const meal2 = await Meals.findOne({
        where: {id: chosenMeal},
        include: [ 
            { 
              model: Recipes,
              through: {
                model: MealRecipes, 
                attributes: ['portions'], 
              },
              include: [
                {
                  model: Ingredients,
                  through: {
                    model: RecipeIngredients, 
                    attributes: ['amount', 'unit'],
                  },
                }
              ]
            }, 
            {
              model: Ingredients,
              through: {
                model: MealIngredients, 
                attributes: ['amount', 'unit'],
              },
            }
          ]
    })
return [meal1, meal2]

  } catch (error) {
    return error.message || 'Error al intentar eliminar el registro';
  }
};

module.exports = { changueFoodMealtoMeal };