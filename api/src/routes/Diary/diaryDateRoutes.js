const { Router } = require('express');
const { getDayDiary } = require('./controllers/getDayDiary')
const { dayNotExist } = require('./controllers/dayNotExist')
const { changesAmounts } = require('./controllers/changesAmounts')


const diaryDateRoutes = Router();

diaryDateRoutes.get('/:date', async (req, res)=>{
    const {date} = req.params
    const userId = req.headers["authorization"].split(" ")[1];
    try{res.status(200).json(await getDayDiary({userId, date}))
    }catch (error) {
        try {
            res.status(200).json(await dayNotExist({userId, date}));
        } catch (dbError) {
            res.status(400).json({ error: "Error en la base de datos" });
        }
    } 
})

diaryDateRoutes.put('/', async (req, res)=>{
    try{
        const changesOfAmounts = req.body
        res.status(200).json(await changesAmounts(changesOfAmounts))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = diaryDateRoutes;
