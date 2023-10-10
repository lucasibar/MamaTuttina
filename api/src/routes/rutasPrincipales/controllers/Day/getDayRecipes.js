const {DayRecipes, Days, Recipes, Ingredients} = require("../../../../db");


const getDayRecipes = async function (id) {  
  try {
    const dayRecipesList = await DayRecipes.findAll({
      where: {
        DayId: id
      }
    });


    const recipesForDay = [];
    for (const dayRecipe of dayRecipesList) {
      const meal = dayRecipe.meal;
      const recipeId = dayRecipe.RecipeId;

      const recipe = await Recipes.findAll({
      where: {
        id: recipeId
      },
      include: [
        {
          model: Ingredients        
        }
      ]
    });

      if (recipe) {
        recipesForDay.push({
          meal: meal,
          recipe: recipe
        });
      }
    }

    console.log(recipesForDay);
    return recipesForDay;
  } catch (error) {
    console.error('Error al obtener recetas para el día:', error);
    throw error;
  }
}

module.exports = { getDayRecipes };
