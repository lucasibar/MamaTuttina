const { Router } = require('express');
const { getDays} = require("./controllers/getDays")

const daysRoutes = Router();

diasRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(getDays())}
    catch(error){res.status(400).json({Error: error.message})} 
})



module.exports = diasRoutes;
