const { Router } = require('express');
const { addMeal} = require("./controllers/addMeal")

const mealRoutes = Router();

mealRoutes.post('/', async (req, res)=>{
    const {food, amount, unit, dayId, meal } = req.body
    let response = {}
    if(meal="lunch")   
    if(meal="dinner")  
    if(meal="extra")      
     try{res.status(200).json(await addMeal(req.body))}
    catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = mealRoutes;
