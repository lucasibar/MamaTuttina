const { Users, Days, Meals, Ingredients, Recipes} = require("../../../db");


const deleteRecipes = async function (idRecpe) {   
  await Recipes.destroy({
    where: { id: idRecpe }
  })
  return "El dia fue eliminado correctamente";
}
module.exports = { deleteRecipes };


 