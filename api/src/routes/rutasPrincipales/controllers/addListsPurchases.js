const { PurchaseLists, Ingredients, PurchaseListIngredients } = require("../../../db");

const addListsPurchases = async function ({ name, ingredients }) {
  try {
    const [listsPurcheses, created] = await PurchaseLists.findOrCreate({
      where: {name: name}
    });
    if

    for (const name in ingredients) {
      console.log(name)
      const ingredient = await Ingredients.findOne({
        where:{name}
      })
      const [ amountIngredient, created ] = await PurchaseListIngredients.findOrCreate({
        where:{
          PurchaseListId: listsPurcheses.id,
          IngredientId: ingredient.id
        }})
    }
    // console.log(respons)
    return "created";

  } catch (error) {
    throw new Error('Failed to connect to the database');
  }
};

module.exports = { addListsPurchases };