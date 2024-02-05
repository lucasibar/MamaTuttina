const { Router } = require("express");
const {Days, Recipes, Ingredients} = require("../../db");

const setInitialStateRoutes = Router();

setInitialStateRoutes.get("/", async (req, res) => {
  try {
    const actualDay = Days.findAll({where: {day: "Tuesday"}})
    const ingredients = Ingredients.finAll()
    const recipes = Recipes.findAll()

    res.status(200).json({
      actualDay,
      ingredients,
      recipes
    });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
});

module.exports = setInitialStateRoutes;