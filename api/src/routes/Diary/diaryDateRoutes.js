const { Router } = require('express');




const diaryDateRoutes = Router();

diaryDateRoutes.get('/', async (req, res)=>{

    try{res.status(200).json("await getDayMeals(date))")}
    catch(error){res.status(400).json({Error: error.message})} 
})
// diaryDateRoutes.post('/', async (req, res)=>{
//     try{
//         // ejemplo= {idDay:null, meal:"almuerzo", ingredient: idIngredient, recipe: null((idRecipe)) , amount: 3 , portions: null}
//         const newMeal = req.body
//         res.status(200).json(await addMealItem(newMeal))
//     }
//     catch(error){res.status(400).json({Error: error.message})
//     } 
// })
// diaryDateRoutes.put('/', async (req, res)=>{
//     try{
//         //{
//         //idDay:ejemplo,
//         //recipes:[{idRecipe: tanto, porcions:6}, {idRecipe: tanto2, porcions:6}],
//         // ingredients:[{idIngredient: tanto, amount:6}, {idIngredient: tanto2, amount:6}]
//         //}
        
//         const changesOfAmounts = req.body
//         res.status(200).json(await changeAmount(idDaydayName))}
//     catch(error){res.status(400).json({Error: error.message})} 
// })
// diaryDateRoutes.delet('/', async (req, res)=>{
//     try{
//         //{
//         // idDay: tanto ,
//         // idRecipe: null,
//         // idIngredient: tanto3
//         //}
        
//         const itemData = req.body
//         res.status(200).json(await deletMealItem(idDaydayName))}
//     catch(error){res.status(400).json({Error: error.message})} 
// })



module.exports = diaryDateRoutes;
