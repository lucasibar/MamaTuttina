const { Users, Days, Meals, Recipes, Ingredients } = require("../../../db");
const {Op} = require('sequelize');

const postNewRecipe = async function ({recipe, idUser}) {   
  //ejemplo
  //{name: "Arroz con Pollo", category: "pollo" recipe: [{ ingredient: idIngredient, amount: 3, unti:grs }, { ingredient: idIngredient, amount: 3, unti:grs } ]}
  const user = Users.findOne({
    where:{
      id: idUser
    }
  })
const recipeName = await Recipes.create({
name: recipe.name,
category: recipe.category
})

await user.addRecipes(recipeName)
  for (let i=0; i<recipe.length; i++){
    const ingredient = recipe[i]
    await RecipeIngredient.create({
    RecipeId: recipeName.id,
    IngredientId: ingredient.ingredient,
    amount: ingredient.amount,
    unit: ingredient.unit
    }) 
  }
    

  return recipeName
}
module.exports = { postNewRecipe };


 
