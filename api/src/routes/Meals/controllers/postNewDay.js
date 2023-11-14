const { Users, Days, Meals } = require("../../../db");
const {Op} = require('sequelize');

const postNewDay = async function (userId, nameDay) {   
  const user = await Users.findOne({where: {id: userId} })
  const newDay = await Days.create(nameDay)
  const meals = await Meals.findAll()
  meals.map(meal=> newDay.addMeals(meal))
  user.addDays(newDay)



  return newDay
}
module.exports = { postNewDay };


 