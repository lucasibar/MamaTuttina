const { PurchaseLists, Ingredients, PurchaseListIngredients } = require("../../../../db");

const changeIngredientAmount = async function ({
  listID,
  ingredientID,
  amount,
  ingredientName
}) {

  try {
    const [setIngredientAmount, created ] = await PurchaseListIngredients.findOrCreate({
      where:{ 
        PurchaseListId: listID,
        IngredientId: ingredientID
      }
    })
    setIngredientAmount.amount = amount
    await setIngredientAmount.save()

    return {ingredientName, listID, amount}
  } catch (error) {
    throw new Error('Failed to connect to the database');
  }
};

module.exports = { changeIngredientAmount };