const {MealIngredients, Ingredients, Dinners} = require("../../../db");

const addMeal = async function ({ idMeal, ingredient, amount, unit }) { 
  try {
    // const foundIngredient = await Ingredients.findOne({ where: { name: ingredient } });
    
    const lunch = await Dinners.findByPk(idMeal);
    if (!lunch) {
      throw new Error("Lunch not found");
    }

    const ingredientBDD = await Ingredients.findOne({
      where:{
        name:ingredient
      }
    });
    if (!ingredientBDD) {
      throw new Error("Ingredient not found");
    }
    console.log(ingredientBDD)
    await ingredientBDD.addIngredients(lunch, { through: { amount, unit } });
    // const union = await MealIngredients.findOrCreate({
    //   through:{
    //     DinnerId: lunch.id,
    //     IngredientId: ingredientBDD.id,
    //     amount,
    //     unit
    //   }
    // })
    
    return "AL FIN SE TERMINO";
  } catch (error) {
    throw new Error('Failed to connect to the database or API');
  }
}

module.exports = { addMeal };


// const { MealIngredients, Lunches, Ingredients, Dinners, sequelize } = require("../../../db");

// const addMeal = async ({ idMeal, ingredient, amount, unit }) => {
//   const transaction = await sequelize.transaction();

//   try {
//     const lunch = await Lunches.findByPk(idMeal, { transaction });
//     if (!lunch) {
//       throw new Error("Lunch not found");
//     }

//     const foundIngredient = await Ingredients.findOne({
//       where: { name: ingredient },
//       transaction
//     });
      
//     if (!foundIngredient) {
//       throw new Error("Ingredient not found");
//     }

//     await lunch.addIngredients(foundIngredient, { through: { amount, unit }, transaction });

//     await transaction.commit();

//     return "Ingredients added to lunch successfully";
//   } catch (error) {
//     await transaction.rollback();
//     throw new Error("Failed to connect to the database or API");
//   }
// };

// module.exports = { addMeal };


