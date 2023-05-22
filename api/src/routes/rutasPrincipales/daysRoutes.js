const { Router } = require('express');
const { getDays } = require('./controllers/getDays')


const daysRoutes = Router();

daysRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getDays())}
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = daysRoutes;
