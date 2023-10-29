const { Users, Days, Meals, Ingredients, Recipes, MealRecipes, MealIngredients, RecipeIngredients} = require("../../../db");


const dayNotExist = async function ({userId, date}) {  
  const user = await Users.findAll({
    where: {
      id: userId
    }});

  const meals= await Meals.findAll({
    where:{}
  })

  return {
    date,
    kcalObjetive:user[0].kcalObjetive, 
    Meals:meals
  }

}
module.exports = { dayNotExist };


 