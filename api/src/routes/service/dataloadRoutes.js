const { Router } = require("express");
const {Days, Recipes, Ingredients, DinnerRecipes, LunchRecipes, ExtraIngredients, DinnerIngredients} = require("../../db");

const dataloadRoutes = Router();

const dias = [ {day: 'Monday'}, {day: 'Tuesday'}, {day: 'Wednesday'}, {day: 'Thursday'}, {day: 'Friday'}, {day: 'Saturday'}, {day: 'Sunday'}] 
const recetas = [ {name: "Pollo con pure", category: "Carne"},{name: "Ensalada Cesar", category: "Carne"},{name: "Leche galletitas", category: "Lacteo"}]
const ingredientes = [{name: 'pollo', kcal100gr: 80}, {name: 'pure', kcal100gr: 50}, {name: 'lechuga', kcal100gr: 30}, {name: 'salsa cesar', kcal100gr: 120}, {name: 'leche', kcal100gr: 95}, {name: 'galletitas', kcal100gr: 1200}]

dataloadRoutes.get("/", async (req, res) => {
  try {
    await Days.bulkCreate(dias);
    await Ingredients.bulkCreate(ingredientes)
    await Recipes.bulkCreate(recetas)

    const Martes = await Days.findOne({where:{day: 'Tuesday'}})
    const PolloConPure = await Recipes.findOne({where:{name: "Pollo con pure"}})
    const EnsaladaCesar = await Recipes.findOne({where:{name: "Ensalada Cesar"}})
    const LecheGalletitas = await Recipes.findOne({where:{name: "Leche galletitas"}})
    const [pollo, pure, lechuga, salsaCesar, leche, galletitas] = await Ingredients.findAll()


    //CREACION DE TRES RECETAS CON SUS RESPECTIVOS INGREDIENTE Y CANTIDADES SEGUN RECETA
    await PolloConPure.addIngredient(pollo, { through: { amount: 200, unit: 'grs' } })
    await PolloConPure.addIngredient(pure, { through: { amount: 150, unit: 'grs' } })
    const PolloConPureFinal = await Recipes.findOne({
      where:{name: "Pollo con pure"},
      include: {
        model: Ingredients,    
        through: { attributes: ['amount', 'unit'] }
      }
    }) 
    

    await EnsaladaCesar.addIngredient(lechuga, { through: { amount: 200, unit: 'grs' } })
    await EnsaladaCesar.addIngredient(salsaCesar, { through: { amount: 2, unit: 'cucharadas' } })
    await EnsaladaCesar.addIngredient(pollo, { through: { amount: 200, unit: 'grs' } })
    const EnsaladaCesarFinal = await Recipes.findOne({
      where:{name: "Ensalada Cesar"},
      include: {
        model: Ingredients,    
        through: { attributes: ['amount', 'unit'] }
      }
    })

    await LecheGalletitas.addIngredient(leche, { through: { amount: 200, unit: 'grs' } })
    await LecheGalletitas.addIngredient(galletitas, { through: { amount: 200, unit: 'grs' } })
    const LecheGalletitasFinal = await Recipes.findOne({
      where:{name: "Leche galletitas"},
      include: {
        model: Ingredients,
        through: { attributes: ['amount', 'unit'] }
      }
    })

    //AGREGO UN DINNER  recetas(x2) e Ingredients AL MARTES
    await DinnerRecipes.create({
      RecipeId: PolloConPureFinal.id,
      DayId: Martes.id,
      amount:1,
      unit:'plato'
    })
    await DinnerRecipes.create({
      RecipeId: LecheGalletitasFinal.id,
      DayId: Martes.id,
      amount:1,
      unit:'vaso'
    })

    await DinnerIngredients.create({
      IngredientId: lechuga.id,
      DayId: Martes.id,
      amount:1,
      unit:'vaso'
    })

    //AGREGO UN LUNCH   Ingredients(x2) AL MARTES
    await LunchRecipes.create({
      RecipeId: EnsaladaCesar.id,
      DayId: Martes.id,
      amount:1,
      unit:'plato'
    })
   
    //AGREGO UN EXRTA  recetas(x2) e Ingredients AL MARTES
    await ExtraIngredients.create({
      IngredientId: galletitas.id,
      DayId: Martes.id,
      amount:1,
      unit:'gramos'
    })
    await ExtraIngredients.create({
      IngredientId: leche.id,
      DayId: Martes.id,
      amount:1,
      unit:'vaso'
    })

    

    const MartesFinal = await Days.findAll({
      where: {},
      include: [

        // TRAIGO LAS RECETAS CON SUS TRES RESPECTIVAS ELACIONES LUNCH DINNER EXTRAS
        {
          model: Recipes,
          as: 'lunchRecipes',
          through: { attributes: ['amount', 'unit'] },
          include: [
            {
              model: Ingredients,
              through: { attributes: ['amount', 'unit'] },
            },
          ],
        },
        {
          model: Recipes,
          as: 'dinnerRecipes',
          through: { attributes: ['amount', 'unit'] },
          include: [
            {
              model: Ingredients,
              through: { attributes: ['amount', 'unit'] },
            },
          ],
        },
        {
          model: Recipes,
          as: 'extraRecipes',
          through: { attributes: ['amount', 'unit'] },
          include: [
            {
              model: Ingredients,
              through: { attributes: ['amount', 'unit'] },
            },
          ],
        },

        
        // TRAIGO LAS RECETAS CON SUS TRES RESPECTIVAS ELACIONES LUNCH DINNER EXTRAS
        {
          model: Ingredients,
          as: 'lunchIngredients',
          through: { attributes: ['amount', 'unit'] },
        },   
        {
          model: Ingredients,
          as: 'dinnerIngredients',
          through: { attributes: ['amount', 'unit'] },
        },   
        {
          model: Ingredients,
          as: 'extraIngredients',
          through: { attributes: ['amount', 'unit'] },
        }
      ],
      order: [['id', 'DESC']],
      limit: 7,
    });
res.status(200).json(MartesFinal);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
});

module.exports = dataloadRoutes;