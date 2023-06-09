const { Recipes, LunchRecipes, ExtraRecipes, DinnerRecipes} = require("../../../db");

const addRecipe = async function ({ food, amount, unit, dayId, meal}) { 

  try {
    if (meal === "lunch") {
      const [recipeObj, recipeObjCreated] = await Recipes.findOrCreate({
        where: {name: food}
      });
    let respons = await LunchRecipes.create({
          RecipeId: recipeObj.id,
          DayId: dayId,
          unit,
          amount
      })
      res.redirect('/days/week');
    }

    if (meal === "dinner") {
      const [recipeObj, recipeObjCreated] = await Recipes.findOrCreate({
        where: {name: food}
      });
    let respons = await DinnerRecipes.create({
          RecipeId: recipeObj.id,
          DayId: dayId,
          unit,
          amount
      })
      res.redirect('/days/week');
    }
    
    if (meal === "extra") {
      const [recipeObj, recipeObjCreated] = await Recipes.findOrCreate({
        where: {name: food}
      });
    let respons = await ExtraRecipes.create({
          RecipeId: recipeObj.id,
          DayId: dayId,
          unit,
          amount
      })
      res.redirect('/days/week');
    }

  } catch (error) {
    throw new Error('Failed to connect to the database or API');
  }
}

module.exports = { addRecipe };