const { Users, Days, Meals, Ingredients, Recipes, MealRecipes, MealIngredients, RecipeIngredients} = require("../../../db");
const { dayNotExist } = require('./dayNotExist')

const getDayDiary = async function ({userId, date}) {  
  const day = await Users.findAll({
    where: {
      id: userId
    },
    include: [
      {
        model: Days,
        where: {
          date: date,
        },
        include: [
          {
            model: Meals,
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
            ],
          },
        ]
      }, 
    ],
  });
    const {dayName, orderNumber, UserDays, ...answer  } =  day[0].Days[0].toJSON()
  answer.kcalObjetive = day[0].kcalObjetive
  
  
  answer.Meals.map(meal=>{
  //---------------------------------------------------------------------------------
    delete meal.DayMeals
  
  

    meal.Recipes.map(recipe=>{
      recipe.portion = recipe.MealRecipes.portions
      delete recipe.MealRecipes

      recipe.Ingredients.map(ingredient=>{
        ingredient.amount = ingredient.RecipeIngredients.amount
        ingredient.unit = ingredient.RecipeIngredients.unit
        delete ingredient.RecipeIngredients
        delete ingredient.active
      })

    })



    meal.Ingredients.map(ingredient=>{
      ingredient.amount = ingredient.MealIngredients.amount
      ingredient.unit = ingredient.MealIngredients.unit
      delete ingredient.MealIngredients
      delete ingredient.active

    })
  //---------------------------------------------------------------------------------

  })




  return answer
}
module.exports = { getDayDiary };


 