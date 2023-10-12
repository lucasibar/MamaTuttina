const { Router } = require('express');
const { getDays } = require('./controllers/Day/getDays')
const { getDayRecipes } = require('./controllers/Day/getDayRecipes')
const { postNewDay } = require('./controllers/Day/postNewDay')


const daysRoutes = Router();

daysRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getDays())}
    catch(error){res.status(400).json({Error: error.message})} 
})
daysRoutes.get('/:idDay', async (req, res)=>{
    const {idDay} = req.params
    try{res.status(200).json(await getDayRecipes(idDay))}
    catch(error){res.status(400).json({Error: error.message})} 
})
daysRoutes.post('/', async (req, res)=>{
    try{
        // ejemplo= {idDay:null, meal:"almuerzo", ingredient: idIngredient, recipe: null((idRecipe)) , amount: 3 , portions: null}
        const newMeal = req.body
        res.status(200).json(await addMealToDay(idDay, newMeal))
    }
    catch(error){res.status(400).json({Error: error.message})
    } 
})
daysRoutes.put('/', async (req, res)=>{
    try{
        //{
        //idDay:ejemplo,
        //recipes:[{idRecipe: tanto, porcions:6}, {idRecipe: tanto2, porcions:6}],
        // ingredients:[{idIngredient: tanto, amount:6}, {idIngredient: tanto2, amount:6}]
        //}
        
        const changesOfAmounts = req.body
        const {idDay} = req.params   
        res.status(200).json(await changeAmount(idDaydayName))}
    catch(error){res.status(400).json({Error: error.message})} 
})
daysRoutes.delet('/', async (req, res)=>{
    try{
        //{
        // idDay: tanto ,
        // idRecipe: null,
        // idIngredient: tanto3
        //}
        
        const changesOfAmounts = req.body
        const {idDay} = req.params   
        res.status(200).json(await changeAmount(idDaydayName))}
    catch(error){res.status(400).json({Error: error.message})} 
})



module.exports = daysRoutes;
