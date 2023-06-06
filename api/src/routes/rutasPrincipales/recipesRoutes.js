const { Router } = require('express');
const { getRecipe} = require("./controllers/getWeek")

const recipesRoutes = Router();

recipesRoutes.get('/', async (req, res)=>{
    const idRecipe = req.params
    try{res.status(200).json('await getRecipe(idRecipe)')}
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = recipesRoutes;
