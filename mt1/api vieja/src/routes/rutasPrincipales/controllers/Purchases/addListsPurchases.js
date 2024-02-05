const { PurchaseLists, Ingredients, PurchaseListIngredients } = require("../../../../db");

const addListsPurchases = async function ({ name, ingredients }) {
  try {
    const [listsPurcheses, created] = await PurchaseLists.findOrCreate({
      where: {name: name},
      inclues:[{
        model: Ingredients,
        attributes: ['name'],
        through:  { attributes: ['amount'] }
        }
      ]
    });

    for (const name in ingredients) {
      const ingredient = await Ingredients.findOne({where:{name}})

      const [setAmount, created] = await PurchaseListIngredients.findOrCreate({
        where:{
          PurchaseListId: listsPurcheses.id,
          IngredientId: ingredient.id
        }
      })

      setAmount.amount = ingredients[name]
      await setAmount.save()
    }

    return { name, ingredients };

  } catch (error) {
    throw new Error('Failed to connect to the database');
  }
};

module.exports = { addListsPurchases };