const { MealRecipe, Ingredients, Recipes} = require("../../../db");
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
  console.log(changesOfAmounts.recipeId)
  
  let {mealId, recipeId, portion}= changesOfAmounts

  try {
    // Buscar el registro específico que quieres actualizar
    const mealRecipe = await MealRecipe.findOne({
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
  } catch (error) {
    return error;
  }


}

// if(changesOfAmounts.ingredietId){
  
// }

  return "Se cambiaron correctamente las porciones y cantidades";
}
module.exports = { changesAmounts };


