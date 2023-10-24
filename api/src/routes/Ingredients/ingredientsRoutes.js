const { Router } = require('express');
const { getIngredients } = require('./controllers/getIngredients')
const { postNewIngredient } = require('./controllers/postNewIngredient')


const ingredientsRoutes = Router();

ingredientsRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getIngredients())}
    catch(error){res.status(400).json({Error: error.message})} 
})

ingredientsRoutes.post('/newIngredient', async (req, res)=>{
    const { ingredient } = req.body
    try{res.status(200).json(await postNewIngredient(ingredient))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = ingredientsRoutes;
