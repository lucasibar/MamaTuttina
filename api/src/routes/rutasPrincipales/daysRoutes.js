const { Router } = require('express');
const { getDays } = require('./controllers/Day/getDays')
const { getDayRecipes } = require('./controllers/Day/getDayRecipes')
const { postNewDay } = require('./controllers/Day/postNewDay')


const daysRoutes = Router();

daysRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getDays())}
    catch(error){res.status(400).json({Error: error.message})} 
})
daysRoutes.get('/:id', async (req, res)=>{
    const {id} = req.params
    try{res.status(200).json(await getDayRecipes(id))}
    catch(error){res.status(400).json({Error: error.message})} 
})
daysRoutes.post('/', async (req, res)=>{
    try{
        const newDay = req.body
        res.status(200).json(await postNewDay(newDay))}
    catch(error){res.status(400).json({Error: error.message})} 
})
daysRoutes.put('/', async (req, res)=>{
    try{
        const dayName = req.body
        res.status(200).json(await changeName(dayName))}
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = daysRoutes;
