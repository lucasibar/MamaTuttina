const { Router } = require('express');

const dayRoutes = Router();

dayRoutes.get('/', async (req, res)=>{
    try{res.status(200).json("ACA VENDRIA LA INFORMACION DEL DIA, RECETAS E INGREDIENTES")}
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = dayRoutes;
