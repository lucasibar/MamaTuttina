const { Router } = require('express');
const { getListsPurchases } = require('./controllers/Purchases/getListsPurchases')
const { addListsPurchases } = require('./controllers/Purchases/addListsPurchases')
const { changeIngredientAmount } = require('./controllers/Purchases/changeIngredientAmount')


const purchasesRoutes = Router();

purchasesRoutes.get('/', async (req, res)=>{
    try{res.status(200).json(await getListsPurchases())}
    catch(error){res.status(400).json({Error: error.message})} 
})
purchasesRoutes.post('/', async (req, res)=>{
    const igredientsAmounts = req.body
    try{res.status(200).json(await addListsPurchases(igredientsAmounts))}
    catch(error){res.status(400).json({Error: error.message})} 
})
purchasesRoutes.put('/', async (req, res)=>{
    const changes = req.body
    try{res.status(200).json(await changeIngredientAmount(changes))}
    catch(error){res.status(400).json({Error: error.message})} 
})


module.exports = purchasesRoutes;
