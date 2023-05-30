const { Router } = require("express");
const {Days, Recipes, Ingredients, Lunches, Dinners, Extras } = require("../../db");

const dataloadRoutes = Router();

const dias = [ {day: 'Monday'}, {day: 'Tuesday'}, {day: 'Wednesday'}, {day: 'Thursday'}, {day: 'Friday'}, {day: 'Saturday'}, {day: 'Sunday'}] 
const recetas = [ {name: "Pollo con pure", category: "Carne"},{name: "Ensalada Cesar", category: "Carne"},{name: "Leche galletitas", category: "Lacteo"}]
const ingredientes = [{name: 'pollo', kcla100gr: 80}, {name: 'pure', kcla100gr: 50}, {name: 'lechuga', kcla100gr: 30}, {name: 'salsa cesar', kcla100gr: 120}, {name: 'leche', kcla100gr: 95}, {name: 'galletitas', kcla100gr: 1200}]

dataloadRoutes.get("/", async (req, res) => {
  try {
    await Days.bulkCreate(dias);
    await Ingredients.bulkCreate(ingredientes)
    await Recipes.bulkCreate(recetas)

    const Lunes = await Days.findOne({where:{day: 'Monday'}})
    const Martes = await Days.findOne({where:{day: 'Tuesday'}})
    const PolloConPure = await Recipes.findOne({where:{name: "Pollo con pure"}})
    const EnsaladaCesar = await Recipes.findOne({where:{name: "Ensalada Cesar"}})
    const LecheGalletitas = await Recipes.findOne({where:{name: "Leche galletitas"}})
    const [pollo, pure, lechuga, salsaCesar, leche, galletitas] = await Ingredients.findAll()


    //CREACION DE TRES RECETAS CON SUS RESPECTIVOS INGREDIENTE Y CANTIDADES SEGUN RECETA
    await PolloConPure.addIngredient(pollo, {
      through: {amount: 200}})
    await PolloConPure.addIngredient(pure, {
      through: {amount: 300}})
    const PolloConPureFinal = await Recipes.findOne({
      where:{name: "Pollo con pure"},
      include: {
        model: Ingredients,
        through: {attributes: ['amount']}
      }
    })

    await EnsaladaCesar.addIngredient(lechuga, {
      through: {amount: 500}})
    await EnsaladaCesar.addIngredient(salsaCesar, {
      through: {amount: 150}})
    await EnsaladaCesar.addIngredient(pollo, {
      through: {amount: 150}})
    const EnsaladaCesarFinal = await Recipes.findOne({
      where:{name: "Ensalada Cesar"},
      include: {
        model: Ingredients,
        through: {attributes: ['amount']}
      }
    })

    await LecheGalletitas.addIngredient(leche, {
      through: {amount: 300}})
    await LecheGalletitas.addIngredient(galletitas, {
      through: {amount: 186}})
    const LecheGalletitasFinal = await Recipes.findOne({
      where:{name: "Leche galletitas"},
      include: {
        model: Ingredients,
        through: {attributes: ['amount']}
      }
    })
    

    //AGREGO UN LUNCH DINNER Y EXTRA AL LUNES. con recipes e ingredientes
    const almuerzo1 = await Lunches.create()
    await almuerzo1.addRecipes(PolloConPureFinal)
    await almuerzo1.addIngredients(leche)
    await almuerzo1.setDay(Lunes);

    const cena1= await Dinners.create()
    await cena1.addRecipes([EnsaladaCesarFinal, PolloConPureFinal])
    await cena1.setDay(Lunes);

    const extra1= await Extras.create()
    await extra1.addRecipes(LecheGalletitasFinal)
    await extra1.setDay(Lunes);


const LunesFinal = await Days.findOne({
  where: { day: 'Monday' },
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

res.status(200).json(LunesFinal);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
});

module.exports = dataloadRoutes;