const { PurchaseLists } = require("../../../../db");

const getListsPurchases = async function () {   
  const listsPurchases = await PurchaseLists.findAll({
    include: [
        {
          model: Ingredients,
          through: { attributes: ['amount'] }
        }
    ]
  });

  return listsPurchases
}

module.exports = { getListsPurchases };
