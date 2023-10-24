const { Users, Days, Meals, Ingredients, Recipes} = require("../../../db");
const {Op} = require('sequelize');

const getPlanification = async function (userId) {   
  const planificationDays = await Users.findAll({
    where: {
      id: userId
    },
    include: [
      {
        model: Days,
        where: {
          dayName: { [Op.not]: null },
          order:[ ['orderNumber', 'ASC'] ],
        },
        include: [
          {
            model: Meals,
            include: [ { model: Recipes}, {model: Ingredients}],
          },
        ]
      }, 
    ],
  });
  return planificationDays;
}
module.exports = { getPlanification };


 