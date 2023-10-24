const { Users, Days, Meals, Ingredients, Recipes} = require("../../../db");
const {Op} = require('sequelize');

const deleteDay = async function (idDay) {   
  await Days.destroy({
    where: { id: idDay }
  })
  return "El dia fue eliminado correctamente";
}
module.exports = { deleteDay };


 