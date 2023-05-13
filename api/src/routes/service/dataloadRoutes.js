const { Router } = require("express");
const {Days, Recipes, Ingredients } = require("../../db");

const dataloadRoutes = Router();

const dias = [ {day: "Lunes"}, {day: "Martes"}, {day: "Miercoles"}, {day: "Jueves"}, {day: "Viernes"}, {day: "Sabado"}, {day: "Domingo"}] 
const recetas = [ {name: "Pollo con pure", category: "Carne"},{name: "Ensalada Cesar", category: "Carne"},{name: "Leche galletitas", category: "Lacteo"}]
const ingredientes = [{name: 'pollo', kcla100gr: 80}, {name: 'pure', kcla100gr: 50}, {name: 'lechuga', kcla100gr: 30}, {name: 'salsa cesar', kcla100gr: 120}, {name: 'leche', kcla100gr: 95}, {name: 'galletitas', kcla100gr: 1200}]

dataloadRoutes.get("/", async (req, res) => {
  try {
    await Days.bulkCreate(dias);
    await IngredientbulkCreate(ingredientesParaRecetasEjemplo)
    await Recipes.bulkCreate(recetasEjemplo)


    res.status(200).json("Se subieron los dias correctamente");
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
});

module.exports = dataloadRoutes;