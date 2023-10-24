const { RecipeIngredients, Ingredients, Recipes} = require("../../../db");


const changesAmountsIngredients = async function (changesOfAmounts) {   
//changesOfAmounts
//{
//idRecpe:ejemplo,
// ingredients:[{idIngredient: tanto, amount:6, units: grs}]
//}

const { idRecpe, ingredients } = changesOfAmounts


if(ingredients.length>0){
  for (let i = 0; i < ingredients.length; i++) {
    let ingredient = ingredients[i]

    const [recipe, created] = await RecipeIngredients.findOrCreate({
      where: {
      IngredientId: ingredient.idIngredient,
      RecipeId: idRecpe
      }
    });
    recipe.portions = recipe.portions 
    await recipe.save();
  }
}

  return "Se cambiaron correctamente las porciones y cantidades";
}
module.exports = { changesAmountsIngredients };


 