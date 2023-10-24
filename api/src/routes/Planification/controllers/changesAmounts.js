const { MealRecipe, Ingredients, Recipes} = require("../../../db");
const {Op} = require('sequelize');

const changesAmounts = async function (changesOfAmounts) {   
//changesOfAmounts
//{
//idMeal:ejemplo,
//recipes:[{idRecipe: tanto, portions:6}, {idRecipe: tanto2, porcions:6}],
// ingredients:[{idIngredient: tanto, amount:6}, {idIngredient: tanto2, amount:6}]
//}

const { idMeal, recipes, ingredients } = changesOfAmounts


if(recipes.length>0){
  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i]

    const [meal, created] = await MealRecipe.findOrCreate({
      where: {
      MealId: idMeal,
      RecipeId: recipe.idRecipe
      }
    });
    meal.portions = recipe.portions 
    await meal.save();
  }
}

if(ingredients.length>0){
  for (let i = 0; i < ingredients.length; i++) {
    let ingredients = ingredients[i]

    const [meal, created] = await MealRecipe.findOrCreate({
      where: {
      MealId: idMeal,
      IngredientId: ingredients.idIngredient
      }
    });
    meal.amount = ingredients.amount 
    await meal.save();
  }
}

  return "Se cambiaron correctamente las porciones y cantidades";
}
module.exports = { changesAmounts };


 