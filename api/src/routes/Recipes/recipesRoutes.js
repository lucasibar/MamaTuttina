const { Router } = require('express');
const { getRecipes } = require('./controllers/getRecipes')
const { postNewRecipe } = require('./controllers/postNewRecipe')
const { deleteRecipes } = require('./controllers/deleteRecipes')
const { changesAmountsIngredients } = require('./controllers/changesAmountsIngredients')



const recipesRoutes = Router();

recipesRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getRecipes())}
    catch(error){res.status(400).json({Error: error.message})} 
})

recipesRoutes.post('/newRecipe', async (req, res)=>{

    const idUser = req.userId 
    const { recipe } = req.body
    try{res.status(200).json(await postNewRecipe({recipe, idUser}))}
    catch(error){res.status(400).json({Error: error.message})} 
})

//Agregar a meal una receta o ingrediente o cambiar sus cantitdades
recipesRoutes.put('/', async (req, res)=>{
    try{
        const changesOfAmounts = req.body
        res.status(200).json(await changesAmountsIngredients(changesOfAmounts))}
    catch(error){res.status(400).json({Error: error.message})} 
})

recipesRoutes.delete('/deletRecipes', async (req, res)=>{
    try{
        const { idRecpe } = req.body
        res.status(200).json(await deleteRecipes(idRecpe))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = recipesRoutes;
