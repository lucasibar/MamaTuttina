const { Router } = require('express');
const { getRecipes } = require('./controllers/getRecipes')
const { postNewRecipe } = require('./controllers/postNewRecipe')
const { deleteDay } = require('./controllers/deleteDay')
const { changesAmounts } = require('./controllers/changesAmounts')



const recipesRoutes = Router();

recipesRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getRecipes())}
    catch(error){res.status(400).json({Error: error.message})} 
})

recipesRoutes.post('/newRecipe', async (req, res)=>{
    const { recipe } = req.body
    try{res.status(200).json(await postNewRecipe(recipe))}
    catch(error){res.status(400).json({Error: error.message})} 
})

//Agregar a meal una receta o ingrediente o cambiar sus cantitdades
recipesRoutes.put('/', async (req, res)=>{
    try{
        const changesOfAmounts = req.body
        res.status(200).json(await changesAmounts(changesOfAmounts))}
    catch(error){res.status(400).json({Error: error.message})} 
})

recipesRoutes.delete('/deletDay', async (req, res)=>{
    try{
        const { idDay } = req.body
        res.status(200).json(await deleteDay(idDay))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = recipesRoutes;
