const { Router } = require('express');
const { getIngredients } = require('./controllers/Ingredients/getIngredients')
const ingredientsRoutes = Router();

ingredientsRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getIngredients())}
    catch(error){res.status(400).json({Error: error.message})} 
})
module.exports = ingredientsRoutes;
