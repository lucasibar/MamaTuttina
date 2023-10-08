const { Router } = require('express');
const { getWeek } = require('./controllers/Week/getWeek')


const objetivesRoutes = Router();

objetivesRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(2000)}
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = objetivesRoutes;
