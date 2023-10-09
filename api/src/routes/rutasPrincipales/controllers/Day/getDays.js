const {Days, Recipes } = require("../../../../db");

const getDays = async function () {   
  const DaysList = await Days.findAll({
    order: [
        ['number', 'ASC'] // Orden ascendente por la columna 'name'
      ],
    include: [
      {
        model: Recipes,        
      }
    ]
  });

  return DaysList
}

module.exports = { getDays };
