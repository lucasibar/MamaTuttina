const { Recipes, Meals, MealRecipes, Ingredients, RecipeIngredients, MealIngredients } = require("../../../db");
const { getDayDiary } = require('./getDayDiary');
const { Op } = require('sequelize');

const changeFoodName = async function ({userId, recipeId, newName, mealId}) {
    console.log(userId, recipeId, newName, mealId)
  try {
      console.log(userId, recipeId, newName)
    
    await Recipes.update({name: newName},{
        where: {id: recipeId}
    })
    
    const mealChanged = await Meals.findOne({
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
      
//   //---------------------------------------------------------------------------------

//     delete mealChanged.DayMeals
  
  

//     mealChanged.Recipes.map(recipe=>{
//       recipe.portion = recipe.MealRecipes.portions
//       delete recipe.MealRecipes

//       recipe.Ingredients.map(ingredient=>{
//         ingredient.amount = ingredient.RecipeIngredients.amount
//         ingredient.unit = ingredient.RecipeIngredients.unit
//         delete ingredient.RecipeIngredients
//         delete ingredient.active
//       })

//     })



//     meal.Ingredients.map(ingredient=>{
//       ingredient.amount = ingredient.MealIngredients.amount
//       ingredient.unit = ingredient.MealIngredients.unit
//       delete ingredient.MealIngredients
//       delete ingredient.active

//     })
//   //---------------------------------------------------------------------------------

return mealChanged
  } catch (error) {
    return error.message || 'Error al intentar eliminar el registro';
  }
};

module.exports = { changeFoodName };