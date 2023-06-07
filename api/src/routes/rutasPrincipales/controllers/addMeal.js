const {Recipes, Days, Ingredients, DinnerRecipes, LunchRecipes, ExtraRecipes, DinnerIngredients, LunchIngredients, ExtraIngredients} = require("../../../db");

const addMeal = async function ({ food, amount, unit, dayId, meal }) { 

  try {
    const recipeTrue = await Recipes.findOne({ where:{name:food} })
    if(recipeTrue) return "conectar food con dayID medienata recetas y meal con un amount y unit";
    
    const [ingredientTrue, created]= await Ingredients.findOrCreate({ where:{name:food} })

    if(meal==='lunch') await LunchIngredients.create({
      IngredientId: ingredientTrue.id,
      DayId: dayId,
      amount,
      unit
    })
    // if(meal==='dinner') await DinnerIngredients.create({
    //   IngredientId: ingredientTrue.id,
    //   DayId: dayId,
    //   amount,
    //   unit
    // })
    // if(meal==='extra') await ExtraIngredients.create({
    //   IngredientId: ingredientTrue.id,
    //   DayId: dayId,
    //   amount,
    //   unit
    // })
    
    
    
    
    
    return ingredientTrue;
  } catch (error) {
    throw new Error('Failed to connect to the database or API');
  }
}

module.exports = { addMeal };