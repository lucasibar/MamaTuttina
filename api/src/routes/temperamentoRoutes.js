const { Router } = require('express');
const {temperamentosApi}  = require  ("./controllers/temperamentosApi")
const temperamentoRoutes = Router();

temperamentoRoutes.get('/', async (req, res)=>{ 
  try{res.status(200).json( await temperamentosApi())}
  catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = temperamentoRoutes