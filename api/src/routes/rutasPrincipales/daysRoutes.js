const { Router } = require('express');
const { getWeek } = require('./controllers/getWeek')


const daysRoutes = Router();

daysRoutes.get('/week', async (req, res)=>{
    try{res.status(200).json(await getWeek())}
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = daysRoutes;
