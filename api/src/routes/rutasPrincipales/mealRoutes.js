const { Router } = require('express');
const { addRecipe} = require("./controllers/addRecipe")
const { addIngredient} = require("./controllers/addIngredient")

const mealRoutes = Router();

mealRoutes.post('/', async (req, res)=>{
    try{
         let recipe = req.body.recipe    
         if(recipe) await addRecipe({ ...req.body, res })
         else  await addIngredient({ ...req.body, res });
    }
    catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = mealRoutes;
