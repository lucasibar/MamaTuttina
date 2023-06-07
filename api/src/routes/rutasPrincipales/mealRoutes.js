const { Router } = require('express');
const { addMeal} = require("./controllers/addMeal")

const mealRoutes = Router();

mealRoutes.post('/', async (req, res)=>{
    try{res.status(200).json(await addMeal(req.body))}
    catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = mealRoutes;
