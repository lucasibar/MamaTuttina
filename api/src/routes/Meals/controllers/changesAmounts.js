const { MealRecipes, Ingredients, Recipes} = require("../../../db");
const {Op} = require('sequelize');

const changesAmounts = async function (changesOfAmounts) {
//changesOfAmounts
// {
//   mealId,
//   recipeId,
//   portion,
//   ingredietId,
//   amoutn
// }

if(changesOfAmounts.recipeId){
  
  let {mealId, recipeId, portion}= changesOfAmounts

    const mealRecipe = await MealRecipes.findOne({
      where: {
        MealId: mealId,
        RecipeId: recipeId,
      },
    });

    if (!mealRecipe) {
      return 'Registro no encontrado';
    }

    await mealRecipe.update({
      portions: portion,
    });


    return 'Registro actualizado con éxito'



}else if(changesOfAmounts.ingredietId){
    
  let {mealId, ingredientId, amount, unit}= changesOfAmounts

    const mealRecipe = await MealRecipes.findOne({
      where: {
        MealId: mealId,
        RecipeId: ingredientId,
      },
    });

    if (!mealRecipe) {
      return 'Registro no encontrado';
    }

    await mealRecipe.update({
      amount: amount,
      unit: unit
    });


    return 'Registro actualizado con éxito'



}

return new Error
}
module.exports = { changesAmounts };


