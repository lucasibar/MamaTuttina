const { Users, Days, Meals, Ingredients, Recipes, MealRecipes, MealIngredients} = require("../../../db");

const getDay = async function ({userId, date}) {   
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
                attributes: ['id', 'name'], 
                through: {
                  model: MealRecipes, 
                  attributes: ['portions'], 
                },
              }, 
              {
              model: Ingredients,
                attributes: ['id', 'name'], 
                through: {
                  model: MealIngredients, 
                  attributes: ['amount'],
                },
              }
            ],
          },
        ]
      }, 
    ],
  });
  return day;
}
module.exports = { getDay };


 