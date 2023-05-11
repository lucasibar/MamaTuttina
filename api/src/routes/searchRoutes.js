const { Router } = require('express');
const { search } = require("./controllers/search")
const searchRoutes = Router();

searchRoutes.get('/:busqueda', async (req, res)=>{
    const {busqueda} = req.params
    try{res.status(200).json( await search(busqueda))}
    catch(error){res.status(400).json({Error: error.message})} 
})

module.exports = searchRoutes