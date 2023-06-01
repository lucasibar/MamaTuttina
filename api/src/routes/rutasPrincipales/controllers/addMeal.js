const { MealIngredients, Ingredients, Lunches, Dinners, Extras } = require("../../../db");

const addMeal = async function ({ idMeal, ingredient, amount, unit }) { 
  try {
    let meal = null;
  
    const lunch = await Lunches.findOne({ where: { id: idMeal } });
    if (lunch) meal = lunch;

    const dinner = await Dinners.findOne({ where: { id: idMeal } });
    if (dinner) meal = dinner;
    
    const extra = await Extras.findOne({ where: { id: idMeal } });
    if (extra) meal = extra;


    if (meal) {
      const [foundIngredient, created] = await Ingredients.findOrCreate({ where: { name: ingredient } });
   
      const respuesta = await meal.getIngredients();
      await meal.addIngredient(foundIngredient)
      return foundIngredient;
    } else {
      throw new Error('Meal not found');
    }
  } catch (error) {
    throw new Error('Failed to connect to the database or API');
  }
}

module.exports = { addMeal };
