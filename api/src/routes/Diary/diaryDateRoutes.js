const { Router } = require('express');
const { getDay } = require('./controllers/getDay')
const { changesAmounts } = require('./controllers/changesAmounts')


const diaryDateRoutes = Router();

diaryDateRoutes.get('/', async (req, res)=>{
    const { userId }= req
    const date = req.body
    try{res.status(200).json(await getDay({userId, date}))}
    catch(error){res.status(400).json({Error: error.message})} 
})

diaryDateRoutes.put('/', async (req, res)=>{
    try{
        const changesOfAmounts = req.body
        res.status(200).json(await changesAmounts(changesOfAmounts))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = diaryDateRoutes;
