const { Router } = require('express');
const { getDays } = require('./controllers/Day/getDays')
const { getDayRecipes } = require('./controllers/Day/getDayRecipes')


const daysRoutes = Router();

daysRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getDays())}
    catch(error){res.status(400).json({Error: error.message})} 
})
daysRoutes.get('/:id', async (req, res)=>{
    try{res.status(200).json(await getDayRecipes(id))}
    catch(error){res.status(400).json({Error: error.message})} 
})



module.exports = daysRoutes;
