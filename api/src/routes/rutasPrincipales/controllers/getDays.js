const {Days, Recipes, Ingredients, Lunches, Dinners, Extras } = require("../../../db");

const getDays = async function () {   
    const semana = await Days.findAll({
      order: [['id', 'ASC']],
      include: [
        {
          model: Lunches,
          include: [
            {
              model: Recipes,
              include: [
                { model: Ingredients, through: { attributes: ['amount'] } }
              ]
            },
            {
              model: Ingredients, through: { attributes: ['amount'] }
            }
          ]
        },
        {
          model: Dinners,
          include: [
            {
              model: Recipes,
              include: [
                { model: Ingredients, through: { attributes: ['amount'] } }
              ]
            },
            {
              model: Ingredients, through: { attributes: ['amount'] }
            }
          ]
        },
        {
          model: Extras,
          include: [
            {
              model: Recipes,
              include: [
                { model: Ingredients, through: { attributes: ['amount'] } }
              ]
            },
            {
              model: Ingredients, through: { attributes: ['amount'] }
            }
          ]
        }
      ]
    });

  return semana
}

module.exports = { getDays };
