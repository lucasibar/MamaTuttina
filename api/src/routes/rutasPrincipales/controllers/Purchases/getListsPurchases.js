const { Ingredients, PurchaseLists } = require("../../../../db");

const getListsPurchases = async function () {   
  const listsPurchases = await PurchaseLists.findAll({
    include: [
      { 
        model: Ingredients,
        attributes: ['name'],
        through:  { attributes: ['amount'] }
      }
    ]
  });
  return listsPurchases
}

module.exports = { getListsPurchases };
