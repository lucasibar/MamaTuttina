const { Router } = require('express');
const { getPlanification } = require('./controllers/getPlanification')
const { postNewDay } = require('./controllers/postNewDay')
const { deleteDay } = require('./controllers/deleteDay')
const { changesAmounts } = require('./controllers/changesAmounts')



const planificationDaysRoutes = Router();


planificationDaysRoutes.get('/', async (req, res)=>{
    const userId = req.headers["authorization"].split(" ")[1];

    try{res.status(200).json(await getPlanification({userId}))}
    catch(error){res.status(400).json({Error: error.message})} 
})

planificationDaysRoutes.post('/newDay', async (req, res)=>{
    const { userId }= req
    const { nameDay } = req.body
    try{res.status(200).json(await postNewDay(userId, nameDay))}
    catch(error){res.status(400).json({Error: error.message})} 
})

//Agregar a meal una receta o ingrediente o cambiar sus cantitdades
planificationDaysRoutes.put('/', async (req, res)=>{
    try{
        const changesOfAmounts = req.body
        res.status(200).json(await changesAmounts(changesOfAmounts))}
    catch(error){res.status(400).json({Error: error.message})} 
})

planificationDaysRoutes.delete('/deletDay', async (req, res)=>{
    try{
        const { idDay } = req.body
        res.status(200).json(await deleteDay(idDay))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = planificationDaysRoutes;
