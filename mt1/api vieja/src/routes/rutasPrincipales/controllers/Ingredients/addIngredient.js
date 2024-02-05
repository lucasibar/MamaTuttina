const { Ingredients, LunchIngredients, ExtraIngredients, DinnerIngredients} = require("../../../../db");

const addIngredient = async function ({ food, amount, unit, dayId, meal, res}) { 
  try {
    if (meal === "lunch") {
      const [ingredientObj, ingredientObjCreated] = await Ingredients.findOrCreate({
        where: {name: food}
      });
    let respons = await LunchIngredients.create({
          IngredientId: ingredientObj.id,
          DayId: dayId,
          unit,
          amount
      })
      res.redirect('/days/week');
    }
    
    if (meal === "dinner") {
      const [ingredientObj, ingredientObjCreated] = await Ingredients.findOrCreate({
        where: {name: food}
      });
    let respons = await DinnerIngredients.create({
          IngredientId: ingredientObj.id,
          DayId: dayId,
          unit,
          amount
      })
      res.redirect('/days/week');
    }
    
    if (meal === "extra") {
      const [ingredientObj, ingredientObjCreated] = await Ingredients.findOrCreate({
        where: {name: food}
      });
    let respons = await ExtraIngredients.create({
          IngredientId: ingredientObj.id,
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

module.exports = { addIngredient };