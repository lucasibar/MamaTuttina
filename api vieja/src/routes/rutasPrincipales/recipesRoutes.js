const { Router } = require('express');
const { getRecipes} = require("./controllers/Recipes/getRecipes")

const recipesRoutes = Router();

recipesRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getRecipes())}
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = recipesRoutes;
