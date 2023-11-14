const { Users, Days, Meals, Ingredients, Recipes, MealRecipes, RecipeIngredients} = require("../../../db");
const {Op} = require('sequelize');

const getPlanification = async function ({userId}) {

  const planificationDays = await Users.findAll({
    where: {
      id: userId
    },
    include: [
      {
        model: Days,
        where: {
          dayName: { [Op.not]: null },
        },
        order:[ ['orderNumber', 'ASC'] ],
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
              }
            ],
          },
        ]
      },
    ],
  });

const days = planificationDays[0].Days
const answer = days.map(dayS=>{

            const {date, UserDays, ...day  } =  dayS.toJSON()


            day.Meals.map(meal=>{
              delete meal.DayMeals

              let recipe= meal.Recipes[0] || {}

              recipe.portion = recipe.MealRecipes?.portions || 0
              recipe.MealRecipes? delete recipe.MealRecipes : null
              recipe.Ingredients?.map(ingredient=>{
                ingredient.amount = ingredient.RecipeIngredients.amount
                ingredient.unit = ingredient.RecipeIngredients.unit
                delete ingredient.RecipeIngredients
                delete ingredient.active
              })


             })

            return day

  })


  const kcalObj= planificationDays[0].kcalObjetive

  return answer;
}
module.exports = { getPlanification }


